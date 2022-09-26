// funciones
function sumar(n1, n2){
    return n1 + n2;   
    console.log('algo') ;
}

function sumar2(n1, n2){
    console.log(`El numero 1 es: ${n1}`)
    console.log(`El numero 2 es: ${n2}`)
    console.log(`La suma es ${n1 + n2}`)
}

//console.log(sumar(3, 2));
//console.log(sumar2(3, 2));
const n1 = sumar(1, 1);
const n2 = sumar(2, 2);
console.log(sumar(n1, n2));


// arrow function
const resta = (n1, n2) => n1 - n2;
const resta2 = (n1, n2) => {
    return n1 - n2;
}

function resta3(n1, n2){
    return n1 -n2;
}
//function suma4(n1, n2) => n1 -n2 //no se puede hacer
r1 = resta(4, 5);
r2 = resta(6, 1)
console.log(resta(r1, r2));

try {
    console.log(fn())
} catch (error) {
    console.log('ha habido un error')
}
const fn = () =>{
    console.log(1)
}

// 1 - monstrar por pantalla una lista de 1 a 100
// 2 - monstrar por pantalla una lista de 1 a 100 
// pero solo imprimir los numeros pares