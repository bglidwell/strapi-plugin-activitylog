'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
	find(params, populate) {
    return strapi.query('adminlog', 'activity-log').find(params, populate);
	},

	findOne(params, populate) {
    return strapi.query('adminlog', 'activity-log').findOne(params, populate);
	},

	count(params) {
    return strapi.query('adminlog', 'activity-log').count(params);
	},
	
	async create(data, { files } = {}) {
    const entry = await strapi.query('adminlog', 'activity-log').create(data);

		return this.findOne({ id: entry.id });

	},
	
	delete(params) {
    return strapi.query('adminlog', 'activity-log').delete(params);
  },
};
