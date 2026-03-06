const { buildResponse } = require('../utils/response');
const { withObservability } = require('../utils/middleware');
const { withCache } = require('../utils/cache');

const getText = async () => {
  return buildResponse(200, {
    message: 'Bem-vindo à API Serverless!',
  });
};

const cachedGetText = withCache('getText', 10, getText);

module.exports = { handler: withObservability('getText', cachedGetText) };