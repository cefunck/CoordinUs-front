import { ref } from 'vue'

class WeekService {

    constructor() {
        this.availableWeeks = ref([])
        this.datesDetail = ref('Del -- al --')
    }

    getAvalableWeeks() {
        return this.availableWeeks
    }

    getDatesDetail() {
        return this.datesDetail
    }

    loadWeeks() {
        this.availableWeeks.value = [
            { id: 10, name: '10 del 2020' },
            { id: 11, name: '11 del 2020' }
        ]
    }
}

export default WeekService