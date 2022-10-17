import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: []
    }),

    actions: {
        //Hacer un push del producto al state products
        add(product) {
            this.products.push(product)
        }
    }
})