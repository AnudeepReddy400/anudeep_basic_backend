const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Chalk } = require('./utils');

require('dotenv').config();
const routesApi = require('./src/api');
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/public',express.static('public'))

app.use('/static', express.static('static'));
app.use('/api', routesApi);

app.get('*', (_, res) => res.status(200).json({ message: 'App running well..! :)' }));
  
app.listen(process.env.PORT, () => {
    Chalk.info(`App is running on http://localhost:${process.env.PORT}`);
});
