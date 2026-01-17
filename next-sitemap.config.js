/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://ray-mawina.co.za',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  exclude: ["/admin/*", "/secret"],
  
};

module.exports = config;