import ps from "prompt-sync"
const prompt = ps();

const getNumber = () =>{
    return parseInt(prompt("Escribe un numero: ")
)}
while (true) {
    console.log('1 - Salir')
    console.log('2 - Sumar')
    console.log('3 - Restar');
    console.log('4 - Multiplicar');
    console.log('5 - Dividir');
    const opt = parseInt(prompt('Escribe una opcion:'));
    if (isNaN(opt) ||( opt > 5 || opt < 1)){
        console.log('Escribe una opcion correcta');
        continue;
    }
    if (opt == '1') break;
    const n1 = getNumber();
    const n2 = getNumber();
    if (isNaN(n1) || isNaN(n2)){
        console.log('Escribe un numero correcto');
        continue;
    }
    let res;
    switch (opt) {
        case 2:
            res = n1 + n2;
            break;
        case 3:
            res = n1 - n2;
            break;
        case 4:
            res = n1 * n2;
            break;
        case 5:
            res = n1 / n2;
            break;
    }
    console.log('El resultado es: ' + res)
}

