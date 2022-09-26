
// Guardamos la referencia al div que cambiara el background color
const container = document.querySelector('.container');

const getRandom = () => {
    // Math.random() -> devuelve un numero al azar entre 0 y 1
    // Math.ceil() -> redondea a la baja un numero
    // Multiplicamos por el numero maximo que queremos obtener
    // En el caso de los colores van de 0 a 255
    return Math.ceil(Math.random() * 255);
}

const handleClick = () => {
    container.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`
}

document.querySelector('#btn').addEventListener('click', handleClick)

