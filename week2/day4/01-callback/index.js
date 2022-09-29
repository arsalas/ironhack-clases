// Callback

const emitEvent = (arg) => {
    console.log('El evento emitido es: ', arg);
}

const eventCallback = (e, callback) => {
    callback(e);
}

eventCallback('click', emitEvent);

eventCallback('submit', ()=> {
    console.log('esto es una funcion callback')
});

// document.querySelector('#id').addEventListener('click', () => {

// })

const arr = [1, 2, 3, 4, 5]

// const map = (elemento) => {}

const funcCallback = (array) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i] * 2;
       newArray.push(element);
    }
    return newArray
}    

const arrayCallback = (array, callback) => {
    return callback(array);
}

const newCar = arrayCallback(arr, funcCallback);
console.log(newCar)



// Esta funcion seria el equivalente a un map
// Definimos la funcion que recibe una array y una funcion
const mapDup = (array, callback) =>{
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const res = callback(element);
        newArray.push(res);
    }
    return newArray;
}

// Ejecutamos el map
function duplicar(element){
    return element * 2;
}
const result1 = mapDup(arr, duplicar)
const result3 = mapDup(arr, (element) => {
    return element * 2
})
console.log('map replicado: ', result1)

const result2 = arr.map((element) => {
    return element * 2
})
console.log('map original: ', result2)