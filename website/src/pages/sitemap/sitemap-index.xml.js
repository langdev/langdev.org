const site = 'https://blog.langdev.org'

export function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${site}/sitemap/sitemap-0.xml</loc></sitemap></sitemapindex>`,
    { headers: { 'Content-Type': 'application/xml' } },
  )
}
