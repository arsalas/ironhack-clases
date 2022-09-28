
// Creamos una funcion que sera el callback
const eventEmit = (arg) => {
    console.log('El evento emitido es: ', arg);
}
// creamos una funcion que recibira un callback y una informacion de evento
const eventCallback = (e, callback) => {
    callback(e);
}

// llamamos a la funcion que ejecutara el callback
eventCallback('click', eventEmit, );
eventCallback('submit', eventEmit);


// Creamos una funcion callback
const print = (element) => {
    console.log(element)
}

// creamos la funcion que ejecutara el callback
const consoleArray = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

// llamamos a la funcion que ejecutara el callback
consoleArray(['Hola', 'Mundo'], print);