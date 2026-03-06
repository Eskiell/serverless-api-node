const { buildResponse } = require('../utils/response');
const { withObservability } = require('../utils/middleware');
const { withCache } = require('../utils/cache');

const getTime = async () => {
  const now = new Date();

  return buildResponse(200, {
    horario: now.toISOString(),
    timestamp: now.getTime(),
  });
};

const cachedGetTime = withCache('getTime', 10, getTime);

module.exports = { handler: withObservability('getTime', cachedGetTime) };