<template>
    <div class="card" style="width: auto;">
        <h6 class="card-header fw-bold">TOTAL DE HORAS ASIGNADAS</h6>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-sm table-bordered">
                    <tbody>
                        <tr v-for="(item, index) in data.assigned" :key="index">
                            <th scope="row" :style="defineColor(index)">{{ item.worker }}</th>
                            <td>{{ item.total }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Sin asignar:</th>
                            <td>{{ data.notAssigned }}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserColorsStore } from '@/stores/userColors';

const userColors = useUserColorsStore()

const data = {
    notAssigned: 0,
    assigned: [
        { worker: 'pedro', total: 10 },
        { worker: 'alvaro', total: 10 }
    ]
}
const defineColor = (id) => {
    return { backgroundColor: userColors.colors[id] }
}
</script>

<style scoped></style>