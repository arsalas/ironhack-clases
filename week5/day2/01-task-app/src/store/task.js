import { defineStore } from 'pinia'
import { updateTask } from '../api'

export const useTaskStore = defineStore('task', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            // Guardaremos los task que nos de supabase
            tasks: []
        }
    },
    actions: {

        setTask() {
            //TODO guardar en el stado las task que nos de supabase
        },

        updateTask(id, task) {
            // TODO modificar el estado de la task
            // Encontrar el indice de la task con ese id y cambiar su contenido con task
        },

        deleteTask(id) {
            // TODO modificar el estado borrando esa task
            // Encontramos el indice de ese id y eliminamos ese indice de la array
        },

        addTask(task) {
            // TODO modificar el estado de task haciendo un push de la task
            // Comprobar que tenemos el id al insertar el registro, en caso de no tenerlo tendriamos que hacer el getTask
        }



    }
})