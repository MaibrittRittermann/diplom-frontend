// Writes a file to src/config.js exporting the environment variables
const environment = require('../environment');
const fs = require('fs');
const path = require('path');
const {
  REACT_APP_API_URL,
  PORT,
  env
} = environment;

const template = `const REACT_APP_API_URL = "${REACT_APP_API_URL}";
const PORT = ${PORT};
export {
  REACT_APP_API_URL,
  PORT
};`;
const filePath = path.join(process.cwd(), 'src/config.js');

fs.writeFile(filePath, template, err => {
  console.log(`Generated config for web for ${env}`);
});