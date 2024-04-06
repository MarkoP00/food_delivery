<template>
    <main >
    <div class="popup center">
        <div class="icon" :class="{'red-border' : props.isBorderRed }">
            <p>
                <slot name="icon">

                </slot>
            </p>
        </div>
        <div class="title">
           <slot name="titleText">
           </slot> 
        </div>
        <div class="desc">
            <slot name="descText">
            </slot>
        </div>
        <div class="btn-dismiss">
            <button @click="$emit('close-popup')">Okay!</button>
        </div>
    </div>
</main>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
    isBorderRed: Boolean
})
</script>

<style scoped>

.center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    color:#66fcf1;
}
.popup{
    width: 350px;
    background: #0B0C10;
    border-radius: 10px;
    box-sizing: border-box;
    z-index: 2;
    text-align: center;
    z-index: 99;
    border: 1px solid #66fcf1;
    padding: 10px;
}

.popup .icon{
    margin: 5px 0px;
    width: 50px;
    height: 50px;
    border: 2px solid #34f234;
    text-align: center;
    display: inline-block;
    border-radius: 50%;
}
.red-border{
    border: 2px solid #f12314 !important;
}
.popup .icon p{
    font-size: 30px;
}
.popup .title{
    margin: 5px 0px;
    font-size: 30px;
    font-weight: bold;
}
.popup .desc{
    font-size: 10px;
    padding: 5px;
    color:#fff;
}
.btn-dismiss{
    margin: 10px;
}
.popup .btn-dismiss button{
    padding: 10px 20px;
    background: #0e5966;
    color:#f5f5f5;
    border: 2px solid #111;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
.popup .btn-dismiss button:hover{
    color:#111;
    background-color: #f5f5f5;
}
</style>