const removePasswords = (key, value) => (key === 'password' ? undefined : value)

module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
				await next()

				const entry = {
					username: ctx.state.user ? ctx.state.user.email : 'public',
					user: ctx.state.user ? ctx.state.user.id : null,
					ip: ctx.request.ip,
					method: ctx.request.method,
					route: ctx.path,
					params: ctx.params,
					query: ctx.request.query,
					body: ctx.request.body,
					adminActivity: !Object.keys(strapi.api).some(endpoint => endpoint.startsWith(ctx.path.split('/')[1]))
				}

				const config = strapi.config.middleware.settings.activitylog

				if(entry.route != '/graphql') { //ignore graphql routes for now
					if(entry.adminActivity) {
						//Send to admin activityLog
						if(config.adminlogconsole && config.adminlogconsole.includes(entry.method)) strapi.log.info('ADMIN: ' + JSON.stringify(entry, removePasswords))
						if(config.adminlogdb && config.adminlogdb.includes(entry.method)) await strapi.plugins['activitylog'].services['adminlog'].create(entry)
					} else { 
						//Send to API activityLog
						if(config.apilogconsole && config.apilogconsole.includes(entry.method)) strapi.log.info('API: ' + JSON.stringify(entry, removePasswords))
						if(config.apilogdb && config.apilogdb.includes(entry.method)) await strapi.plugins['activitylog'].services['apilog'].create(entry)
					}
				}

      })
    },
  }
}