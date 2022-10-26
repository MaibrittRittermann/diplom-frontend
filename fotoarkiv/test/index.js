// This is used to serve the app for integration tests with the API via Cucumber
/*eslint no-console: ["error", { allow: ["log"] }] */

// Dependencies
require('dotenv').config();
const express = require('express');
const httpShutdown = require('http-shutdown');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = process.env.PORT || 3002;

const server = httpShutdown(app.listen(port, () => {
	console.log(`Web is listening on port ${port}`);
}));

server.host = `http://localhost:${port}`;

module.exports = server;