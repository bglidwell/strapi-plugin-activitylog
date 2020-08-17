'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
	find(params, populate) {
    return strapi.query('adminlog', 'activitylog').find(params, populate);
	},

	findOne(params, populate) {
    return strapi.query('adminlog', 'activitylog').findOne(params, populate);
	},

	count(params) {
    return strapi.query('adminlog', 'activitylog').count(params);
	},
	
	async create(data, { files } = {}) {
    const entry = await strapi.query('adminlog', 'activitylog').create(data);

		return this.findOne({ id: entry.id });

	},
	
	delete(params) {
    return strapi.query('adminlog', 'activitylog').delete(params);
  },
};
