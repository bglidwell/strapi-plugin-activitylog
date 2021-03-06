'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.plugins['activitylog'].services.apilog.search(ctx.query);
    } else {
      entities = await strapi.plugins['activitylog'].services.apilog.find(ctx.query);
    }

		// return entities.map(entity => sanitizeEntity(entity, { model: strapi.plugins['activitylog'].models.apilog }));
		return entities
	},
	
	async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.plugins['activitylog'].services.apilog.findOne({ id });
		// return sanitizeEntity(entity, { model: strapi.plugins['activitylog'].models.apilog });
		return entity
	}
};
