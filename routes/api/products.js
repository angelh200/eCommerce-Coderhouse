const express = require('express');
const productRouter = express.Router();
const Containter = require('../../helpers/Container');

const productos = new Containter('productos');

// Devuelve e producto con el id solicitado
productRouter.get('/:id', (req, res) => {
  productos.getById(req.params.id)
  .then(data => res.json(data));
});

// Devuelve toda la lista de productos
productRouter.get('/', (req, res) => {
  productos.getAll().then((data) => {
    res.json(data);
  });
});

// Crea un nuevo producto y lo guarda
productRouter.post('/', (req, res) => {
  productos.save(req.body)
  .then(data => res.json(data));
});

//Actualiza un producto con el id especificado
productRouter.put('/:id', (req, res) => {
  productos.updateById(req.params.id, req.body)
  .then(data => res.json(data));
});

// Elimina el producto con el id listado
productRouter.delete('/:id', (req, res) => {
  productos.deleteById(req.params.id)
  .then(data => res.json(data));
});

module.exports = productRouter;