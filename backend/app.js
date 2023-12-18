const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

const app = express();
const port = 3001;

// Ajoutez d'autres configurations si nécessaire...
app.use(bodyParser.json());

// Appliquez la route API à /api
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});