import { config } from 'dotenv';
config();

const appConfig = {
  ENVIRONMENT: process.env.ENVIRONMENT || 'local',
  MONGODB_URI: process.env.MONGODB_URI || '',
  PORT: process.env.PORT || 3000,
};

/* Configuration Log Checker */
console.log(appConfig);

export default appConfig;
