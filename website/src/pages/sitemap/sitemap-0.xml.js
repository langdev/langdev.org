import { getCollection } from 'astro:content'

const site = 'https://blog.langdev.org'

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

export async function GET() {
  const posts = await getCollection('posts')
  const urls = [
    `<url><loc>${site}/</loc></url>`,
    ...posts.map(
      ({ data }) =>
        `<url><loc>${escapeXml(new URL(data.path, site).href)}</loc><lastmod>${data.date}</lastmod></url>`,
    ),
  ]

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  )
}
