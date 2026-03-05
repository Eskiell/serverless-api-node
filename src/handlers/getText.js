const { buildResponse } = require('../utils/response.js');

const handler = async () => {
  return buildResponse(200, {
    message: 'Bem-vindo à API Serverless!',
  });
};

module.exports = { handler };