<template>

    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img src="@/assets/logo.png" alt="Logo" width="45" height="45" class="d-inline-block">
                CoordinUs
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link btn btn-outline-primary">Turnos confirmados</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/availability" class="nav-link btn btn-outline-primary">Editar
                            disponibilidad</router-link>
                    </li>
                    <li class="nav-item">
                        <label class="navbar-text mx-1">Servicio:</label>
                    </li>
                    <li class="nav-item">
                        <NavSelector
                        :optionData="clientServices"
                        @onChange="handleClientServiceChange" />
                    </li>
                    <li class="nav-item">
                        <label class="navbar-text mx-1">Semana:</label>
                    </li>
                    <li class="nav-item">
                        <NavSelector 
                        :optionData="availableWeeks" 
                        @onChange="handleWeekChange"/>
                    </li>
                </ul>
                <span class="navbar-text">
                    Fechas: {{ datesDetail }}
                </span>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { onMounted } from 'vue';
import ClientServiceService from '@/services/ClientServiceService'
import WeekService from '@/services/WeekService';
import NavSelector from '@/components/NavSelector.vue'

const clientServiceService = new ClientServiceService()
const clientServices = clientServiceService.getClientServices()

const weekService = new WeekService()
const availableWeeks = weekService.getAvalableWeeks()
const datesDetail = weekService.getDatesDetail()

function handleClientServiceChange(selectedClientServiceId){
    alert(selectedClientServiceId)
}

function handleWeekChange(selectedWeekNumber){
    alert(selectedWeekNumber)
}

onMounted(async () => {
    await clientServiceService.fetchAll()
    weekService.loadWeeks()
})

</script>

<style scoped></style>