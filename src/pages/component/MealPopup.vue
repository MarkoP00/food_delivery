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
                 <img :src="props.meal.image" alt="">
                 <div class="card-content">
                     <h1>{{ props.meal.title }}</h1>
                     <p>{{ props.meal.description }}</p>
                 </div>
                 <div class="additions" v-for="(addition, index) in props.meal.additions" :key="index">
                     <!-- <input type="checkbox" :id="'inpPrice' + index" :value="addition.price" v-model="selectedAdditions" @change="handleCheckboxChange(addition.title)"> -->
                     <label :for="'inpPrice' + index" @change="handleCheckboxChange(addition.title)">{{ addition.title }}</label>
                 </div>
                 <div class="cart">
                     <div class="price">
                         <p>{{ selectedPrice }}rsd</p>
                     </div>
                     <div class="counter">
                        <button @click="decrement">-</button>
                        <p>{{ quantity }}</p>
                        <button @click="increment">+</button>
                     </div>
                     <div class="button">
                         <button @click="addToCart(props.meal.id)">Add to cart!</button>
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
const popupVisible = ref(null)
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

async function addToCart(mealId){
    const body = {
        order: [
        { mealId, quantity: quantity.value }
        ]
    }
    
    const response = await fetchService.put(`/restaurants/cart`,body);

    if(response.status === 'ok'){
        store.dispatch('addToCart', props.meal)
        globalTitle.value = 'Success!!!';
        globalMessage.value = 'Item added to cart! ✔️'
    }
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
     padding: 20px;
     box-shadow: -10px 10px 20px rgba(69, 162, 158, 0.6);

 }
 .card img{
         width: 100%;
         height: auto;
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
     background-color: rgba(69, 162, 158, 0.6);
     border-radius: 10px;
 
 }
 .cart button{
     border: none;
     padding: 8px;
     background-color: rgba(126, 247, 13, 0.6);
     color:#fff;
     border-radius: 10px;
     cursor: pointer;
     transition: 0.3s;
 }
 .cart button:hover{
    background-color: rgba(69, 162, 158, 0.6);
 }
 .additions{
    margin: 5px
 }
 .additions input{
     margin-right: 10px;
 }
 .additions label{
     color: #66fcf1
 }
 .counter{
    display: flex;
    background: rgba(69, 162, 158, 0.8);
    border-radius: 5px;
 }
 .counter p{
    margin: 0px 5px 0px 5px;
 }
 .counter button{
    background: #10524e;
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
 </style>
 