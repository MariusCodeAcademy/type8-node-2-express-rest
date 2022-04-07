// importuojam express
const express = require('express');
const cors = require('cors');
// sukuriam aplikacija
const app = express();
const PORT = 3000;

const colors = ['red', 'green', 'blue'];

// MiddleWare ========================
app.use(cors());

// sukuriam endpoint
// app.METHOD(PATH, HANDLER)
app.get('/', (request, response) => {
  response.send('<h1>Hello world</h1>');
});
app.get('/home', (request, response) => {
  response.send('Hello world');
});
app.get('/api/colors', (request, response) => {
  let error = false;
  // console.log('request.hostname ===', request.hostname);
  // console.log('request.ip ===', request.ip);
  // console.log('request.method ===', request.method);
  if (!error) {
    const ats = {
      success: true,
      colors,
    };
    response.json(ats);
  } else {
    const ats = {
      success: false,
      error: 'Bat weather',
    };
    response.status(400).json(ats);
  }
});
app.get('/api/colors/1', (request, response) => {
  response.json(colors[0]);
});

// 404 case
app.all('*', (request, response) => {
  console.log(request.originalUrl);
  const urlPage = request.originalUrl.slice(1);
  response.status(404).json({
    success: false,
    error: `You have tried to see page ${urlPage}. This page is not found`,
  });
});

// paleidziam aplikacija, klausomes requestu
app.listen(PORT, () => console.log('Express is running on port', PORT));
