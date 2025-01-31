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
      credentials: true,
      headers: ['Content-Type', 'Authorization'],
      origin: ['http://localhost:3000', 
        'http://torchlight.foundation',
        'https://torchlight.foundation',
        'http://www.torchlight.foundation',
        'https://www.torchlight.foundation',
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
