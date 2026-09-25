import type { Metadata } from "next";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "article" | "website";
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/mouse.jpg",
  type = "article",
}: PageMetadataOptions): Metadata {
  const url = new URL(path, "https://aim-kinetics.com").href;
  const images = [{ url: new URL(image, url).href, alt: title }];

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: "AIMの教科書",
      locale: "ja_JP",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
