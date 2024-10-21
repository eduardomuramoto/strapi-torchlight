'use strict';

/**
 * get-support service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-support.get-support');
