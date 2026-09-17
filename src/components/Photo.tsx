import Image, { type ImageProps } from "next/image";

export function Photo({ quality = 90, ...props }: ImageProps) {
  return <Image quality={quality} {...props} />;
}
