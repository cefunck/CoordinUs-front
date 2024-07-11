<template>
    <div class="card" style="width: auto;">
        <h6 class="card-header fw-bold">{{ data.date }}</h6>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-sm">
                    <tbody>
                        <tr v-for="(item, index) in data.assignments" :key="index">
                            <th v-if="item.worker" scope="row" style="background-color: #729762">{{ item.hour }}</th>
                            <th v-else scope="row" style="background-color: #FF8080">{{ item.hour }}</th>
                            <td v-if="item.worker" :style="defineColor(index)">{{ item.worker ?? 'sin asignar' }}</td>
                            <td v-else><v-icon name="io-warning" animation="pulse"/></td>
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
    date: 'lunes 02 de marzo',
    assignments: [
        { hour: '10:00-11:00', worker: 'pedro' },
        { hour: '11:00-12:00', worker: 'alvaro' },
        { hour: '12:00-13:00', worker: null }
    ]
}

const defineColor = (id) => {
    return { backgroundColor: userColors.colors[id] }
}
</script>

<style scoped></style>