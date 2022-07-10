const express = require('express');
const app = express();

// TODO: Cambiar el puerto a 8080
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});