// This is used to serve the app for integration tests with the API via Cucumber
/*eslint no-console: ["error", { allow: ["log"] }] */

// Dependencies
require('dotenv').config();
const express = require('express');
const httpShutdown = require('http-shutdown');
const path = require('path');
const app = express();
// const config = require('config');

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Listen on the port
const server = httpShutdown(app.listen(process.env.Port, () => {
	console.log(`Web is listening on port ${process.env.Port}`);
}));

server.host = `http://localhost:${process.env.Port}`;

module.exports = server;