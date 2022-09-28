// Filter filtra la array retornando una nueva array con la misma estructura pero con los elementos filtrados

const arr = [1, 4, 68, 87, 2, 8];

const modif = arr.filter((number) => {
    if (number >= 10) return true;
})


const arr2 = [
    {
        title: 'Titulo',
        puntuacion: 6
    },
    {
        title: 'Titulo 2',
        puntuacion: 5
    },
    {
        title: 'Titulo 2',
        puntuacion: 8
    },
    {
        title: 'Titulo 2',
        puntuacion: 3
    },
    {
        title: 'Titulo 2',
        puntuacion: 9
    },
    {
        title: 'Titulo 2',
        puntuacion: 1
    },
]

const modif2 = arr2.filter((pelicula)=>{
    if (pelicula.puntuacion > 7) return true
})

console.log('orig: ', arr);
console.log('filtrada: ', modif)

console.log('orig: ', arr2);
console.log('filtrada: ', modif2)