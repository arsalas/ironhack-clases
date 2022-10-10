// importar variables y funciones  de otros archivos

// Si pongo {} va a buscar el nombre de la variable que importo
import { variable, newFunc,newvariable } from './exports';
// Si no pongo {} importa el export default del archivo y le da el nombre
// que le diga al import
import nuevaVariable from './exports/exportaciones'

// Importa todo
import * as Importaciones from './exports/exportaciones';

console.log(variable, nuevaVariable)

// Si no uso el index.js tengo que importar los archivos uno por uno
import { variable, newFunc } from './exports/exportaciones';
import {newvariable} from './exports/exportaciones2'