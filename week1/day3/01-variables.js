// VARIABLES
var var3 // no usar

let var1 = 'hola';
const var2 = 'hola';

var1 = 'adios';

// tipos
const v1 = "text"; // string
const v2 = 1; // number
const v3 = true; // boolean
let v4; // undefined
const v5 = null; // null

// operaciones
const op1 = 1 + 1;
const op2 = 4 - 9;
const op3 = '1' + '2';
console.log(1 + 1);
console.log('1' + 1);

// Asignacion
let as1 = 1;
as1 = as1 + 1;
as1 += 10;
as1++; // increment de 1
as1--; // decremento de 1
as1 -= 5;
as1 *= 5;
as1 /= 5;

// Operadores
// suma +
// resta -
// multiplicacion *
// divsion /
// module %

// Condicionales

if (20 > 5) {
    console.log('la condicion se cumple')
} else if (2 == 2) {
    console.log('la condicion  no se cumple')
} else {
    console.log('ninguna condicion se cumple')
}

if (1 === '1') console.log('la condicion se cumple')
else console.log('la condicion no se cumple')

console.log(1 > 2)

// bucles
while (false) {
    console.log('hola')
}

do {
    console.log('hola');
} while (false);

let i = 0;
while (i < 6){
    console.log(i);
    //continue;
    i++;
}
// break sale del bucle
// continue salta a la siguiente interacoion

// for(variable; condicion; ultima ejecucion)

for(let j = 0; j < 6; j++){
    console.log(j);
    let newvar = 7;
}


