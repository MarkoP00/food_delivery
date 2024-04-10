<template>
  <GlobalSpinner v-if="restMeals === null"></GlobalSpinner>
  <section v-else>
    <div class="restaurantImage">
      <img :src="singleRest.bannerImage" alt="">
    </div>
    <div class="restName" >
      <h1>{{ singleRest.title }}</h1>
      <h3>{{ singleRest.description }}</h3>
    </div>
    <div class="listOfMeals">
      <ul class="mealList">
        <li v-for="meal in restMeals" :key="meal.id" class="mealItem" @click="selectMeal(meal)">
          <img :src="meal.image" alt="Meal Image" class="mealImage">
          <div class="mealDetails">
            <div class="mealInfo">
              <h2>{{ meal.title }}</h2>
              <p>{{ meal.description }}</p>
              <div class="prices">
                <p>Cena: {{ meal.price }}rsd</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <MealPopup v-if="selectedMeal" :meal="selectedMeal" @close-popup="closeMealPopup"></MealPopup>
  </section>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import fetchService from '../../fetchService/fetchService';
import MealPopup from './MealPopup.vue';
import GlobalSpinner from '../../global/GlobalSpinner.vue';
const props = defineProps({
  restId: String
});
if(props){
  localStorage.setItem('restaurantId', props.restId)
}
const singleRest = ref([]);
const restMeals = ref(null);
const selectedMeal = ref(null);

async function getRestaurant(){
  const restId = localStorage.getItem('restaurantId')
  const restInfo = await fetchService.get(`/restaurants/${props.restId}`);
  const meals = await fetchService.get(`/restaurants/${props.restId}/meals`);

  singleRest.value = restInfo.data;
  restMeals.value = meals.data.meals;
  
  localStorage.setItem('restID', restInfo.data.id)
}



function selectMeal(meal){
  selectedMeal.value = meal;
}

function closeMealPopup(){
  selectedMeal.value = null;
}

getRestaurant();
</script>
  
  <style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .restaurantImage  {
    width: 100%;
    height: 400px;
    position: relative;
  }
  
  .restaurantImage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  
  .restName {
    text-align: center;
    background: #165763;
    width: 100%;
    padding: 20px;
    color: #fff;
  }
 
  .mealList {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .mealList li{
    width: 350px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    margin: 20px;
    background: #1F2833;
    cursor: pointer;
    box-shadow: 0px 0px 20px #66fcf1;
    transition: 0.2s;
  }
  .mealList li:hover{
    transform: scale(1.05);
  }
  .mealItem {
    border: 1px solid #66fcf1;
    border-radius: 10px;
    transition: 0.2s;
    position: relative;
  }
  .mealItem img{
    width: 100%;
    height: 250px;
    border-bottom: 1px solid #66FCF1;
  }
  .mealDetails{
    padding: 0px 20px 10px 20px;
    letter-spacing: 1.1px;
  }
  .mealInfo{
    text-align: center;
    color:#fff;
    
  }
  .mealInfo h2{
    color: #66FCF1;
  }
  .mealInfo p{
    margin-bottom: 5px;
    letter-spacing: 1.1px;
  }
  .prices p{
    padding: 5px;
    background: #165763;
    border-radius: 5px;
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (max-width: 426px){
    .mealList li{
      width: 325px;
    }
  }
  </style>
  
  