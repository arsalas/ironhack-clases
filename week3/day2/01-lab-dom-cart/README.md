![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Carro Ironhack

![giphy (2)](https://user-images.githubusercontent.com/76580/167435963-34b5ddf0-e318-446a-b59f-2edeed3eb030.gif)

## Introducción

El comercio electrónico ha demostrado ser un gran cambio en la economía del siglo XXI. Como uno de los mayores canales de venta, sólo superado por el comercio físico, se [espera](https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/) que el comercio electrónico sea responsable de 6,3 billones de dólares en ventas mundiales para el año 2024.

El comercio electrónico es un negocio muy competitivo, y crear una experiencia de usuario positiva es crucial para retener a los clientes y mejorar las conversiones. No es raro que las empresas realicen una importante inversión para optimizar el flujo de compra en sus plataformas de comercio electrónico.

Uno de los componentes más importantes de esta experiencia es **el carrito de la compra**.

En este laboratorio, construiremos el **IronCart**, un carrito de la compra para la tienda de merchandising no oficial de Ironhack. Los visitantes deben ser capaces de añadir y eliminar productos del carrito de la compra, y modificar el número (cantidad) de artículos que quieren comprar. Además, los usuarios deberían poder ver el subtotal y el precio total de los artículos que han añadido.

## Requisitos

- Haz un fork de este repo.
- Clónalo en tu máquina.

## La presentación

- Al terminar, ejecuta los siguientes comandos:

```bash
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
```

- Crea un Pull Request para que tus TAs puedan comprobar tu trabajo.

## Instrucciones

Harás la mayor parte de tu trabajo en el archivo `js/index.js`. Hemos añadido el marcado inicial en `index.` html y algunos estilos básicos. Mientras desarrollas, asegúrate de utilizar los mismos nombres de clase que los ya utilizados (y disponibles en el archivo CSS) para que nuestro carrito de la compra sea bonito y limpio.

¡Vamos!

<br/>

<hr/>

### Nota sobre las pruebas

Este LAB está equipado con pruebas unitarias para proporcionar información automatizada sobre el progreso de su laboratorio.

**Después de completar las iteraciones básicas**, vaya a la sección **"Pruebe su código"** en la parte inferior. Allí se le pedirá que instale las dependencias de prueba y ejecute las pruebas para comprobar cuántas pruebas pasa su código. Una vez que ejecute las pruebas, corrija su código para pasar las pruebas que fallan.

<hr/>

<br/>

### Iteración 1: `updateSubtotal`

Abre el `index.html ` en tu navegador. Como puede ver, sólo hay una fila en la tabla que representa un producto. En esta primera iteración, te centrarás sólo en ese producto, y más adelante, te ayudaremos a pensar en formas de actualizar para tener múltiples productos.

Echemos un vistazo al código HTML proporcionado. Tenemos la **etiqueta table con el id `#cart`**, como se muestra a continuación:

```html
<table id="cart">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Unit Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr class="product">
      <!-- ... -->
    </tr>
  </tbody>
  <!-- ... -->
</table>
```

![](https://i.imgur.com/zCWQYg2.png)

El único producto que tenemos actualmente en nuestro `#cart` está colocado en el `tr` con la clase `product`**(que va dentro de `tbody`**):

```html
<tr class="product">
  <td class="name">
    <span>Ironhack Rubber Duck</span>
  </td>
  <td class="price">$<span>25.00</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
```

El producto tiene un **precio** y una **cantidad** (donde la cantidad representa cuántos artículos de un producto específico ha añadido el usuario en el carrito). En el código proporcionado, vemos que también hay un precio **subtotal**. El precio subtotal será el resultado de la _multiplicación_ de esos valores.

Su objetivo es calcular el precio subtotal, pero abordémoslo de forma gradual. Vamos a dividirlo en un par de pasos:

- **Paso 0**: En este paso, nuestro objetivo es ayudarte a entender el código proporcionado en el `js/index.js`. Gracias al código proporcionado, el botón `Calcular Prices` ya tiene cierta funcionalidad. Usando la manipulación del DOM, conseguimos el elemento con el `id="calculate"` y le añadimos un listener de eventos `click`. Al hacer clic, este botón disparará la función `calculateAll()`. El siguiente fragmento de código hace exactamente lo que hemos explicado:

```javascript
// js/index.js

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
```

No te confundas con el método [.addEventListener()](https://www.w3schools.com/jsref/met_document_addeventlistener.asp), hace exactamente lo mismo que [onclick()](https://www.w3schools.com/tags/ev_onclick.asp), con algunas diferencias sobre las que puedes encontrar más [aquí](https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick). En este laboratorio, puedes utilizar el método que prefieras.

Bien, pasemos a la función `calculateAll()`. En esta función, utilizamos `querySelector` para obtener el primer (y actualmente el único) elemento del DOM con la clase `product`. Este elemento (que guardamos en la variable llamada `singleProduct`) se pasa como argumento a la función `updateSubtotal()`. Como puedes encontrar en los comentarios, el fragmento de código proporcionado se utiliza sólo para fines de prueba dentro de la iteración 1.

```js
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //...
  // ITERATION 3
  //...
}
```

Y finalmente, iniciamos la función updateSubtotal( `product)`. Por ahora, lo único que hace esta función es avisar a `Calculate Prices clicked!` cuando se hace clic en el botón _Calculate Prices_.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e50868b669d962f3ddb26802e5a16638.gif)

Empecemos:

- **Paso 1**: Dentro de `updateSubtotal()`, cree dos variables (le sugerimos que las llame `price` y `quantity`) y utilice sus habilidades de manipulación del DOM recién adquiridas para OBTENER los elementos del DOM que contienen el precio y la cantidad. Para darle una ventaja, puede utilizar el siguiente código para obtener el elemento DOM que contiene el `precio`:

```js
// js/index.js
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  // ... your code goes here
}
```

- **Paso 2**: Ahora, cuando tengas los elementos del DOM antes mencionados, tu siguiente paso debería ser extraer los valores específicos de ellos. _Sugerencia_: ¿te suena `innerHTML`? En caso de que tengas curiosidad por encontrar otras formas de conseguir el mismo resultado, puedes empezar por consultar [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) e [`innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText) en Google. Además, puedes extraer el valor de un input accediendo a [la propiedad `value`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue) del elemento input. Sin embargo, no te distraigas aquí, deja que esta sea tu _lectura adicional_ cuando completes el laboratorio.

- **Paso 3**: Utiliza los valores que has extraído de los elementos DOM mencionados para calcular el precio subtotal. Puedes crear una nueva variable, y su valor será igual al producto de estos valores. Ej. Si un usuario eligió 3 patos de goma Ironhack, debería ver que el subtotal es de 75 dólares(25 \\\* 3 = 75).

- **Paso 4**: Ahora, cuando te conviertas en un ninja de la manipulación del DOM, utiliza tus habilidades una vez más para obtener el elemento del DOM que debe contener el subtotal. _Pista_: es el elemento con la clase `subtotal`.

- **Paso 5**: En el paso 3, calculaste el precio subtotal, y en el paso 4, obtuviste el elemento DOM que debería mostrar este precio. En este paso, su objetivo es establecer el precio subtotal en el elemento DOM correspondiente. Además, asegúrate de que esta función devuelve el valor del subtotal para que puedas utilizarlo más adelante cuando lo necesites.

En esta iteración, has terminado de crear la función `updateSubtotal` que **calcula el** subtotal para este producto específico, **actualiza el valor del subtotal** para ese mismo producto en el DOM y devuelve el valor del **subtotal**.

Como único argumento, la función debe tomar un **nodo DOM** que corresponda a un único elemento `tr` con una clase de `product`. En el código boilerplate incluido, lo llamamos `product`.

```js
function updateSubtotal(product) {
  // ...
}
```

:bulb: _Sugerencia_: Asegúrese de que su función `calculateAll()` tiene el código de prueba que mencionamos anteriormente. Si el código está en su sitio, después de haber terminado con éxito la función `updateSubtotal` (), debería poder ver las actualizaciones correspondientes en el campo `Subtotal` de la tabla.

Compruebe [aquí](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload\_30b87c596b79954f63b3482d2f320fe4.gif) la salida esperada.

<hr/>

### Iteración 2: `calculateAll()`

Nuestro código actual funciona perfectamente para un producto, pero esperamos tener más de un producto en nuestro carrito. Por ello, utilizaremos `calculateAll` para activar la actualización de los subtotales de cada producto.

Complete la función llamada calculateAll `()`. Su propósito es llamar a la función `updateSubtotal` con cada nodo DOM `tr.product` en la `table#cart`.

Para empezar, elimine o comente el código existente dentro de la función `calculateAll()` (el código que utilizamos para las pruebas). Además, vamos a añadir un nuevo producto a nuestro archivo `index.html`. Duplique el `tr` con la clase `product`, cambie el nombre del producto dentro, y cambie el precio del producto.

![](https://i.imgur.com/Pv4NmR8.png)

:bulb: _Sugerencia_: Comience por obtener los nodos DOM para cada fila de productos. Actualmente, tenemos dos productos; por lo tanto, tenemos dos filas con la clase `product`. Tal vez usando [getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) podría servir bien aquí.

```js
function calculateAll() {
  // ...
}
```

El resultado final debería ser el siguiente:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0efb56fc0e5717469417e806fa7cde12.gif)

<hr/>

### Iteración 3: Total

Nuestra funcionalidad de cálculo aún está incompleta. El subtotal de cada producto se está actualizando, pero el valor total permanece intacto.

Al final de la función `calculateAll()`, reutilice el valor total que acaba de calcular en la iteración anterior y actualice el elemento DOM correspondiente. Calcule el precio total de los productos de su cesta sumando todos los subtotales devueltos por `updateSubtotal()` cuando fue llamado con cada producto.

Por último, muestre ese valor en su DOM.

![](https://i.imgur.com/SCtdzMd.png)

<hr/>

## Iteraciones adicionales

### Iteración 4: Eliminar un producto

Los usuarios deben poder eliminar productos de sus carros. Para ello, cada fila de productos de nuestra tabla tiene un botón "Eliminar" al final.

Pero vamos a intentar resolver nuestro problema poco a poco. Dentro de la función existente que estás pasando a `window.addEventListener()`, comienza con la consulta del documento para todos los botones "Eliminar", haz un bucle a través de ellos, y añade un oyente de eventos de `click` a cada uno, pasando una función llamada `removeProduct` como el argumento de devolución de llamada. Si necesitas una pista sobre cómo hacer esto, simplemente echa un vistazo a cómo lo hicimos con la adición de un escuchador de eventos en el botón `calculatePricesBtn`.

Ya declaramos `removeProduct(event)` y añadimos algo de código de inicio. Una vez que hayas terminado de consultar los botones de eliminación y de añadir el listener de eventos de `click` en ellos, abre la consola y haz clic en cualquier botón de `Remove`.

Como podemos ver, `removeProduct(event)` espera el evento como único argumento, y eso va a desencadenar la eliminación del producto correspondiente del carrito.

:bulb: Consejo: Para acceder al elemento sobre el que se disparó un evento, puedes hacer referencia a `event.currentTarget`. Para eliminar un nodo del DOM, debe acceder a su nodo padre y llamar a [`removeChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) en él. Puedes acceder al padre de un nodo del DOM desde su propiedad `parentNode`.

Asegúrese de que el precio se actualiza en consecuencia cuando se eliminan los productos de la cesta de la compra.

Haga clic [aquí](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload\_17b1e9e4d2606239163dddbc5b2a3d9f.gif) para ver el resultado esperado.

<hr/>

### Iteración 5: Creación de nuevos productos

Para terminar, permitiremos al usuario añadir un producto personalizado a su cesta.

Descomente el elemento `tfoot` y sus hijos del archivo `index.html`:

```html
<table>
  <tbody>
    <!-- ... -->
  </tbody>
  <!-- <tfoot>
    <tr class="create-product">
      <td>
        <input type="text" placeholder="Product Name" />
      </td>
      <td>
        <input type="number" min="0" value="0" placeholder="Product Price" />
      </td>
      <td></td>
      <td></td>
      <td>
        <button id="create" class="btn">Create Product</button>
      </td>
    </tr>
  </tfoot> -->
</table>
```

![](https://i.imgur.com/J8aserm.png)

Las dos entradas dentro de `tfoot` representan el nombre para el nuevo producto y el precio unitario, respectivamente. El botón "Crear producto" debería añadir un nuevo producto al carrito cuando se active.

Añade un manejador de eventos de `click` al botón "Crear Producto" que tomará una función llamada `createProduct` como callback.

En `createProduct` deberías apuntar a los nodos DOM de entrada de nombre y precio unitario, extraer sus valores, añadir una nueva fila a la tabla con el nombre del producto y el precio unitario, así como la entrada de cantidad y el botón "Eliminar", y asegurarte de que toda la funcionalidad funciona como se espera.

Recuerde que el nuevo producto debe tener el mismo aspecto y comportarse como cualquiera de los productos incluidos anteriormente en el carrito. Como tal, se debe poder calcular su subtotal cuando se haga clic en el botón "Calcular todo", y eliminar el producto.

Una vez finalizada la creación del producto, por favor, borre los campos de entrada en el formulario de creación.

Haga clic [aquí](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload\_00abbd15326ec24d93147196024458f6.gif) para ver el resultado esperado.

<br/>

## Pruebe su código

Volveremos a trabajar con pruebas automatizadas.

Por favor, abra su terminal, cambie los directorios a la raíz del laboratorio, y ejecute `npm install` para instalar el ejecutor de pruebas. Ahora, puedes ejecutar el comando `npm run test:watch` para ejecutar las pruebas automatizadas en _modo watch_. Abre el archivo `lab-solution.html` resultante utilizando la extensión VSCode "Live Server" para ver siempre los resultados de las pruebas.

```bash
$ cd lab-dom-ironhack-cart
$ npm install
$ npm run test:watch
```

En caso de que quieras revisar las pruebas para más detalles, están en el archivo `tests/ironhack-cart.spec.js`.

<br/>

**¡Feliz codificación! 💙**