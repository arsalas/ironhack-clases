
// Una clase es como un objeto

class Animal {

    // Argumentos = variables
    #nombre;
    #edad;

    // constructor
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
        console.log('constructor animal')
    }

    // Es una mala practica
    // set nombre(nombre){
    //     this.#nombre = nombre
    // }
    // get nombre(){
    //     return this.#nombre;
    // }

    // Metodos
    getNombre() {
        return this.#nombre
    }
    getEdad() {
        return this.#edad
    }
    setNombre(nombre) {
        this.#nombre = nombre
    }
    setEdad(edad) {
        this.#edad = edad
    }
    comer() {
        console.log(`${this.#nombre} esta comiendo`);
    }

    dormir() {
        console.log(`${this.#nombre} esta durmiendo`);
    }
}

class Pajaro extends Animal {
    #tipo;

    constructor(nombre, edad, tipo) {
        console.log('constructor pajaro')
        super(nombre, edad);
        this.#tipo = tipo;
    }
    volar() {
        console.log(`${this.getNombre()} esta volando`)
    }

}


const perro = new Animal('perro', 4);
const gato = new Animal('gato', 2)
console.log(perro);
console.log(gato)
perro.comer()
gato.comer()
// console.log(perro.getNombre())
// perro.setNombre('nuevo nombre')
// console.log(perro.getNombre())
perro.setNombre('perro 3');
console.log(perro);

const pajaro = new Pajaro('pajaro', 1, 'canario');
pajaro.comer();
pajaro.volar()
