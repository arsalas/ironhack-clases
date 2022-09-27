// Iteration #1: Find the maximum
function maxOfTwoNumbers(n1, n2) {
    if (n1 > n2) return n1
    return n2
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
    if (words.length === 0) return null;
    let index = 0;
    let len = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > len) {
            index = i;
            len = words[i].length;
        }
    }
    return words[index];
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(number) {
    if (number.length === 0) return 0
    let sum = 0;
    // for (declara i =0; condicion para que se siga ejecutando el for; lo que hace al final del for)
    // for(i = 0; 0 < 0; i++)
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
}



// Iteration #3.1 Bonus:
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        switch (typeof element) {
            case 'number':
                sum += element;
                break;
            case 'string':
                sum += element.length;
                break;
            case 'boolean':
                if (element) sum += 1;
                break;
            default:
                throw new Error("Unsupported data type sir or ma'am")
        }
    }
    return sum;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    if (array.length === 0) return null;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return (sum / array.length)
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) {
    if (array.length === 0) return null;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element.length;
    }
    return (sum / array.length);
}

// Bonus - Iteration #4.1
function avg(array) {
    if (array.length === 0) return null;
    // const suma = sum(array);
    // return suma / array.length;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        switch (typeof element) {
            case 'number':
                sum += element;
                break;
            case 'string':
                sum += element.length;
                break;
            case 'boolean':
                if (element) sum += 1;
                break;
            default:
                throw new Error("Unsupported data type sir or ma'am")
        }
    }
    return sum / array.length
}

// Iteration #5: Unique arrays
const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'crab',
    'bring'

];

function uniquifyArray(array) {
    if (array.length === 0) return null;
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        // i = 0
        // newArray = []
        // comprobamos si 'crab' esta incluida en []
        // como no esta incluida hacemos un push para agrear la string
        // i = 1
        // comprobamos 'poison', newArray = ['crab']
        //como 'poison' no esta en newArray lo incluimos
        // i = 2
        // contagius, newArray = ['crab', 'poison']
        // como contagius no esta lo agragamos a la aray
        // i = 3
        // comprobar si 'crab' esta en newAray = ['crab', 'poison'. 'contagius']
        // como crab esta en newArray no hay que incluirlo
        // i = 4
        // tenemos que mirar si bring esta en la newArray = ['crab', 'poison', 'contagius']
        // como bring no esta en newArray lo agragamos con push
        // arrayOriginal = ['crab', 'posion', 'contagius', 'crab', 'bring']
        // Al final tendriamos en newArray = ['crab', 'posion', 'contagius', 'bring']
        const element = array[i];
        if (newArray.includes(element) == false)
            newArray.push(element);

    }
    return (newArray)
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, searchWord) {
    if (array.length === 0) return null;
    const exist = array.includes(searchWord);
    return exist;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === searchWord)
            return true;
    }
    return false;

}



// Iteration #7: Count repetition
const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
];

function howManyTimes(array, search) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === search) counter += 1;
    }
    return counter;
}



// Iteration #8: Bonus
const matrix = [
    [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
    [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
    [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
    [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
    [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
    [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
    [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
    [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
    [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
    [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
    [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
    [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
    [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
    [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
    [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
    [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

// const matrix2 = [
//     [ 1,  2, 3, 4, 5]
//     [ 1, 20, 3, 4, 5]
//     [ 1, 20, 3, 4, 5]
//     [ 1, 20, 3, 4, 5]
//     [ 1,  4, 3, 4, 5]
// ]
// mh = [24, 120, 240, 1200, ...];
// mv = [1, 1, 16000,  32000, ...];
// miramos el max de mh y el max de mv y miramos cual es mayor


function greatestProduct(matrix) {
    const mh = [];
    const mv = [];
    const dim = matrix.length;

    // dim 5
    // condicion de for seria que i < 1
    // al ser <= con i = 1 haria la iteracion
    let c = 0
    for (let i = 0; i <= dim - 4; i++) {
        for (let j = 0; j <= dim - 4; j++) {
            mh[c] = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
            c += 1;
        }
    }
    c = 0;
    for (let i = 0; i <= dim - 4; i++) {
        for (let j = 0; j <= dim - 4; j++) {
            mv[c] = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
            c += 1;
        }
    }

    let maxH = mh[0];
    for (let i = 1; i < mh.length; i++) {
        const element = mh[i];
        if (element > maxH) maxH = element;
    }
    let maxV = mv[0];
    for (let i = 1; i < mv.length; i++) {
        const element = mv[i];
        if (element > maxV) maxV = element;
    }

    /*
    let suma = 0;
    for (let i = 0; i < 10; i++) {
        //instrucciones
        suma += i;
        // i = 0
        // Al llegar al final volver a hace el for la i vale 1
        // Cuando llega a la ultima linea hace i++
    }
    let i = 0;
    while (i < 10) {
        //instrucciones
        i++;
    }
*/

    if (maxH > maxV) return maxH
    return maxV
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        maxOfTwoNumbers,
        findLongestWord,
        sumNumbers,
        sum,
        averageNumbers,
        averageWordLength,
        avg,
        uniquifyArray,
        doesWordExist,
        howManyTimes,
        greatestProduct
    };
}
