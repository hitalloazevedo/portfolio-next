import { GetServerSideProps } from "next";

const siteUrl = "https://hitalloazevedo.vercel.app"; // Substitua pelo domínio real

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const routes = ["/"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
      <url>
        <loc>${siteUrl}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
