<template>
    <select class="form-select form-select-sm" @change="changeEvent" v-model="selectedOptionId">
        <option v-for="item in props.optionData" :key="item.id" :value="item.id"> {{ item.name }} </option>
    </select>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['optionData'])
const selectedOptionId = ref();
const emit = defineEmits(['onChange'])
const changeEvent = () => { emit('onChange', selectedOptionId.value) }
</script>

<style scoped></style>