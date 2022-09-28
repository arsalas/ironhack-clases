// reduce recorre la array y ejucuta una funcion en cada iteracion
// que recibe le valor previo acumulado y el valor actual de la iteracion
// lo que retorna en cada iteracion es el acumulado de la siguiente
// Al final reduce retorna el numero acumulado

// La usaremos para suma o hacer operaciones matematicas acumuladas dentro de una array
// Solo se puede usar en arrays

const arr = [1, 2, 3, 4, 5];
const arr2 = [
    {
        title: 'a',
        puntuacion: 5
    },
    {
        title: 'b',
        puntuacion: 8
    }
]

// Array de numeros
const result = arr.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue)
    return previousValue + currentValue
})

// Array de objetos
const result2 = arr2.reduce((prev, curr) => {
    console.log(prev)
    return (curr.puntuacion + prev.puntuacion)
})

console.log('result: ', result);
console.log('result2: ', result2)