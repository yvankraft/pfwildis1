import { i18n } from '../i18n-config';

const BASE_URL = 'https://pfwildis1.vercel.app';
const PATHS = ['', '/About', '/Project', '/contact', '/tuto/auto', '/tuto/cv', '/tuto/droners', '/tuto/e-shop', '/tuto/pf'];

export default function sitemap() {
  return i18n.locales.flatMap((locale) =>
    PATHS.map((path) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : 0.8,
    }))
  );
}
