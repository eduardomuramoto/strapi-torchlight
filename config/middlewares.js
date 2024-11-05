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
      origin: ['http://localhost:3000', 'https://next-torchlight.vercel.app/', 'http://next-torchlight.vercel.app/'],  // Allow all origins; replace with specific domains in production
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
