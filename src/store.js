import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            cartItems: [],
            loggedUser: true
        };
    },
    mutations: {
        calculateCounter(state, payload) {
            state.cartItems = payload;
        },
        addToCart(state,payload){
            state.cartItems.push(payload);
        },
        userLogStatus(state,payload){
            state.loggedUser = payload
        }
    },
    getters: {
        getCartCounter(state) {
            return state.cartItems;
        },
        getUserStatus(state){
            return state.loggedUser
        }
    },
    actions: {
        calculateCounter(context, payload) {
            context.commit('calculateCounter', payload);
        },
        addToCart(context,payload){
            context.commit('addToCart', payload);
        },
        userLogStatus(context,payload){
            context.commit('userLogStatus', payload);
        }
    }
});

export default store;
