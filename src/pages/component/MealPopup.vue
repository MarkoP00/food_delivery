<template>
    <section @click="closePopup">
    <GlobalPopup v-if="globalTitle">
        <template #title>
            <h1 style="border-bottom: 2px solid #66f1fc; font-size: 20px;">{{ globalTitle }}</h1>
        </template>
        <template #message>
            <h3>{{ globalMessage }}</h3>
        </template>
    </GlobalPopup>
    <transition name="popup">
         <div class="popup-container" @click.stop v-if="popupVisible">
             <div class="card">
                <div class="cardImage">
                    <img :src="props.meal.image" alt="">
                    <button @click="closePopup">></button>
                </div>
                <div class="content">

                 <div class="card-content">
                     <h1>{{ props.meal.title }}</h1>
                     <h3>{{ props.meal.price }},00 rsd</h3>
                    </div>
                    <p>{{ props.meal.description }}</p>
                 <div class="additions" v-for="(addition, index) in props.meal.additions" :key="index">
                     <label :for="'inpPrice' + index" @change="handleCheckboxChange(addition.title)">{{ addition.title }}</label>
                 </div>
                 <div class="cart">
                     <div class="counter">
                        <button @click="decrement">-</button>
                        <p>{{ quantity }}</p>
                        <button @click="increment">+</button>
                     </div>
                     <div class="button">
                         <button @click="addToCartClicked(props.meal.id)">Dodaj u korpu! {{ selectedPrice }} rsd</button>
                     </div>
                 </div>
             </div>
            </div>

         </div>
        </transition>
    </section>
 </template>
 
 <script setup>
import {defineProps,ref,defineEmits, onMounted} from 'vue';
import fetchService from '../../fetchService/fetchService';
import {useStore} from 'vuex';
import GlobalPopup from '../../global/GlobalPopup.vue';
const store = useStore();
const props = defineProps({
        meal: Object
    });
const globalTitle = ref('');
const globalMessage = ref('');
const quantity = ref(1); 
const selectedPrice = ref(parseInt(props.meal.price))
const popupVisible = ref(null);
const emit = defineEmits(['close-popup']);

function increment(){
    if(quantity.value > 0){
        quantity.value++;
        selectedPrice.value = parseInt(props.meal.price) * quantity.value;
    }
}
function decrement(){
    if(quantity.value > 1){
        quantity.value--;
        selectedPrice.value = parseInt(props.meal.price) * quantity.value;
    } else if(quantity.value === 1){
        selectedPrice.value = parseInt(props.meal.price) * quantity.value;
    } else {
        return;
    }
}
function showPopup(){
    popupVisible.value = true
}

function closePopup(){
    popupVisible.value = false;
    setTimeout(() => {
        emit('close-popup')
    }, 100);
}

async function addToCart(mealId) {
    const quantityInCart = await getCart(mealId);
    const cartItems = store.state.cartItems;
    const body = {
        order: [
            { mealId, quantity: quantity.value + quantityInCart }
        ]
    }

    const response = await fetchService.put(`/restaurants/cart`, body);

    if (response.status === 'ok') {
        if (cartItems.some(item => item.id === mealId) || cartItems.some(item => item.mealId === mealId)) {
            globalTitle.value = 'Bravo!';
            globalMessage.value = 'Jelo je poslato u korpu!';
        } else {
            store.dispatch('addToCart', props.meal);
            globalTitle.value = 'Bravo!';
            globalMessage.value = 'Jelo je poslato u korpu!';
        }
    }
}

async function getCart(mealId){
    const response = await fetchService.get(`/restaurants/cart`);

    const mealFound = await response.data.cart.find(meal => meal.mealId === mealId)
    if(mealFound){
        return mealFound.quantity
    }else{
        return 0;
    }
}
function addToCartClicked(mealId) {
  addToCart(mealId);
  showPopup();
}

onMounted(() => {
    showPopup()
})
 </script>
 
 <style scoped>
 section{
     min-height: 100vh;
     display: flex;
     justify-content: center;
     position: fixed;
     top: 0;
     background: rgba(0,0,0,0.7);
     width: 100%;
 }
 .popup-container{
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     border-radius: 10px;
     padding: 16px;
 }
 .card{
     max-width: 504px;
     min-width: 325px;
     background-color: #1f2833;
     border-radius: 8px;
     overflow: hidden;
     box-shadow: -10px 10px 20px rgba(69, 162, 158, 0.6);
 }
 .content{
    padding: 20px;
 }

 .card-content{
    display: flex;
    align-items: center;
    gap: 20px;
 }
 .card-content h3{
    color:#fff;
 }
 .cardImage{
    position: relative;
 }
 .card img{
         width: 100%;
         height: auto;
 }
 .cardImage button {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 40px; 
    height: 40px; 
    background-color: rgba(0, 0, 0, 0.7); 
    border: none;
    color: white; 
    font-size: 20px;
    font-weight: 600;
    border-radius: 50%; 
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0; 
    outline: none; 
    transition: background-color 0.3s ease; 
    transform: rotate(90deg);
}

.cardImage button:hover {
    background-color: rgba(0, 0, 0, 0.9);
}
 .card h1{
     color: #66fcf1;
     font-size: 25px;
 }
 .card p{
     color:#fff;
 }
 .cart{
     display: flex;
     justify-content: space-between;
     margin-top: 10px;
 }
 .cart p{
     padding: 5px;
     border-radius: 10px;
 
 }
 .cart button{
     border: none;
     padding: 8px;
     background-color: rgba(69, 162, 158, 1);
     color:#fff;
     border-radius: 10px;
     cursor: pointer;
     transition: 0.3s;
 }
 .cart button:hover{
    background-color: rgba(69, 162, 158, 0.6);
 }
 
 
 .additions label{
     color: #66fcf1
 }
 .counter {
    display: flex;
    background-color: #0B0C10; 
    border-radius: 5px;
    height: 35px;
    width: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
}

.counter p {
    margin: 0;
    font-size: 16px;
    color: #45f3ff;
}

.counter button {
    background-color: rgba(69, 243, 255, 0.8); 
    border: 2px solid #0B0C10; 
    color: #fff; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: 50%; 
    width: 30px;
    height: 30px;
    cursor: pointer;
}
 .popup-enter-from, .popup-leave-to{
    transform: scale(0.7);
    opacity: 0;
 }
 .popup-enter-active, .popup-leave-active{
    transition: 0.3s all ease;
 }  
 .popup-enter-to, .popup-leave-from{
    transform: scale(1);
    opacity: 1;
 }

 @media (min-width: 374px){
    .card-content{
        flex-direction: column;
        align-items: normal;
        gap: 0px;
    }
 }
 @media (min-width: 750px){
    .card-content{
        flex-direction: row;
        align-items: center;
        gap: 20px;
        text-align: center;
    }
 }
 </style>
 