const express = require('express');
const cartRouter = express.Router();
const Container = require('../../helpers/Container');

const carts = new Container('carrito');
const productos = new Container('productos');

// Crea un nuevo carrito y devuleve el id
cartRouter.post('/', (req, res) => {
  carts.save({ productos: []})
  .then(data => res.json(data));
});

// Elmina el carrito por id
cartRouter.delete('/:id', (req, res) => {
  carts.deleteById(req.params.id)
  .then(data => res.json(data));
});

// Agrega nuevo producto a carrito con cierto id
cartRouter.post('/:id/productos/:id_prod', async (req, res) => {
  // TODO: incorpora un nuevo producto al carrito
  const carrito = await carts.getById(req.params.id);
  if(carrito === -1) {
    res.json(null);
    return;
  }
  const producto = await productos.getById(req.params.id_prod);
  if(producto === -1) {
    res.json(null);
    return;
  }

  carrito.productos.push(producto);
  res.json(await carts.updateById(req.params.id, {productos: carrito.productos}));
});

// Devuelve todos los productos del carrito con ese id
cartRouter.get('/:id/productos', (req, res) => {
  carts.getById(req.params.id)
  .then((data) => { res.json(data.productos) });
});

//Elimina un producto del carrito por su id de carrito y de producto
cartRouter.delete('/:id/productos/:id_prod', async (req, res) => {
  const carrito = await carts.getById(req.params.id);
  const newProducts = await carrito.productos.filter(el => el.id != req.params.id_prod);
  
  res.json(await carts.updateById(req.params.id, {productos: newProducts}));
});

module.exports = cartRouter;