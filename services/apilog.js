'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
	find(params, populate) {
    return strapi.query('apilog', 'activitylog').find(params, populate);
	},

	findOne(params, populate) {
    return strapi.query('apilog', 'activitylog').findOne(params, populate);
	},

	count(params) {
    return strapi.query('apilog', 'activitylog').count(params);
	},
	
	async create(data, { files } = {}) {
    const entry = await strapi.query('apilog', 'activitylog').create(data);

		return this.findOne({ id: entry.id });

	},
	
	delete(params) {
    return strapi.query('apilog', 'activitylog').delete(params);
  },
};
