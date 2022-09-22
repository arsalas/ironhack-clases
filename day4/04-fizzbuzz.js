// Funcion que escriba en pantalla los numeros del 1 al 100
// si el numero es multiplo de 3 tiene que poner fizz
// si el numero es multiplo de 5 tiene que poner buzz

const fizzbuzz = () => {
    for (let i = 1; i <= 100; i++)
    {
        if (i % 3 == 0) console.log('fizz');
        else if (i % 5 == 0) console.log('buzz');
        else console.log(i);
    }
}

fizzbuzz()