# Strapi plugin ActivityLog

```
yarn add strapi-plugin-activitylog
yarn build
yarn develop
```

**Settings**
- ./config/middleware.js
```
settings: {
	activitylog: {
		enabled: true,
		adminlogdb: ["DELETE", "PUT", "POST"], // Array of methods to log to database for admin panel activity
		adminlogconsole: null, // Array of methods to log to console for admin panel activity
		apilogdb: ["DELETE", "PUT", "POST"], // Array of methods to log to database for api activity
		apilogconsole: null // Array of methods to log to console for api activity
	}
}
```

