"use client";

import Image, { ImageProps } from "next/image";

const cloudinaryLoader = ({ src, width, quality }: any) => {
  const q = quality || "auto";
  return `https://res.cloudinary.com/demsns90k/image/upload/f_auto,q_${q},w_${width}/${src}`;
};

export default function CldImage(props: ImageProps) {
  return <Image loader={cloudinaryLoader} {...props} />;
}