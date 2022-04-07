// importuojam express
const express = require('express');
// sukuriam aplikacija
const app = express();
const PORT = 3000;

// sukuriam endpoint
// app.METHOD(PATH, HANDLER)
app.get('/home', (request, response) => {
  response.send('Hello world');
});

// paleidziam aplikacija, klausomes requestu
app.listen(PORT, () => console.log('Express is running on port', PORT));
