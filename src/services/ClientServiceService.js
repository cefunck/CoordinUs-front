import { ref } from 'vue'

class ClientServiceService {

    constructor() {
        this.clientServices = ref([])
    }

    getClientServices() {
        return this.clientServices
    }

    async fetchAll() {
        try {
            const url = 'http://localhost:3000/api/v1/client_services'
            const rawResponse = await fetch(url)
            const response = await rawResponse.json()
            this.clientServices.value = await response
        } catch (error) {
            alert(error)
        }
    }

    async setCurrentClientService() {
        this.currentClientServiceId.value = 1
    }
}

export default ClientServiceService