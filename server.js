const express = require('express');
require('dotenv').config();

const api = express();
api.get('/public', function (req, res) {
  res.json({
    message: 'Hello from a public api'
  });
});

api.listen(3001);
console.log('API server listening on ' + process.env.REACT_APP_AUTH0_AUDIENCE);