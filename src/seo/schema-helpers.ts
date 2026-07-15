import { SITE_ORIGIN } from "@/seo/sitemap-config";

export const BUSINESS_ID = `${SITE_ORIGIN}/#business`;

export const breadcrumbList = (
  items: { name: string; path: string }[]
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_ORIGIN}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
  })),
});
