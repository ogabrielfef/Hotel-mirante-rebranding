/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://miranteparquehotel.com.br/",
  generateRobotsTxt: true,

  outDir: "./public", // 👈 ESSENCIAL

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};