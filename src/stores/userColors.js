import { defineStore } from "pinia"

export const useUserColorsStore = defineStore({
    id: 'userColors',
    state: () => ({
        colors: {
            0: '#E7F0DC' ,
            1: '#BBE9FF' ,
            2: '#EF9C66' 
        }
    }),
    actions: {
        createColors(message){
            console.log(message)
        }
    }
})