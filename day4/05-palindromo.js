// funcion que retorne un booleano si la sftring que 
// recibe es un palindromo
// palindromo es una palabra que se le igua de alante a tras


const isPalindromo = (str) => {
    return str.split('').reverse().join('') === str
}
const isPalindromo2 = (str) =>
    str.split('').reverse().join('') === str


// console.log(isPalindromo('anitalavalatina'));
// console.log(isPalindromo('no es palindromo'));

const str = "Hola Mundo a"
console.log(str.split(' o '))
const nums = [1, 2, 3, 4]
console.log(nums.reverse())
const strs = ['Hola', 'Mundo', 'gfd'];
console.log(strs.join(''))

const countWords = (str) => {
    const arr = str.split(' ');
    return arr.length;
}
console.log(countWords('esto es una frase'))