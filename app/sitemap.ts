export default async function sitemap() {

  let routes = ['', '/blog', '/guestbook', '/uses', '/work'].map((route) => ({
    url: `https://joeward.me${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
