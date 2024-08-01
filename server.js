const app = require('./src/app');
const { baseWebhookURL } = require('./src/config');
require('dotenv').config();

// Start the server
const port = process.env.PORT || 3000;

// Check if BASE_WEBHOOK_URL environment variable is available
if (!baseWebhookURL) {
  console.error('A variável BASE_WEBHOOK_URL não está declarada no escopo... Considere verificar isso mais pra frente..');
  // process.exit(1) // Terminate the application with an error code
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('==============[ ACESSO ]==============\n\nSERVIDOR -> https://sitedotheg.site/api-wpp/api-docs/\nLOCAL -> http://127.0.0.1:4343/api-docs/\n\n==============[ ACESSO ]==============');
});