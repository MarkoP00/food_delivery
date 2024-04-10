import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import CreateAccount from './pages/CreateAccount.vue';
import RestaurantPage from "./pages/RestaurantPage.vue";
import SingleRest from './pages/component/SingleRest.vue';
import auth from "./middleware/auth";

const router = createRouter({
    history: createWebHistory(),
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
            path: '/login',
            component: LoginPage,
            name: 'Login'
        },
        {
            path: '/create',
            component: CreateAccount
        },
        {
            path: '/restaurants',
            component: RestaurantPage,
            beforeEnter: [auth]
        },
        {
            path: '/restaurants/:restId',
            props: true,
            component: SingleRest
        },
        {
            path: '/:notFound(.*)', 
            component: LoginPage 
        },
    ]   
})

export default router
