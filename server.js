const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/database');

const apiRouter = require('./routes/api');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', apiRouter);

// app.get('/*', function (req, res) {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, function () {
	console.log(`Express app running on port ${port}`);
});
