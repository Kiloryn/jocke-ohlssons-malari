import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";
import { NextResponse } from "next/server.js";

const source = ts.transpileModule(
  readFileSync(new URL("../src/app/api/contact/route.ts", import.meta.url), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }
).outputText;

const configured = {
  RESEND_API_KEY: "test-key",
  CONTACT_TO_EMAIL: "owner@example.com",
  CONTACT_FROM_EMAIL: "Website <web@example.com>",
};
const valid = { name: " Anna ", contact: "anna@example.com", msg: " Måla mitt kök. " };

function setup(env = configured, send = async () => Response.json({ id: "test-id" })) {
  const calls = [];
  const context = vm.createContext({
    exports: {},
    require: () => ({ NextResponse }),
    process: { env },
    AbortSignal,
    fetch: async (...args) => { calls.push(args); return send(...args); },
  });
  vm.runInContext(source, context);
  return {
    calls,
    post: (body) => context.exports.POST(new Request("https://example.com/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
    })),
    raw: (body) => context.exports.POST(new Request("https://example.com/api/contact", {
      method: "POST", body,
    })),
  };
}

test("sends through Resend with a fixed sender and visitor reply-to", async () => {
  const app = setup();
  assert.equal((await app.post(valid)).status, 200);
  assert.equal(app.calls.length, 1);
  const [url, options] = app.calls[0];
  assert.equal(url, "https://api.resend.com/emails");
  assert.equal(options.method, "POST");
  assert.equal(options.headers.Authorization, "Bearer test-key");
  assert.ok(options.signal instanceof AbortSignal);
  assert.deepEqual(JSON.parse(options.body), {
    to: ["owner@example.com"], from: configured.CONTACT_FROM_EMAIL,
    reply_to: "anna@example.com", subject: "Offertförfrågan – Anna",
    text: "Namn: Anna\nKontakt: anna@example.com\n\nMeddelande:\nMåla mitt kök.\n",
  });
});

test("phone contacts and free text stay in the body, outside reply-to", async () => {
  for (const contact of ["070-123 45 67", "Anna <anna@example.com>", "anna@example.com\r\nBcc:other@example.com"]) {
    const app = setup();
    assert.equal((await app.post({ ...valid, contact })).status, 200);
    const payload = JSON.parse(app.calls[0][1].body);
    assert.equal(payload.reply_to, undefined);
    assert.ok(payload.text.includes(contact));
  }
});

test("missing configuration keeps the call-instead fallback", async () => {
  for (const key of Object.keys(configured)) {
    const app = setup({ ...configured, [key]: " " });
    assert.equal((await app.post(valid)).status, 501);
    assert.equal(app.calls.length, 0);
  }
});

test("provider rejection and network timeout never report success", async () => {
  for (const send of [async () => new Response("rejected", { status: 403 }), async () => { throw new DOMException("Timed out", "TimeoutError"); }]) {
    const app = setup(configured, send);
    const response = await app.post(valid);
    assert.equal(response.status, 500);
    assert.equal((await response.json()).ok, false);
  }
});

test("honeypot submissions never call Resend", async () => {
  const app = setup();
  assert.equal((await app.post({ ...valid, companyWebsite: "spam" })).status, 200);
  assert.equal(app.calls.length, 0);
});

test("invalid JSON, missing fields and oversize input cannot send", async () => {
  const app = setup();
  assert.equal((await app.raw("{" )).status, 400);
  for (const payload of [null, [], "text", {}, { ...valid, name: 5 }, { ...valid, msg: "x".repeat(5001) }]) {
    assert.equal((await app.post(payload)).status, 400);
  }
  assert.equal(app.calls.length, 0);
});
