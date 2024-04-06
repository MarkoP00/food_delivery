<template>
    <TheHeader v-if="!unwantedRoutes.includes(router.path)"></TheHeader>
    
    <router-view></router-view>
</template>

<script setup>
// import {computed} from 'vue';
import TheHeader from './global/TheHeader.vue';
import {useRoute} from 'vue-router';

const router = useRoute();
// const path = computed(() => router.path);
const unwantedRoutes = ['/login','/create'];


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body{
    background-color: #0b0c10
}
</style>