<template>
    
    <section @click="closeCart">

        <transition name="fadeInOut">
        <div class="mainCart" @click.stop  v-if="cartActive">
            <div class="headerTitle">
                <p v-if="cartItems === null || cartItems.length === 0">Korpa je prazna 😊</p>
                <h1 v-else>Korpa</h1>
            </div>
            <div class="totalCounter">
                <h1>Ukupna cena: {{ totalCounter }} rsd</h1>
            </div>
            <ul class="cartList">
                <li v-for="element in cartItems" :key="element.mealId">
                    <img :src="element.image" alt="" class="cartItemImage">
                    <div class="cartItemDetails">
                        <h3>{{ element.title }}</h3>
                        <p>{{ element.singleUnitPrice * element.quantity }} rsd</p>
                        <p>Kolicina: {{ element.quantity }}</p>
                    </div>
                    <div class="deleteMeal">
                        <button @click="deleteMeal(element.mealId)">X</button>
                    </div>
                </li>
            </ul>
            <div class="finishOrder" v-if="cartItems?.length">
                <button v-if="!checkMarkActive" @click="finishOrder">Zavrsi kupovinu</button>
                <CheckMark v-else></CheckMark>
            </div>
        </div>
    </transition>
</section>
</template>

<script setup>
    import fetchService from '../../fetchService/fetchService';
    import {useStore} from 'vuex';
    import {onMounted, ref, defineEmits} from 'vue';
    import CheckMark from './CheckMark.vue';

    const emit = defineEmits(['close-cart']);
    const store = useStore();
    const cartItems = ref(null);
    const totalCounter = ref(0);
    const cartActive = ref(false);
    const checkMarkActive = ref(false);

    async function getCart() {
        const response = await fetchService.get(`/restaurants/cart`);
        if(response.status !== 'ok'){
            return
        }
        cartItems.value = response.data.cart;
        store.dispatch('calculateCounter', response.data.cart)
        totalCounter.value = 0;
        cartItems.value.forEach((element) => totalCounter.value += element.singleUnitPrice * element.quantity);
    }

    async function deleteMeal(mealId) {
    const body = {
        order: [
            { mealId, quantity: 0 }
        ]
    };
 
    const response = await fetchService.put(`/restaurants/cart`, body);

    const deletedMeal = cartItems.value.find((meal) => meal.mealId === mealId);
    totalCounter.value -= deletedMeal.singleUnitPrice * deletedMeal.quantity;

    const itemIndex = cartItems.value.findIndex((meal) => meal.mealId === mealId);
    cartItems.value.splice(itemIndex, 1);
}
    function showCart(){
        cartActive.value = true
    }

    function closeCart(){
        cartActive.value = false;
        setTimeout(() => {
            emit('close-cart')
        }, 300);
    }
    
   async function finishOrder(){
    const response = await fetchService.delete('/restaurants/cart');
    checkMarkActive.value = true;
    if(response.status === 'ok'){
        setTimeout(() => {
            store.dispatch('calculateCounter', response.data.cart);
            totalCounter.value = 0;
            cartItems.value = null
        }, 1500);
    }
   }

    onMounted(() => {
        getCart()
        showCart()

    })

</script>

<style scoped>
section {
    min-height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(0,0,0,0.4);
    z-index: 100;
}

.mainCart {
    width: 350px; 
    background-color: #1f2833;
    height: 100vh; 
    overflow-y: auto; 
    z-index: 100;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-left: 1px solid #45f3ff;
    border-top: 1px solid #45f3ff;
    border-bottom: 1px solid #45f3ff;
    position: relative;
}
.headerTitle{
    text-align: center;
    padding: 40px;
    
}
.headerTitle h1{
    color:#fff;
    border-bottom: 1px solid #66fcf1;
    padding-bottom: 5px;
}
.headerTitle p{
    color:#fff;
    border-bottom: 1px solid #66fcf1;
    padding-bottom: 5px;
}
.cartList {
    padding: 5px 10px 5px 10px;
}

li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 5px 10px 5px 10px;
    border: 1px solid #0f6970;
    border-radius: 10px;
    cursor: pointer;
    position: relative
}

li:hover{
    background-color: rgb(52, 69, 90); 

}
.cartItemImage {
    width: 80px;
    height: 80px;
    object-fit: cover; 
    margin-right: 20px;
}

.cartItemDetails h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #66fcf1;
}

.cartItemDetails p {
    margin: 5px 0;
    color: #fff;
}
.deleteMeal{
    position: absolute;
    top: 3%;
    right: 3%;
    
}
.deleteMeal button{
    border: none;
    background: none;
    color:#66fcf1;
    font-size: 16px;
    cursor: pointer;
}
.totalCounter{
    text-align: center;
    color:#fff;
}

.fadeInOut-enter-from, .fadeInOut-leave-to{
    opacity: 0;
    transform: translateX(200px);
}
.fadeInOut-enter-active, .fadeInOut-leave-active{
    transition: all 0.3s ease-out;
}
.fadeInOut-enter-to, .fadeInOut-leave-from{
    opacity: 1;
    transform: translateX(0px);
}

.finishOrder{
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.finishOrder button{
    border: none;
     padding: 8px;
     background-color: rgba(69, 162, 158, 1);
     color:#fff;
     border-radius: 10px;
     cursor: pointer;
     font-size: 16px;
     transition: 0.3s;
}
.finishOrder button:hover{
    background-color: rgba(69, 162, 158, 0.6);
}
@media (max-width: 426px){
    .mainCart{
        width: 300px;
    }
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  border-radius: 50%;
  background-color: white;
}

.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  transition: .3s;
  transform: scale(0);
  border-radius: 50%;
}

.container input:checked ~ .checkmark {
  background-color: #20c580;
  transform: scale(1);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container input:checked ~ .celebrate {
  display: block;
}

.container .checkmark:after {
  left: 0.45em;
  top: 0.25em;
  width: 0.30em;
  height: 0.5em;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}

.container .celebrate {
  position: absolute;
  transform-origin: center;
  animation: kfr-celebrate .4s;
  animation-fill-mode: forwards;
  display: none;
  stroke: #20c580;
}

@keyframes kfr-celebrate {
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1.2);
    opacity: 0;
    display: none;
  }
}
</style>