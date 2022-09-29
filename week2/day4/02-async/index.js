// Asincronia

const calentarHorno = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('El horno esta caliente');
        }, 2000)
    })
}

const prepararPizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('La pizza esta lista para poner en el horno');
        }, 1000)
    })
}

const cocinarPizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('La pizza ya esta hecha');
        }, 1000)
    })
}

const comerPizza = () => {
    return 'A comer pizza!'
}

//Receta pizza
// 1 - Preparar la pizza
// 2 - Calentar el horno
// 3 - Cocinar la pizza
// 4 - Comer la pizza


// Esto no se puede hacer, tenemos que esperar a que termine cada paso
// const paso1 = prepararPizza();
// console.log(paso1);
// const paso2 = calentarHorno();
// console.log(paso2);
// const paso3 = cocinarPizza();
// console.log(paso3);
// const paso4 = comerPizza();
// console.log(paso4);

// then
// prepararPizza().then((result) => {
//     console.log(result);
//     calentarHorno().then((result) => {
//         console.log(result);
//         cocinarPizza().then((result) => {
//             console.log(result);
//             console.log(comerPizza());
//         })
//     })
// })

// async await
const recetaPizza = async () => {
    const paso1 = await prepararPizza();
    console.log(paso1);
    const paso2 = await calentarHorno();
    console.log(paso2);
    const paso3 = await cocinarPizza();
    console.log(paso3);
    const paso4 = comerPizza();
    console.log(paso4);
}

// recetaPizza();
const recetaPizza2 = async() =>{
    const tarea1 = prepararPizza();
    const tarea2 = calentarHorno();
    // Esperar a que terminen las tareas para calentar el siguiente paso
    const [paso1, paso2] = await Promise.all([tarea1, tarea2]);
    // const resultado = await Promise.all([tarea1, tarea2]);
    console.log(paso1)
    console.log(paso2)
    // console.log(resultado[0])
    // console.log(resultado[1])
    const paso3 = await cocinarPizza();
    console.log(paso3);
    const paso4 = comerPizza();
    console.log(paso4);
}

recetaPizza2()