const { buildResponse } = require('../utils/response');
const { withObservability } = require('../utils/middleware');

const getText = async () => {
  return buildResponse(200, {
    message: 'Bem-vindo à API Serverless!',
  });
};

module.exports = { handler: withObservability('getText', getText) };
