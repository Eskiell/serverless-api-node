const { buildResponse } = require('../utils/response.js');
const handler = async () => {
  const now = new Date();
  return buildResponse(200, {
    horario: now.toISOString(),
    timestamp: now.getTime(),
  });
};

module.exports = { handler };