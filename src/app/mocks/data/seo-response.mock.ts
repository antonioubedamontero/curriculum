import { SEO } from '../../interfaces';

export const ogTagsMock = {
  title: 'og title',
  description: 'og description',
  url: 'og url',
  image: 'og image',
  site_name: 'og sitename',
  locale: 'og locale',
};

export const seoMock: SEO = {
  title: 'title',
  metaTags: {
    author: 'author',
    description: 'desc',
    keywords: 'tag1, tag2, tag3',
  },
  ogTags: ogTagsMock,
};
