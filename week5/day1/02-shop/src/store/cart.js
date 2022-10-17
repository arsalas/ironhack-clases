import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: []
    }),

    actions: {
        add(product){

        }
    }
})