import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export interface Config {
  port: number;
  nodeEnv: string;
  isProduction: boolean;
  isDevelopment: boolean;
  staticPath: string;
  corsOrigins: string[];
}

const config: Config = {
  port: parseInt(process.env.PORT || '80', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV !== 'production',
  staticPath: process.env.STATIC_PATH || path.resolve(__dirname, '../../../frontend/out'),
  corsOrigins: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000'],
};

export default config;
