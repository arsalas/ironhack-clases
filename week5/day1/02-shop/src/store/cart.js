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
    },
    persist: {
        // Nos activa la persistencia del store
        enabled: true,
        strategies: [
          {
            // Key del store
            key: 'cart',
            // donde guarda el store
            storage: localStorage,
          },
        ],
      },
})