import { createRouter,createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import CreateAccount from './pages/CreateAccount.vue';
import RestaurantPage from "./pages/RestaurantPage.vue";
import SingleRest from './pages/component/SingleRest.vue';
import auth from "./middleware/auth";

const router = createRouter({
    history: createWebHistory(),
    
    routes: [
        {
            path: '/',
            component: RestaurantPage, 
        },
        {
            path: '/food_delivery/',
            component: RestaurantPage,
        },
        {
            path: '/food_delivery/login',
            component: LoginPage,
            name: 'Login'
        },
        {
            path: '/food_delivery/create',
            component: CreateAccount
        },
        {
            path: '/food_delivery/restaurants',
            component: RestaurantPage,
            beforeEnter: [auth]
        },
        {
            path: '/food_delivery/restaurants/:restId',
            props: true,
            component: SingleRest
        },
        {
            path: '/food_delivery/:notFound(.*)', 
            component: LoginPage 
        },
    ]   
})

export default router