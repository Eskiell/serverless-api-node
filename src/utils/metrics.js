// CloudWatch Embedded Metric Format (EMF)
// Publica métricas customizadas sem custo extra via logs estruturados

const putMetric = (namespace, metricName, value, unit = 'Count', dimensions = {}) => {
  const emf = {
    _aws: {
      Timestamp: Date.now(),
      CloudWatchMetrics: [
        {
          Namespace: namespace,
          Dimensions: [Object.keys(dimensions)],
          Metrics: [{ Name: metricName, Unit: unit }],
        },
      ],
    },
    [metricName]: value,
    ...dimensions,
  };

  console.log(JSON.stringify(emf));
};

const metrics = {
  requestCount: (functionName) => {
    putMetric('ServerlessAPI', 'RequestCount', 1, 'Count', {
      FunctionName: functionName,
      Stage: process.env.STAGE || 'unknown',
    });
  },

  latency: (functionName, durationMs) => {
    putMetric('ServerlessAPI', 'Latency', durationMs, 'Milliseconds', {
      FunctionName: functionName,
      Stage: process.env.STAGE || 'unknown',
    });
  },

  errorCount: (functionName) => {
    putMetric('ServerlessAPI', 'ErrorCount', 1, 'Count', {
      FunctionName: functionName,
      Stage: process.env.STAGE || 'unknown',
    });
  },
};

module.exports = { metrics };
