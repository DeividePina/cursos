/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out', // ou qualquer outro nome de diret�rio que voc� deseje
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/faq': { page: '/faq' },
        // Adicione outras rotas, se necess�rio
      };
    },
  };
  
  module.exports = nextConfig;  