// Funciones que generan asincronia
// No hay que aprenderse lo que hace el new Promise, 
// solo esta para poder ayudarnos a comprender al asincronia

const calentarHorno = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('El horno esta caliente')
        }, 2000);
    })
}

const prepararPizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('La pizza esta lista para poner en el horno')
        }, 1000);
    })
}

const cocinarPizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('La pizza ya esta hecha')
        }, 1000);
    })
}

const comerPizza = () => {
    return 'A comer pizza!'
}


// Receta pizza
// 1 - Preparar la pizza
// 2 - Calentar el horno
// 3 - Cocinar la pizza
// 4 - Comer pizza

// Con then
prepararPizza().then((result) => {
    console.log(result)
    calentarHorno().then((result) => {
        console.log(result)
        cocinarPizza().then((result) => {
            console.log(result)
            console.log(comerPizza())
        })
    })
})

// Con async await
const awaitPizza = async () => {

    const paso1 = await prepararPizza();
    console.log(paso1);
    const paso2 = await calentarHorno();
    console.log(paso2);
    const paso3 = await cocinarPizza();
    console.log(paso3);
    const paso4 = comerPizza();
    console.log(paso4)
}

// awaitPizza();

// async con Multitarea
const awaitPizza2 = async () => {

    const promesa1 = prepararPizza();
    const promesa2 = calentarHorno();
    // Esperamos a que se terminen las dos promesas sin esperar a que termine la primera para hacer la segunda
    const [paso1, paso2] = await Promise.all([promesa1, promesa2]);
    console.log(paso1)
    console.log(paso2)
    const paso3 = await cocinarPizza();
    console.log(paso3);
    const paso4 = comerPizza();
    console.log(paso4)
}

awaitPizza2();

