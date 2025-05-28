import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console(), // ✅ Use only console
  ],
});

const stream = {
  write: (message: string) => {
    logger.info(message.trim());
  },
};

export { logger, stream };
