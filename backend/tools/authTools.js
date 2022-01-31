const { auth } = require('express-oauth2-jwt-bearer');
/*
// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: process.env?.AUDIENCE,
  issuerBaseURL: process.env?.ISSUER_BASE_URL,
  
  algorithms: ['RS256']
});
*/
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');



var checkJwt = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${process.env?.ISSUER_BASE_URL}/.well-known/jwks.json`
    }),
    audience: process.env?.AUDIENCE,
    issuer: process.env?.ISSUER_BASE_URL,
    algorithms: ['RS256']
});

module.exports = {
    checkJwt
}