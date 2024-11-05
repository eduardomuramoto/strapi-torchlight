module.exports = ({ env }) =>  [
  // Default middleware configuration with additional CORS settings
  {
    name: 'strapi::logger',
  },
  {
    name: 'strapi::errors',
  },
  {
    name: 'strapi::security',
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000', 'https://strapi-torchlight.onrender.com','https://next-torchlight-nhvoelslg-eduardo-muramotos-projects.vercel.app'],  // Allow all origins; replace with specific domains in production
      methods: ['GET', 'POST', 'OPTIONS'],
    },
  },
  {
    name: 'strapi::poweredBy',
  },
  {
    name: 'strapi::query',
  },
  {
    name: 'strapi::body',
  },
  {
    name: 'strapi::session',
  },
  {
    name: 'strapi::favicon',
  },
  {
    name: 'strapi::public',
  },
];
