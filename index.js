const express = require('express');
const app = express();

const productRouter = require('./routes/api/products');
const cartRouter = require('./routes/api/cart');

// TODO: Cambiar el puerto a 8080
const PORT = 3000;

// Midleware para implementar respuesta con JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Implementando las rutas de la API
app.use('/api/productos', productRouter);
app.use('/api/carrito', cartRouter);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});