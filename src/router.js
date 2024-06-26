import { createRouter, createWebHashHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import CreateAccount from './pages/CreateAccount.vue';
import RestaurantPage from "./pages/RestaurantPage.vue";
import SingleRest from './pages/component/SingleRest.vue';
import auth from "./middleware/auth";
import AboutUs from "./pages/component/AboutUs.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/food_delivery/',
            component: RestaurantPage,
        },
        {
            path: '/',
            redirect: '/food_delivery/' 
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
            path: '/:notFound(.*)', 
            component: LoginPage 
        },
        {
            path: '/food_delivery/about',
            component: AboutUs
        }
    ]   
})

export default router
