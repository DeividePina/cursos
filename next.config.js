/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out', // ou qualquer outro nome de diretório que você deseje
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/faq': { page: '/faq' },
        // Adicione outras rotas, se necessário
      };
    },
  };
  
  module.exports = nextConfig;  