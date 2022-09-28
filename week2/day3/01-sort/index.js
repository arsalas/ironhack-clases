// Sort
// Ordena una array

const arr = [1, 20, 5, 7, 9, -3];
const arr3 = [1, 5, 3, 2, 9];
const arr2 = [
    {
        name: 'z',
        title: 'b'
    },
    {
        name: 'b',
        title: 'c'
    },
    {
        name: 'a',
        title: 'r'
    }
]
arr3.sort((despues, antes) => {
    console.log('antes: ', antes, 'despues: ', despues)
    // return > 0  ordena a despues que b
    // return < 0  ordena b despues que a
    // return == 0  mantiene el orden
    if (despues > antes) return 1;
    if (despues < antes) return -1
    return 0;
});
console.log(arr3)
// Ordena por pares hasta que esta ordenado
arr.sort((despues, antes) => {
    console.log('antes: ', antes, 'despues: ', despues)
    // return > 0  ordena a despues que b
    // return < 0  ordena b despues que a
    // return == 0  mantiene el orden
    if (despues > antes) return 1;
    if (despues < antes) return -1
    return 0;
});

console.log(arr);

arr2.sort((a, b) => {
    // return > 0  ordena a despues que b
    // return < 0  ordena b despues que a
    // return == 0  mantiene el orden
    // En el caso de que el name sea igual y queramos odenar los que tengan el mismo name por otro elemento
    if (a.name === b.name) {
        // TODO: completar
        // if (a.title > b.title)
    }
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
})
console.log(arr2)

