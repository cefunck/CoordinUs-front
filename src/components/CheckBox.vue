<template>
    <input class="form-check-input" type="checkbox" v-model="isChecked" @change="changeEvent">
</template>

<script setup>
import { ref } from 'vue'
const isChecked = ref(true)
const emit = defineEmits(['onChange'])
const changeEvent = () => { emit('onChange', isChecked.value) }
</script>

<style scoped></style>