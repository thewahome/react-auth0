const express = require('express');
require('dotenv').config();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}`,
  algorithms: ['RS256']
})

const api = express();

api.get('/public', function (req, res) {
  res.json({
    message: 'Hello from a public api'
  });
});
api.use(checkJwt);

api.get('/private', checkJwt, function (req, res) {
  res.json({
    message: 'Hello from a private api'
  });
});

api.listen(3001);
console.log('API server listening on ' + process.env.REACT_APP_AUTH0_AUDIENCE);