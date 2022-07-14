# eCommerce-Coderhouse

## Ruta /api/productos
1. **GET:** '/:id' Devuelve la lista de todos los productos (users y admin)
1. **POST:** '/' Agrega un nuevo producto a la lista (admin)
1. **PUT:** '/:id' Actualiza un producto por su id (admin)
1. **DELETE:** '/:id' Borra un producto por su id (admin)

## Ruta /api/carrito (users y admin)
1. **POST:** '/:' Crea un nuevo carrito y devuleve el id
1. **DELETE:** '/:id' Elimina el carrito que tiene ese id
1. **GET:** '/:id/productos' Devuelve un array con los productos del carrito
1. **POST:** '/:id/productos/:id_prod' Agrega un nuevo producto por su id_prod al carrito con ese id
1. **DELETE:** '/:id/productos/:id_prod' Elimina el producto identificado con id_prod del carrico con ese id

Estructuras:

````` json
// productos.txt
[
  {
    "nombre": "The Selection 1",
    "descripcion": "Kiera Cass. For thirty-five girls, the Selection is the chance of a lifetime. The opportunity to escape the life laid out for them since birth.",
    "codigo": "the-selection-vol1",
    "foto": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1322103400i/10507293.jpg",
    "precio": "12.00",
    "stock": "12",
    "id": 3,
    "timestamp": 1657571015703
  },
  {
    "nombre": "Lore Olympus: Volume One",
    "descripcion": "Rachel Smythe. Experience the propulsive love story of two Greek gods—Hades and Persephone—brought to life with lavish artwork and an irresistible contemporary voice.",
    "codigo": "lore-olympus-1",
    "foto": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1614887007i/57282218.jpg",
    "precio": "13.99",
    "stock": "5",
    "id": 4,
    "timestamp": 1657571153252
  }
]

`````

`````json
// carrito.txt
[
  {
    "productos": [
      {
        "nombre": "The Selection 1",
        "descripcion": "Kiera Cass. For thirty-five girls, the Selection is the chance of a lifetime. The opportunity to escape the life laid out for them since birth.",
        "codigo": "the-selection-vol1",
        "foto": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1322103400i/10507293.jpg",
        "precio": "12.00",
        "stock": "12",
        "id": 3,
        "timestamp": 1657571015703
      },
      {
        "nombre": "The Selection 1",
        "descripcion": "Kiera Cass. For thirty-five girls, the Selection is the chance of a lifetime. The opportunity to escape the life laid out for them since birth.",
        "codigo": "the-selection-vol1",
        "foto": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1322103400i/10507293.jpg",
        "precio": "12.00",
        "stock": "12",
        "id": 3,
        "timestamp": 1657571015703
      }
    ],
    "id": 0,
    "timestamp": 1657573883736
  }
]
`````