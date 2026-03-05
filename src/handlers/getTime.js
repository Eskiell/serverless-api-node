const { buildResponse } = require('../utils/response');
const { withObservability } = require('../utils/middleware');

const getTime = async () => {
  const now = new Date();

  return buildResponse(200, {
    horario: now.toISOString(),
    timestamp: now.getTime(),
  });
};

module.exports = { handler: withObservability('getTime', getTime) };
