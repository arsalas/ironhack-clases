// Una funcion que escriba la tabla de multiplicar de un numero
// 1 x n = n
// 9 x n = n

const table = (num) => {
    for (let i = 1; i <= 9; i++)
    {
        console.log(`${i} x ${num} = ${i *num}`);
    }    
}
table(5)