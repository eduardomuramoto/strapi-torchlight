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
      headers: '*',
      origin: ['http://localhost:3000', 
        'http://next-torchlight.vercel.app',
        'https://next-torchlight.vercel.app', 
        'https://next-torchlight-git-main-eduardo-muramotos-projects.vercel.app/',
        'https://next-torchlight-1f2a19f11-eduardo-muramotos-projects.vercel.app/',
      ],  // Allow all origins; replace with specific domains in production
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
