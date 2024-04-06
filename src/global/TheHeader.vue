<template>
    <main >
        <header>
          <div class="navbar">
            <div class="logo">
              <router-link to="/restaurants">Logo</router-link>
            </div>
            <ul class="links">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Service</a></li>
              <li class="special"><a @click="toggleCart">Cart</a> <p v-if="cartCounter?.length">{{ cartCounter.length }}</p></li>
            </ul>
            <div class="toggle_btn">
                <img @click="toggleDropDown($event)" width="50" height="50" src="https://img.icons8.com/3d-fluency/188/menu.png" alt="menu"/>
            </div>
          </div>
        <transition name="drop">
          <div class="dropDown" v-if="dropDownVisible">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Service</a></li>
            <li class="special"><a @click="toggleCart">Cart</a> <p v-if="cartCounter?.length">{{ cartCounter.length }}</p></li>
          </div>
        </transition>
        </header>
    </main>
    <TheCart v-if="toggleCartStatus" @close-cart="closeCart"></TheCart>
    </template>
    
    <script setup>
        import {ref, computed, onMounted,onUnmounted} from 'vue';
        import TheCart from '../pages/component/TheCart.vue';
        import { useStore } from 'vuex';
        import fetchService from '../fetchService/fetchService';

        const store = useStore();
        const dropDownVisible = ref(false);
        const toggleCartStatus = ref(false);
        const cartCounter = computed(() => store.getters.getCartCounter);
        const cartItems = ref(null);

        function toggleDropDown(event){
            event.stopPropagation();
            dropDownVisible.value = !dropDownVisible.value;
        }
        function toggleCart(){
            toggleCartStatus.value = !toggleCartStatus.value;
        }
        function closeCart(){
            toggleCartStatus.value = false;
        }
        async function getCart() {
            const response = await fetchService.get(`/restaurants/cart/`);
            cartItems.value = response.data.cart
            await store.dispatch('calculateCounter', response.data.cart)
        }
        const handleClickOutside = (event) => {
        const dropdown = document.querySelector('.dropDown');
        if (dropdown && !dropdown.contains(event.target)) {
            dropDownVisible.value = false;
        }
    }
    
    onMounted(() => {
        window.addEventListener('click', handleClickOutside);
    });
    
    onUnmounted(() => {
        window.removeEventListener('click', handleClickOutside);
    });
        getCart()
    </script>

<style scoped>
main{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    background-color: rgba(0,0,0,0.5);
}
.links li{
    list-style: none;
}
.links li a{
    text-decoration: none;
    color:#fff;
    font-size: 1rem;
    transition: 0.3s;
    position: relative
}
.links li a::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px; 
    background-color: #66f1fc;
    transform: scaleX(0); 
    transition: transform 0.3s ease; 
}

.links li a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #66f1fc;
    transform: scaleX(0); 
    transition: transform 0.3s ease-in-out; 
}

.links li a:hover::before,
.links li a:hover::after {
    transform: scaleX(1); 
}
.links li a:hover{
    color:#66fcf1

}
header{
    position: relative;
    padding: 0 2rem;
    width: 100%;
}
.navbar{
    width: 100%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar .logo a{
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color:#fff;
    transition: 0.3s;
}
.navbar .logo a:hover{
    color:#66f1fc
}
.navbar .links{
    display: flex;
    gap: 2rem;
}
.toggle_btn{
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    opacity: 0;
    visibility: hidden;
}
.dropDown{
    position: absolute;
    right: 2rem;
    top: 60px;
    width: 300px;
    background-color: #165763;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #66f1fc;
    transition: 0.5s;
}
.icon{
    margin-top: 200px;
    font-size: 20px;
}
.dropDown.open{
    display: block;
    transition: 0.5s;
}
.dropDown li a{
    transition: 0.2s;
}
.dropDown li{
    list-style: none;
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: 0.3s;
    cursor: pointer;
    
}
.dropDown li:hover a{
    color:#66fcf1;
    font-weight: 600;
    letter-spacing: 1.2px;
}
.dropDown li a{
    text-decoration: none;
    color:#fff;
}
.special{
    cursor: pointer;
}
.special p{
    display: inline;
    margin-left: 5px;
    color:#66f1fc;
    font-weight: bold;
}
/* dropMenu animation */

.drop-enter-from, .drop-leave-to{
    transform: scale(0.7);
    opacity: 0;
}
.drop-enter-active, .drop-leave-active{
    transition: all 0.3s ease;
}
.drop-enter-to, .drop-leave-from{
    opacity: 1;
    transform: scale(1);
}
@media(max-width: 990px){
    .navbar .links{
        display: none;
        visibility: hidden;
        opacity: 0;
    }
    .navbar .toggle_btn{
        display: block;
        opacity: 1;
        visibility: visible;
    }
    
}
@media(max-width: 576px){
    .dropDown{
        left: 2rem;
        width: unset;
    }
}
</style>