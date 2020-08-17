# Strapi plugin activitylog

This plugin allows you to log activity (currently filtered by REST Method) performed on your Strapi server.

Two new content-types will appear named APILog and AdminLog respectively, and will capture incoming information. 

## Available settings (config/middleware.js)
 ```
 settings: {
    activitylog: {
			enabled: true,                  // enable/disable plugin
			adminlogdb: ['GET', 'PUT'],     // REST Methods to log to DB (Admin routes)
			adminlogconsole: [],            // REST Methods to log to info (Admin routes)
			apilogdb: [],                   // REST Methods to log to DB (API routes)
			apilogconsole: [],              // REST Methods to log to info (API routes)
    }
  }
```
