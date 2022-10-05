class Usuario{
    #nombre;
    #email;

    constructor(nombre, email){
        this.#nombre = nombre;
        this.#email = email
    }
    leer(){}

}

class Admin extends Usuario{

    constructor(nombre, email){
        super(nombre, email);
    }
    borrar(){}
    editar(){}
    crear(){}
}

new Usuario('usuario', 'email');
// new Promise