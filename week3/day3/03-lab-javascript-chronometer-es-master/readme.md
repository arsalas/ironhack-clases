![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS IronChronometer

## Introducción

En este laboratorio, vamos a crear un [cronómetro](https://www.dictionary.com/browse/chronometer). Los cronómetros son muy utilizados en los deportes: carreras de coches, atletismo, etc. ¿Por qué no practicar un poco nuestros conocimientos de manipulación de JS y DOM y crear nuestro propio IronChronometer? Y luego, podemos usarlo para ver cuántos minutos y segundos nos llevará completar cualquiera de nuestros laboratorios. Suena como un plan.

Vamos.

Estos son nuestros hitos:

1. Nuestro cronómetro tendrá una _pantalla LCD_, en la que veremos los minutos y los segundos avanzando.
2. También tendrá dos botones diferentes que cambiarán su comportamiento dependiendo del estado del cronómetro. Por ejemplo, el botón de inicio se convertirá en un botón de parada cuando el cronómetro funcione.
3. Como extra, añadiremos una [funcionalidad de división](https://www.google.com/search?q=chronometer+split\&oq=chronometer+split) que nos permitirá registrar el tiempo cuando pulsemos el botón de división.

¡Vamos a hacerlo!

Para comprobar cómo debería ser la versión final comprueba esta **[demo](https://sandrabosk.github.io/demo-chrono/index.html)**.

## Requisitos

- Haz un fork de este repo.

- Clona este repo.

## La presentación

- Al terminar, ejecuta los siguientes comandos:

```shell
$ git add .
$ git commit -m "solve iteration x, y, z"
$ git push origin master
```

- Crea un Pull Request para que tus TAs puedan comprobar tu trabajo.

## Instrucciones

Para empezar, se nos proporcionan los siguientes archivos y carpetas:

    ├── README.md
    ├── index.html
    ├── javascript
    │   ├── chronometer.js
    │   └── index.js
    ├── styles
    │   ├── fonts
    │   │   ├── ds-digi.ttf
    │   └── style.css
    └── tests
        └── chronometer.spec.js

La hoja de estilos ya tiene insertada la fuente `ds-digi`. Esta fuente nos ayuda a tener una pantalla LCD clásica para lograr los estilos de los cronómetros tradicionales.

También hemos creado el reloj para que te centres en la parte de JavaScript de este ejercicio. Haga clic abajo para ver la imagen que debería obtener cuando abra el archivo `index.html`:

<br/>

<details>
  <summary> Haga clic aquí para ver la imagen</summary>

<br/>

![](https://education-team-2020.s3-eu-west-1.amazonaws.com/web-dev/labs/chronometer.png)

</details>

**Este laboratorio está dividido en dos partes principales**:

- Parte 1: la lógica (que añadirás al archivo `javascript/chronometer.js` ).
- Parte 2: la manipulación del DOM, para poder representar visualmente y mostrar la lógica previamente escrita (el código que añadirás en el `javascript/index.js`).

Tu solución requerirá el uso de los métodos globales `setInterval` y `clearInterval`.

[`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) puede ser llamado con una función como primer argumento y un número de milisegundos como segundo argumento. Ejecutará dicha función cada número de milisegundos que le hayas pasado.

Al ser llamado, `setInterval` devuelve un número que puede ser usado para identificar el _intervalo_ que fue inicializado. Ese mismo intervalo puede ser detenido posteriormente ejecutando `clearInterval` y pasándole el id del intervalo que queremos interrumpir.

### Iteración 1: La lógica

En la primera parte del LAB, se trabajará en el archivo `javascript/chronometer.js`.

#### La clase `Chronometer`

Vamos a crear nuestra clase `Cronometer`. El método `constructor` no debería esperar ningún argumento. Debería inicializar dos propiedades del cronómetro:

- `currentTime`, que debe comenzar como el número `0`.
- `intervalId`, que debe comenzar como `null`.

Procedamos a la creación de los métodos del `Cronometer`.

#### Método `start` 

La clase `Cronometer` necesita tener un método `start`. Cuando sea llamado, `start` comenzará a llevar la cuenta del tiempo, ejecutando una función en un intervalo de 1 segundo, que incrementará en `1` la cantidad de segundos almacenados en la propiedad `currentTime`.

Deberá confiar en el método `setInterval` para lograr esto. El id del intervalo que se devuelve al llamar a `setInterval` debe ser asignado a nuestra propiedad `intervalId`, de esta manera, podremos borrarlo más tarde cuando necesitemos detener el temporizador.

Además, el método `start` debe aceptar una función como argumento. Llamémosla `callback`. El argumento `callback` es opcional. Si se llama a `start` y se le pasa un `callback`, dicho `callback` debe ejecutarse dentro de la función que se le ha pasado a `setInterval`. Si no se pasa ninguna llamada de retorno, debe ignorarse (pista: debe comprobar _si_ se ha pasado la `callback` de retorno antes de intentar ejecutarla).

:bulb: _Pista 1_: Tenga en cuenta que si pasa una declaración de función al método setInterval `()` (escribiendo `setInterval(function () {/* */})`), la palabra clave `this` no se referirá al objeto _cronómetro_, sino al ámbito global. Para permitir la referencia al cronómetro mediante el acceso a `this`, pase una expresión de función (una llamada función de flecha) al método `setInterval()` (escribiendo en su lugar `setInterval(() => {/* *` /})).

#### Método `getMinutes`

Estamos almacenando el número de segundos que han pasado en la propiedad `currentTime`. Sin embargo, podríamos querer saber cuántos minutos han pasado.

El método `getMinutes` no debería tomar argumentos, y debería devolver el _número_ de minutos que han pasado como un entero, como un número entero.Podríamos usar el método `Math.floor()` para obtener un número redondeado, usando la hora actual y dividiéndola por 60.

#### Método `getSeconds`

Ahora podemos obtener el número de minutos que han pasado. ¿Pero qué pasa si queremos obtener el número de segundos que han pasado después del inicio del minuto actual?

El método `getSeconds` debería devolver el número de segundos que han pasado después del inicio del minuto actual.

Por ejemplo, si la propiedad `currentTime` tiene `75`, `getSeconds` debería devolver `15`. Si `currentTime` tiene `210`, `getSeconds` debería devolver `30`, y así sucesivamente.

Podríamos utilizar el operador de módulo (% 60) para obtener el número final de segundos.

Sugerencia: El operador [matemático resto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) podría ser tremendamente útil en esta situación.

#### Método `computeTwoDigitNumber`

Nuestro cronómetro tiene una pantalla súper chula que necesita un número de dos dígitos para mostrar los minutos y los segundos. Sin embargo, a veces los métodos `getMinutes` y `getSeconds` devuelven un número de un solo dígito. Vamos a crear un algoritmo súper sencillo que convertirá en un número de dos dígitos cualquier valor recibido.

El método `computeTwoDigitNumber` debe tomar un número, y devolver una cadena donde el número recibido como argumento ha sido rellenado con 0s para asegurar que el valor tiene al menos 2 caracteres (podríamos usar el método `.slice()` para lograr nuestro objetivo).

Por ejemplo, si se llama a `computeTwoDigitNumber` con el número `7`, debería devolver una cadena con el valor `"07"`. Si se llama con el número `36`, debería devolver una cadena con el valor de `"36`".

Más adelante, utilizaremos el método `computeTwoDigitNumber` para formatear los valores devueltos por `getMinutes` y `getSeconds` y mostrarlos en nuestro cronómetro.

#### Método `stop`

Ya podemos poner en marcha nuestro cronómetro. Vamos a crear un método que lo detenga.

Al ser invocado, el método `stop` debe borrar el intervalo con el id que se había almacenado en la propiedad `intervalId`. Es tan simple como eso.

:bulb: _Sugerencia_: Utiliza `clearInterval`.

#### Método `reset`

El método `reset(` ) reiniciará nuestro cronómetro. Ya que nuestro código es súper limpio, sólo tenemos que volver a poner nuestra propiedad `currentTime` a 0, ¡y ya está!

También necesitamos restablecer los valores en nuestro archivo HTML, usando `.innerHTML`.

#### Método `split`

En ciertos momentos, es posible que queramos extraer una marca de tiempo formateada para el tiempo transcurrido desde que se inició el cronómetro. A esto lo llamamos "obtener el tiempo de split".

El método `split` no debe esperar argumentos, y devuelve una cadena en la que el tiempo transcurrido desde el inicio está formateado como_"mm:ss_". Internamente, el método `split` puede hacer uso de métodos previamente declarados como `getMinutes`, `getSeconds` y `computeTwoDigitNumber`.

### Iteración 2: Manipulación del DOM

Tu clase Cronómetro está ahora completa. Eso significa que podemos seguir adelante y crear una interfaz visual que nos permita utilizar toda la lógica que acabamos de codificar.

En este punto, deberías empezar a trabajar en el archivo `javascript/index.js`. Ten en cuenta que, por ahora, no tienes que cambiar nada en los archivos HTML o CSS.

En esta iteración, tu objetivo es crear un nuevo cronómetro, y utilizar sus métodos (que definimos previamente en `chronometer.js`) mientras interactúa con el DOM. Ejemplo: al hacer clic, el botón de `start` debe invocar el método de `start` del cronómetro.

Como puedes ver, tenemos dos botones diferentes: `start` y `clear`. Estos son los valores del botón cuando el cronómetro no está funcionando. Cuando el cronómetro está en marcha, el botón de inicio cambiará su comportamiento para detener el cronómetro. Por el contrario, el botón de reinicio cambiará para dividir. 

Ambos botones tendrán un comportamiento diferente dependiendo del estado del cronómetro. Estos botones son `btnLeft` y `btnRight` en nuestro HTML. Podemos ver los diferentes valores que tendrán en la siguiente tabla:

| Estado del cronómetro | ID del botón | Texto | Clase CSS   |
| --------------------- | ------------ | ----- | ----------- |
| Detenido              | `btnLeft`    | START | `btn start` |
| Detenido              | `btnRight`   | RESET | `btn reset` |
| En marcha             | `btnLeft`    | STOP  | `btn stop`  |
| En marcha             | `btnRight`   | SPLIT | `btn split` |

Encontrarás dos escuchadores de eventos de clic que ya están vinculados con los botones `btnLeft` y `btnRight`. Tienes que crear el código necesario para cambiar el estado de los botones.

:bulb: _Pista_: Para cambiar el _estado_ de los botones, tenemos que _alternar_ sus clases dependiendo de _si_ sus clases incluyen 'start' o 'reset'.

Esto significa que cuando hacemos clic en el `btnLeft`, si tiene la clase `start`, habrá que cambiar los botones `btnLeft` y `btnRight`, configurándolos con el estado Running descrito en la tabla anterior.

Por otro lado, si el `btnLeft` no tiene la clase de `inicio` cuando hacemos clic, tendremos que cambiar las propiedades del `btnLeft` y del `btnRight` configurándolos con el estado Detenido descrito en la tabla anterior.

Si el btnLeft tiene la clase `start`, deberemos llamar al `startmethod`de chronometer -¡Recuerda los argumentos! -.

#### Cambiando los textos de los botones

Vamos a trabajar en el archivo `javascript/index.js`. Necesitamos hacer lo siguiente (podríamos usar .className y .innerHTML para hacerlo):

- Cuando se pulsa el botón izquierdo mientras el cronómetro está parado, necesitamos:

  - Establecer el botón `btnLeft` con el texto STOP, y la clase `btn stop`
  - Establecer el botón `btnDerecho` con el texto SPLIT, y la clase `btn` split.

- Cuando se pulsa el botón izquierdo mientras el cronómetro está en marcha tenemos que:

  - Establecer el botón `btnLeft` con el texto START, y la clase `btn` start.
  - Establecer el botón `btnRight` con el texto RESET, y la clase `btn` reset.

- En el archivo `index.js`, crear una nueva instancia del objeto `Chronometer` (que ya tenemos en la parte superior del archivo).

- Crea el código necesario en el `index.js` para llamar al método `start` del cronómetro si el botón tiene la clase `start`, o al método `stop` si el botón tiene aplicada la clase `stop`.

#### Imprimir nuestro cronómetro

Cada segundo necesitamos actualizar nuestra pantalla. Así que sigue adelante y crea una función que reciba el valor de los minutos y los segundos, e imprime eso en nuestro HTML - ¡recuerda reutilizar nuestro método twodigits que tenemos en el cronómetro!

Puedes invocar el método start de tu cronómetro.

Sugerencia: si lo recuerdas, el método start espera un callback como argumento y ejecutará este callback cada segundo (puedes pasar como argumento una función para actualizar la interfaz de usuario)

<details>
  <summary> Haga clic aquí para ver la imagen </summary>

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1a87e0edfb6efea2ae0c77c490e8563b.png)

</details>

### Iteración 3: Tiempo de división

La siguiente función que implementaremos es el botón de división. Recuerde que el botón de división se encuentra en el botón `btnRight` cuando el cronómetro está en marcha. En esta iteración, tendremos que crear dos cosas diferentes: HTML & CSS, y el JavaScript asociado.

#### HTML & CSS

En primer lugar, tenemos que localizar en nuestro archivo `index.html` una lista ordenada a la que vamos a añadir la hora actual cada vez que pulsemos el botón de división - tiene un id de `splits`, y lo tenemos apuntado al final de nuestro archivo index.js.

#### JavaScript

Una vez que hemos localizado la lista ordenada en nuestro HTML, tenemos que crear la funcionalidad del botón. Cada vez que hagamos clic en el botón de división, tendremos que crear un nuevo elemento `li` y añadirlo a la lista ordenada. El texto de este elemento será la hora actual del cronómetro (tenemos un método en nuestro cronómetro que devuelve este :wink:).

Por lo tanto, primero debemos crear un elemento de la lista cada vez que hagamos clic en el botón.Después, debemos añadir un nombre de clase a este elemento de la lista ('list-item').Luego debemos actualizar el innerHTML con el resultado de nuestro método `splitin` chronometer. Y finalmente debemos anexarlo al elemento padre en el archivo html (la lista ordenada con `id`s de `splits`)

<details>
  <summary> Haga clic aquí para ver la imagen </summary>

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a5c9687f25bd710b2e7658ee6d997174.png)

</details>

### Iteración 4: Reset

Para terminar con esta lección, vamos a crear la función _clear_. Recuerda que la ejecutaremos cuando el cronómetro se detenga, y el usuario haga clic en el botón derecho - comprueba el oyente de eventos en la parte inferior del archivo. El comportamiento aquí es sencillo: tenemos que borrar todos los datos del reloj.

Para ello, tendremos que poner a cero los minutos y los segundos en nuestro reloj y eliminar todos los elementos `li` que pudiéramos tener en la lista que creamos en la iteración anterior.

### BONUS Iteración 5: Milisegundos

Ahora podemos utilizar nuestro cronómetro para calcular el tiempo que empleamos en cada ejercicio de Ironhack. ¿Qué ocurre si queremos calcular nuestro tiempo en una carrera? Tenemos que ser más precisos con nuestro cronómetro. ¿Cómo podemos ser más precisos? Añadiendo milisegundos.

Si queremos añadir milisegundos al cronómetro, tendremos que manipular el HTML, el CSS y el JavaScript. En el HTML, tendremos que un contenedor para mostrar los milisegundos, cambiando el estilo de este contenedor - por lo que debemos modificar el DOM con el valor decimal y de unidad de los milisegundos (están dirigidos al principio del archivo index.js).Finalmente, en JavaScript, tendremos que añadir toda la lógica para mostrar los milisegundos en el reloj. También tendrás que añadir estos milisegundos al contador de la división - debemos llamar al método twoDigits también aquí.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_82e9d1fd5976a3f98bb1382f2385f6a1.png)

Tu objetivo es crear la lógica de JavaScript para:

- Ser capaz de contar los milisegundos.
- Mostrar los milisegundos al avanzar.
- Mostrar los milisegundos cuando se captura un tiempo dividido.
- Borrar los milisegundos cuando se haga clic en el botón de reinicio.

Este laboratorio es un poco complejo, pero te guiará en el proceso lógico de resolución del problema y, al mismo tiempo, siguiendo las pautas, aprenderás a separar las preocupaciones entre la lógica y la manipulación del DOM (que son las visuales).

## Pruebe su código

## ¡Pruebas, pruebas, pruebas!

Este LAB está equipado con pruebas unitarias para proporcionar información automatizada sobre el progreso de tu laboratorio. Comenzarás trabajando con las pruebas y utilizándolas junto con las instrucciones de iteración.

Por favor, abre tu terminal, cambia los directorios a la raíz del laboratorio, y ejecuta npm `install` para instalar el ejecutor de pruebas. A continuación, ejecute el comando `npm run test:watch` para ejecutar las pruebas automatizadas.

```shell
$ cd lab-javascript-chronometer-es
$ npm install
$ npm run test:watch
```

<br/>

Abra el archivo `lab-solution.html` resultante con la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode para ver los resultados de las pruebas.

**Nota:** El entorno de pruebas y la página `lab-solution`.html no permiten imprimir los _registros de la_ consola en el navegador.

Para ver las salidas de console.log que se escriben en cualquiera de los archivos JavaScript, abra el archivo `index.html` con la extensión VSCode de [Live](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) Server.

<br/>

**Feliz codificación!** :heart: