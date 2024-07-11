<template>
    <div class="card" style="width: auto;">
        <h6 class="card-header fw-bold">{{ data.date }}</h6>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" v-for="(worker, index) in data.workers" :key="index" style="background-color: aqua;">{{ worker }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(hour, index) in data.hours" :key="index">
                            <th scope="row" style="background-color: green;">{{ hour }}</th>
                            <td v-for="(worker, index) in data.workers" :key="index">
                                <CheckBox />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import CheckBox from '@/components/CheckBox.vue'
const data = {
    date: 'lunes 02 de marzo',
    hours: [
        '19:00-20:00',
        '20:00-21:00',
        '20:00-21:00',
        '20:00-21:00',
        '20:00-21:00',
        '20:00-21:00',
        '20:00-21:00',
        '20:00-21:00',
        '20:00-21:00',
        '20:00-21:00',
        '20:00-21:00',
        '20:00-21:00'
    ],
    workers: [
        'pedro',
        'alvaro',
        'alvaro',
        'alvaro',
        'alvaro'
    ]
}
</script>

<style scoped></style>