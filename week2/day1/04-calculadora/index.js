
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const options = document.querySelector('#options');
const calc = document.querySelector('#calc');


const handleClick = () => {

    // El input recibe un texto y lo tenemos que pasar a numero con parseInt
   if (n1.value.trim().length === 0)
    return (showResult(1, true))
   if (n2.value.trim().length === 0)
    return (showResult(1, true))

    const num1 = parseInt(n1.value);
    const num2 = parseInt(n2.value);

    switch (options.value) {
        case 'add':
            return showResult(num1 + num2);            
        case 'substract':
            return showResult(num1 - num2);            
        case 'multipy':
            return showResult(num1 * num2);            
        case 'division':
            let isZero = false;
            if (num2 === 0) isZero = true;
            return showResult(num1 / num2, isZero);            
        case 'module':
            return showResult(num1 % num2, num2 === 0);            
    }
}

// Como no le paso un segundo parametro error tendra el valor de false por defecto
// showResult(1);
// Como le estamos pasando un segundo argumento guardara el valor que le demos
// showResult(1, true)

// Parametros opcionales en las funciones
// numer -> el numero de la operacion matematica que hemos calculado
// error -> nos indica si hay que mostrar un error
// showResult(10)
// let number = 10
// let error = false
const showResult = (number, error = false) => {
    console.log(number, error);
    // if (error == true) = if (error), if (!error) = if (error == false)
    if (error) alert('Numero no valido');
    else alert(number);
}

// Parametro opcional, si no paso nada 
// le asignas un 10 a la variable numero
const list = (num = 5) =>{
    console.log('El numero pasado es:', num)
}

list(1);
list();

calc.addEventListener('click', handleClick)