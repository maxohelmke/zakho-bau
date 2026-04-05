import { useEffect } from "react";
import { SITE_ORIGIN } from "@/seo/sitemap-config";

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  robots?: string;
  /** Vollständige URL (z. B. Open Graph / Twitter Card) */
  image?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

const setMetaByName = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const setMetaByProperty = (property: string, content: string) => {
  let meta = document.querySelector(
    `meta[property="${property}"]`
  ) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", href);
};

const setStructuredData = (
  structuredData?: Record<string, unknown> | Record<string, unknown>[]
) => {
  const existingScripts = document.querySelectorAll(
    'script[type="application/ld+json"][data-managed-by="use-page-seo"]'
  );
  existingScripts.forEach((script) => script.remove());

  if (!structuredData) return;

  const entries = Array.isArray(structuredData) ? structuredData : [structuredData];
  entries.forEach((entry) => {
    const script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("data-managed-by", "use-page-seo");
    script.textContent = JSON.stringify(entry);
    document.head.appendChild(script);
  });
};

export const usePageSeo = ({
  title,
  description,
  path,
  robots,
  image,
  structuredData,
}: SeoOptions) => {
  useEffect(() => {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const canonicalUrl = `${SITE_ORIGIN}${cleanPath}`;

    document.title = title;

    setMetaByName("description", description);
    setMetaByName("robots", robots ?? "index,follow");
    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);

    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty("og:locale", "de_DE");

    if (image) {
      setMetaByProperty("og:image", image);
      setMetaByName("twitter:image", image);
    } else {
      document.querySelector('meta[property="og:image"]')?.remove();
      document.querySelector('meta[name="twitter:image"]')?.remove();
    }

    setCanonical(canonicalUrl);
    setStructuredData(structuredData);
  }, [title, description, path, robots, image, structuredData]);
};

