// map --> crea una nueva array, no modifica la original

const arr = [1, 2, 3, 4, 5];

const modif = arr.map((num) => {
    console.log(num)
    return num;
})
console.log(arr);
console.log(modif);

const arr2 = [
    {
        name: 'Nombre',
        age: 20
    },
    {
        name: 'Nombre2',
        age: 12
    }
]

const newArray = []
for (let i = 0; i < arr2.length; i++) {
    const person = arr2[i];
    newArray.push(person)
}

array.forEach(person => {
    
});

const modif2 = arr2.map(person => {
    console.log(person)
    if (person.age >= 18)
        person.isAdult = true;
    else
        person.isAdult = false;
    return person;
})

console.log(modif2);