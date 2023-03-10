const jwt = require('jsonwebtoken');

const secret = 'myDog';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3ODQ2MzUwNn0.riWpfFRDa0c7SPAjayqd6BinmLBIUNl61-PU09fSz_I';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
