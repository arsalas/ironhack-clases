// Gaurdamos una referencia de los inputs del HTML
const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const options = document.querySelector("#options");
const calc = document.querySelector("#calc");

// Operaciones calculadora
const handleClick = () => {
    // Convertimos los valores en numeros
    const num1 = parseInt(n1.value);
    const num2 = parseInt(n2.value);
    // Con el switch comprobamos que opcion se ha elegido
    switch (options.value) {
        case "add":
            return showResult(num1 + num2);
        case "subtract":
            return showResult(num1 - num2);
        case "multiply":
            return showResult(num1 * num2);
            break;
        case "division":
            return showResult(num1 / num2, num2 === 0);
        case "module":
            return showResult(num1 % num2, num2 === 0);
        default:
            return showMsg('Opcion no valida');

    }
};

// Muestra un mensaje en la alerta
const showMsg = (msg) => {
    alert(msg);
}

// Muestra el resultado o el error en la alerta
// Al poner error = false convertimos la variable error en opcional
// Al llamar a la funcion showResult(number), si no ponermos nada en el segundo argumento
// automaticamente se le asignara el valor del =, en este caso false
const showResult = (number, error = false) => {
    const msg = error ? "Numero no valido" : number;
    showMsg(msg);
};

// Escucha el evento de click
calc.addEventListener("click", handleClick);

