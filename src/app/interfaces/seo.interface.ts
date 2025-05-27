export interface SEO {
  title: string;
  metaTags: MetaTags;
  ogTags: OgMetags;
}

export interface MetaTags {
  author: string;
  description: string;
  keywords: string;
}

export interface OgMetags {
  title: string;
  description: string;
  url: string;
  image: string;
  site_name: string;
  locale: string;
}
