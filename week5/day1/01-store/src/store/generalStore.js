import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    // other options...
    // En el state definimos las variables que se van a compartir en la aplicacion
    state: () => ({
        count: 0
    }),

    actions: {
        increment(){
            this.count++
        }
    }
  })