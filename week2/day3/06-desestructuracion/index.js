// Desestructuracion

// Objetos
const obj = {
    titulo: 'titulo',
    puntuacion: 5,
    year: 2020,
}

 const titulo2 = obj.titulo;
 const puntuacion2 = obj.puntuacion;
 const year2 = obj.year;

 // Desestructuramos con el mismo nombre
const { puntuacion, titulo, year } = obj

// Desestructuramos cambiando el nombre de la variable nueva
const { puntuacion: nuevaPuntuacion, titulo: nuevoTitulo, year: nuevoYear } = obj

const {titulo: tit} = obj

// Sera lo mimso
// obj.titulo
// tit

console.log(nuevaPuntuacion)


// Arrays
const arr = [1, 2];

const [x, y] = arr;
console.log('numero 1: ', x);

const newObj = {
    ...obj,
    genero: 'accion',
    titulo: 'nuevo titulo',
} 
// Es lo mismo que el ...obj
const newObj2 = {
    titulo: obj.titulo,
    puntuacion: obj.puntuacion,
    year: obj.year,
    genero: 'accion'
} 

const arr5 = [1, 2, 3];
const fun = (a, b, c) => {
console.log('rest arrays: ', 'a: ', a, 'b: ' ,b,'c:', c)
}

fun(arr5);
fun(...arr5);

console.log('obj: ', obj)
console.log('newObj: ', newObj)
console.log('newObj2: ', newObj2)


const arrNum = [1, 2, 3]
// arrNum.push(4);
console.log(arrNum)
// No modificamos la array original
const arrNum2 = [...arrNum, 4];
console.log(arrNum2)
// Es lo mismo que un push pero sobreescribe la array original
arrNum = [...arrNum, 4];

// Push me modifica la array original con un elemento mas
const arrNum3 = [1, 2, 3];
arrNum3.push(4);
console.log(arrNum3)

// Crea un duplicado
const dup = [...arrNum];
const dupObj = {...obj};
