import { defineStore } from 'pinia'

export const upcoming = defineStore('upcoming', {
    state: () => ({
        upcoming: null
    }),
    actions: {
        async getUpcoming() {
            try {
                
            } catch (error) {
                console.log('Ошибка ' + error.message);
            }
        }
    }
})