<template>
    <MainHeader />
    <div class="container">
        <slot></slot>
    </div>
    <MainFooter/>
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<style scoped></style>