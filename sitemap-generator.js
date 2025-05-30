const fs = require("fs");

const siteMapData = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://antonioubedamontero.com/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://antonioubedamontero.com/es/web-developer</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://antonioubedamontero.com/en/web-developer</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
    </url>
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", siteMapData);
