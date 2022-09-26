

const str1 = 'áa';
const str2 = 'bb';

const s1 = str1.toLowerCase();
const s2 = str2.toLowerCase();

const accents = {
    from: "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
    to: "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc"
}

/*
InfexOf busca dentro de una array o un string la posicion del caracter que le pasamos
const arr = ['aa', 'b', 'c', 'a']

console.log(accents.from.indexOf('á'))
console.log(accents.from.indexOf('z'))

console.log(arr.indexOf('aa'))
console.log(arr.indexOf('z'))
*/

let limit;
if (str1.length > str2.length)
    limit = str1.length;
else 
    limit = str2.length

let same = true
for (let i = 0; i < limit; i++ ){
    // Tabla ASCII los caracteres se representan con numeros
    // s1.charAt('a') = 97
    // s1.charAt('A') = 65
    // s2.charAt('b') = 98
    // IndexOf busca la posicion de una array donde esta el caracter que le pasamos
    // Si no lo encunetra devuelve -1
    // Guardamos el caracter que queremos comparar
    let char1 = s1.charAt(i);
    let char2 = s2.charAt(i);
    // Miramos si la variable de los acentos esta el caracter que estamos comparando
    // Nos da el indice donde se encuentra la letra que estamos buscando
    // Si es -1 no la ha encontrado, en este caso es que no tiene acento

    const char1ToFind = accents.from.indexOf(char1);
    // Miramos si el caracter tiene acento
    console.log('caracter a comparar', char1)
    // Miramos el indice para poder reemplazarlo
    console.log('posicion en la array de ese caracter', char1ToFind)
    // Si es una letra con acento lo cambiamos por la letra sin acento
    console.log('caracter convertido a caracter sin acento', accents.to[char1ToFind])
    if (char1ToFind != -1){
        // Transformamos el caracter especial en un caracter simple        
        char1 = accents.to[char1ToFind]
    }
    const char2ToFind = accents.from.indexOf(char2);
    console.log(char2)
    console.log(char2ToFind)
    if (char2ToFind != -1){
        // Transformamos el caracter especial en un caracter simple        
        char2 = accents.to[char2ToFind]
    }
    console.log(`${char1} > ${char2}`)
    if (char1 > char2){
        console.log(`${str2} va antes que ${str1}`);
        same = false;
        break;
    }
    if (char2 > char1){
        console.log(`${str1} va antes que ${str2}`);
        same = false
        break;
    }
}

if (same) console.log(`${str1} es igual que ${str2}`)
