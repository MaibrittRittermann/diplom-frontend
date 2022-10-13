// Writes a file to src/config.js exporting the baseUrl property
const config = require('../config');
const fs = require('fs');
const path = require('path');
const {
  jwtPrivateKey,
  connectionString,
  GOOGLE_APPLICATION_CREDENTIALS,
  env,
  GPC_ENDPOINT_ID,
  GPC_DATASET_ID,
  GPC_MODEL_NAME,
  GPC_PROJECT_ID,
  GPC_LOCATION
} = config;

const template = `const Diplom_jwtPrivateKey = '${jwtPrivateKey}';
const connectionString = '${connectionString}';
const GOOGLE_APPLICATION_CREDENTIALS = ${GOOGLE_APPLICATION_CREDENTIALS};
const GPC_ENDPOINT_ID = ${GPC_ENDPOINT_ID};
const GPC_DATASET_ID = '${GPC_DATASET_ID}';
const GPC_MODEL_NAME = '${GPC_MODEL_NAME}';
const GPC_PROJECT_ID = '${GPC_PROJECT_ID}';
const GPC_LOCATION = '${GPC_LOCATION}';
export {
  baseUrl,
  jwtPrivateKey,
  connectionString,
  GPC_ENDPOINT_ID,
  GPC_DATASET_ID,
  GPC_MODEL_NAME,
  GPC_PROJECT_ID,
  GPC_LOCATION
};`;
const filePath = path.join(process.cwd(), 'src/config.js');

fs.writeFile(filePath, template, err => {
  console.log(`Generated config for web for ${env}`);
});