let counter = 0;

// Pimtaremos en el html los cambios en el contador
// document -> todo el html
// querySelector -> un elemento del html
// .class, #id, selector
// innerHTML -> cambia el contenido sel selector del querySelector

const printCounter = () =>{
    console.log(counter)
    document.querySelector('#counter').innerHTML = counter;
}

// Capturamos los eventos de clic en el boton con el id suma
// addEventListner escuchar eventos
// querySelector('tipo de evento', la funcion que ejecutara cuando se produzca el evento)
const handleClick = () => {
    counter++;
    printCounter();
}

document.querySelector('#suma').addEventListener('click', handleClick)

// Capturamos los eventos de clic en el boton con el id resta
document.querySelector('#resta').addEventListener('click', () => {
    counter--;
    printCounter();
})

document.querySelector('#reset').addEventListener('click', () => {
    counter = 0;
    printCounter();
})


