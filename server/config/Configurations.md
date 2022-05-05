# Configurations

## **connections.json**

**Path:** `/server/config/connections.json`

This file houses all the available connections options for the database server.

#

## **connections.config.ts:**

**Path:** `server/config/connections.config.ts`

This file systematically configures the database connection options based on the environment specified in the `.env` file.

#

## **database.config.ts:**

**Path:** `server/config/database.config.ts`

This file dynamically specifies the connection to the database and returns the database connection instance.

#

## **environment.config.ts**

**Path:** `server/config/environment.config.ts`

This file houses all the available environments for the application and is capable of returning the correct configuration for each environment specified in the `.env` file.
