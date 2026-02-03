import { createApp } from './app';
import config from './config';

const app = createApp();

const server = app.listen(config.port, () => {
  console.log(`
========================================
  TheMossConcept Backend Server
========================================
  Environment: ${config.nodeEnv}
  Port: ${config.port}
  Static Path: ${config.staticPath}
========================================
  `);
});

// Graceful shutdown
const shutdown = (signal: string): void => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });

  // Force close after 10 seconds
  setTimeout(() => {
    console.error('Forcing shutdown...');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
