# Strapi plugin ActivityLog

```
npm install strapi-plugin-activitylog
```

**Settings**
- ./config/middlewares.js
```
settings: {
	activitylog: {
		enabled: true,
		adminlogdb: ['DELETE'], // Array of methods to log to database for admin panel activity
		adminlogconsole: null, // Array of methods to log to console for admin panel activity
		apilogdb: ['DELETE'], // Array of methods to log to database for api activity
		apilogconsole: null // Array of methods to log to console for api activity
	}
}
```

