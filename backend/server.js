require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

const speciesRoutes = require('./routes/speciesRoutes');
const treeRoutes = require('./routes/treeRoutes');

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/tree', treeRoutes);
app.use('/api/species', speciesRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
