# Hello World

Ejemplo basico de Hello World en Express JS.

## Paso a paso

Empezamos por importar en una constante nuestra biblioteca de Express.
```js
const express = require('express')
```
Creamos una variable donde inicializaremos nuestra biblioteca en una constante que llamaremos app.
```js
const app = express()
```
Pasemos a crear una ruta inicial en nuestro servidor que responda al verbo GET y nos responda con `Hello World`.
```js
app.get('/', (request, response) => {
    return response.send('Hello World')
})
```
Hagamos que nuestra aplicacion ahora escuche en el puerto `3000` de nuestro computador. Ademas, agregaremos un callback que nos avise cuando el servidor este listo para recibir peticiones que nos diga: `Hello World listening on http://localhost:3000/`.
```js
app.listen(3000, () => {
    console.log(`Hello World listening on http://localhost:3000/`)
})
```
Y listo, terminaste tu primer API REST en Express.js
