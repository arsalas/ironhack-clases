

localStorage.setItem('prueba', 'Probando el local storage')
const array = [1, 2, 3, 4, 5];
const obj = {
    title: 'titulo'
}
// Cuando queremos guardar algo en el storage hay que convertirlo en string con JSON.stringify
localStorage.setItem('array', JSON.stringify(array));
localStorage.setItem('objeto', JSON.stringify(obj));
console.log(localStorage.getItem('prueba'))
// Cuando queremos obtenerlo lo parseamos con JSON.parse
const storageArray = JSON.parse(localStorage.getItem('array'));
const storageObj = JSON.parse(localStorage.getItem('objeto'));

console.log(storageArray, storageObj);
console.log(storageArray[0], storageObj.title)

// sessionStorage

const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector('#nombreProducto').value
    const cantidad = parseInt(document.querySelector('#cantidadProducto').value)
    carrito.push({
        nombre: name,
        cantidad: cantidad
    })
    printProducts();
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

document.querySelector('form').addEventListener('submit', handleSubmit)
const printProducts = () => {
    let html = '';
    for (let i = 0; i < carrito.length; i++) {
        const element = carrito[i];
        html += `<li>Producto: ${element.nombre}, cantidad: ${element.cantidad}</li>`
    }
    document.querySelector('ul').innerHTML = html
}

// Acedemos al storage
const storage = localStorage.getItem('carrito')
console.log(storage)
let carrito = [];
// Comprobamos si no existe la key, si existe nos quedamos con el valor si no nos quedamos con la array vacia
if (storage) carrito = JSON.parse(storage);
printProducts();