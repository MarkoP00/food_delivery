<template>
    <section>
  <GlobalSpinner v-if="restaurants === null"></GlobalSpinner>
      <div class="mainContent">
        <ul class="restaurantList">
          <li v-for="(restaurant, index) in restaurants" :key="index"  @click="navigateToRestaurant(restaurant.id)" class="card">
            <div class="restaurantImage">
              <img :src="restaurant.bannerImage" :alt="restaurant.title">
              <div class="deliveryStatus">
                <p>Delivery available</p>
              </div>
            </div>
            <div class="restaurantDetails">
                <h2 class="restaurantName">{{ restaurant.title }}</h2>
                <p class="restaurantDescription">{{ restaurant.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import  fetchService  from '../fetchService/fetchService.js';
    import GlobalSpinner from '../global/GlobalSpinner.vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const router = useRouter();
    const restaurants = ref(null);

    async function getRestaurants(){
        const response = await fetchService.get('/restaurants')
        restaurants.value = response.data.restaurants;
    }
    async function getCart(){
      const response = await fetchService.get('/restaurants/cart');
      store.dispatch('calculateCounter', response.data.cart)
    }
    function navigateToRestaurant(id){
        router.push(`/restaurants/${id}`)
    }
 
onMounted(() => {
    getRestaurants()
    getCart()
})
</script>

<style scoped>
section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .restaurantImage{
    position: relative;
  }
  .card{
    width: 325px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    margin: 20px;
    background-color: #1f2833;
    transition: 0.2s;
    cursor: pointer;
    box-shadow: 0px 0px 10px #66fcf1;
  }
  .card:hover{
    transform: scale(1.05);
  }
  .card img{
      width: 100%;
      height: 250px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      overflow: hidden;
      position: relative;
  }
  .deliveryStatus{
    position: absolute;
    left: 2%;
    bottom: 5%;
    color:#fff;
    background-color: #49a05f;
    padding: 5px;
  }
  .restaurantList{
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
  }
  .restaurantDetails {
      color: #fff;
      text-align: center;
  }
  .restaurantDetails h2{
    color:#66fcf1;
  }
  .restaurantName {
      font-size: 24px;
      margin-bottom: 10px;
  }
  
  .restaurantDescription {
      margin-bottom: 10px;
      color: #fff;
  }
</style>