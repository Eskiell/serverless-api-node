const { logger } = require('./logger');
const { metrics } = require('./metrics');

const withObservability = (functionName, handler) => {
  return async (event, context) => {
    const start = Date.now();
    const requestId = context.awsRequestId;

    logger.info('Request received', {
      functionName,
      requestId,
      path: event.rawPath || event.path,
      method: event.requestContext?.http?.method || 'UNKNOWN',
      queryParams: event.queryStringParameters || {},
      userAgent: event.headers?.['user-agent'],
    });

    metrics.requestCount(functionName);

    try {
      const response = await handler(event, context);
      const duration = Date.now() - start;

      metrics.latency(functionName, duration);

      logger.info('Request completed', {
        functionName,
        requestId,
        statusCode: response.statusCode,
        duration: `${duration}ms`,
      });

      return response;
    } catch (error) {
      const duration = Date.now() - start;

      metrics.errorCount(functionName);
      metrics.latency(functionName, duration);

      logger.error('Request failed', {
        functionName,
        requestId,
        error: error.message,
        stack: error.stack,
        duration: `${duration}ms`,
      });

      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: 'Erro interno do servidor' }),
      };
    }
  };
};

module.exports = { withObservability };
