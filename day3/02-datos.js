// Arrays empiezan en 0
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1[arr1.length - 1]);

const arr2 = [1, 'text', true]; // no se debe hacer

for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i])
}

// objetos json {indice: valor}
const obj = {
    name: "nombre",
    edad: 30
}
const index = ['name', 'edad', 'otro']
const varOb = 'edad'
console.log(obj.edad) // lo normal es acceder de esta manera
console.log(obj[varOb]) // rara vez se ve
console.log(obj.edad)
for (let j = 0; j < index.length; j++) {
    console.log(obj[index[j]]);
}

const obj2 = {
    propUno: ""
};
// Anadiendo propiedades a los objetos
obj2.name = 'nombre';


