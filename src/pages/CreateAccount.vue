<template>
  <AccountPopup :isBorderRed="border" v-if="popupTitle" @close-popup="closePopup">
   <template #icon>
     <p>{{ icon }}</p>
   </template>
     <template #titleText>
       <p>{{ popupTitle }}</p>
     </template>
     <template #descText>
       <h1>{{ popupMessage }}</h1>
     </template>
   </AccountPopup>

 <section>
 <div class="box" :class="{active : fetchActive}">
   <form @submit.prevent >
       <h3>Create accout</h3>
       <div class="formBox"  >
           <label for="email" :class="{red : formData.name.invalid === true}" >User name</label>
           <input type="email" v-model="formData.name.value">
       </div>
       <div class="formBox">
           <label for="email" :class="{red : formData.email.invalid === true}">Email</label>
           <input type="email" v-model="formData.email.value">
       </div>
       <div class="formBox">
           <label for="pass" :class="{red : formData.password.invalid === true}">Create Password</label>
           <input type="password" v-model="formData.password.value">
       </div>
       <div class="formBox">
           <label for="pass" :class="{red : formData.confirm.invalid === true}">Confirm password</label>
           <input type="password" v-model="formData.confirm.value">
       </div>
       <div class="toCreate">
         <p>Already have an account?</p>
         <router-link to="/login">Login</router-link>
       </div>
       <div class="submitButton">
           <button type="button" @click="submitForm">Submit!</button>
       </div>
   </form>
 </div>
</section>
</template>

<script setup>
   import { ref, reactive } from 'vue';
   import fetchService from '../fetchService/fetchService';
   import AccountPopup from '../global/AccountPopup.vue';
   const fetchActive = ref(false)
   
   const icon = ref('');
   const popupTitle = ref('');
   const popupMessage = ref('');
   const border = ref('');

   const formData = reactive({
   name: {
     value: "",
     invalid: false
   },
   email: {
     value: "",
     invalid: false
   },
   password: {
     value: "",
     invalid: false
   },
   confirm: {
     value: "",
     invalid: false
   }
   })
   
   
 function validateInputs() {
 Object.keys(formData).forEach((key) => {
   if (formData[key].value === '') {
     popupTitle.value = 'Neuspesno!';
     icon.value = '❌';
     border.value = true;
     popupMessage.value = 'Popunite sva polja! Takodje, sifre moraju da budu iste!';
     formData[key].invalid = true;
   } else {
     formData[key].invalid = false
   }
   if (key === 'email' && !formData.email.value.includes('@')) {
     popupTitle.value = 'Neuspesno!';
     icon.value = '❌';
     border.value = true;
     popupMessage.value = 'Email adresa mora sadrsati @ simbol!';
     formData.email.invalid = true;
   }
 })
   if(formData.password.value !== formData.confirm.value){
     popupTitle.value = 'Neuspesno!';
     icon.value = '❌';
     border.value = true;
     popupMessage.value = 'Popunite sva polja! Takodje, sifre moraju da budu iste!';
     formData.password.invalid = true;
     formData.confirm.invalid = true;
   }
}

   async function submitForm() {
   validateInputs();
   let allFieldsValid = true;
   Object.values(formData).forEach((value) => {
       if (value.invalid) {
           allFieldsValid = false;
           return;
       }
   });

   if (allFieldsValid) {
   fetchActive.value = true
       Object.values(formData).some(async (value) => {
           if (!value.invalid) {
               const createUser = await fetchService.post('/restaurants/users', {
                   username: formData.name.value,
                   email: formData.email.value,
                   password: formData.password.value,
                 });

               if (createUser.status === 'ok') {
                   icon.value = '✔️';
                   border.value = false;
                   popupTitle.value = 'Odobreno!!';
                   popupMessage.value = 'Sada mozete da se prijavite na novi profil!';
                   localStorage.setItem('id', createUser.data.user.id);
                   fetchActive.value = false;
               } else {
                   icon.value = '❌';
                   popupTitle.value = 'Neuspesno!';
                   popupMessage.value = 'Pokusajte ponovo!';
                   border.value = true;
                   fetchActive.value = false;
               }
       }

   })

 }
 }

function closePopup(){
 popupTitle.value = '';
}
 
</script>

<style scoped>
section{
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   z-index: 1
}

 .box{
   position: relative;
   width: 400px;
   height: 650px;
   background-color: #1c1c1c;
   border-radius: 8px;
   z-index: 10;
   overflow: hidden;
}

.box::before{
   content: '';
   position: absolute;
   top: -40%;
   left: -60%;
   width: 450px;
   height: 550px;
   background: linear-gradient(0deg, transparent, #45f3ff,#45f3ff);
   transform-origin: bottom right;
   animation: rotating 6s linear infinite
}
.box::after{
   content: '';
   position: absolute;
   top:-45%;
   left: -50%;
   width: 450px;
   height: 550px;
   background: linear-gradient(0deg, transparent, #45f3ff,#45f3ff);
   transform-origin: bottom right;
   animation: rotating 6s linear infinite;
   animation-delay: -3s;
}
.active::before{
   animation: rotating 2s linear infinite
}
.active::after{
   animation: rotating 2s linear infinite;
   animation-delay: -3s;
}
form{
   position: absolute;
   background-color: #1f2833;
   border-radius: 5px;
   inset: 4px;
   padding: 40px 30px;
   display: flex;
   flex-direction: column;
   z-index: 10;
}
 form h3{
   color: #45f3ff;
   font-weight: 500;
   text-align: center;
   letter-spacing: 0.1em;
   border-bottom: 3px solid #45f3ff;
   padding-bottom: 10px;
   pointer-events: none;
 }
 .formBox {
   position: relative;
   width: 300px;
   margin-top: 35px;
 }
 .formBox input{
   position: relative;
   width: 110%;
   padding-top: 25px;
   padding-bottom: 5px;
   margin-bottom: 5px;
   background: none;
   border: none;
   outline: none;
   font-size: 1em;
   letter-spacing: 0.05em;
   border-bottom: 1px solid #c5c6c7;
   color: #45f3ff;
   z-index: 10;
   transition: 0.3s;
 }
 .formBox label{
   position: absolute;
   width: 100%;
   font-size: 1em;
   letter-spacing: 0.1em;
   left: 0%;
   color: #c5c6c7;
   pointer-events: none;
   transition: 0.3s;
 }
 
 .formBox:focus-within label {
 color: #45f3ff;
 letter-spacing: 6px;
 transform: translateY(-5px);

}
 .formBox input:focus {
   border-bottom: 1px solid #45f3ff;
 }
 .submitButton {
   margin-top: 20px;
 }

 .toCreate{
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 15px;
 }
 .toCreate p{
   color:#fff;
 }
 .toCreate a{
   text-decoration: none;
   color: #66fcf1;
   font-weight: 600;
   transition: 0.3s;
 }
 .toCreate a:hover{
   letter-spacing: 1.2px;
 }

 button {
   border: none;
   outline: none;
   background: #45f3ff;
   padding: 11px 25px;
   width: 100%;
   cursor: pointer;
   margin-top: 10px;
   border-radius: 10px;
   font-weight: 600;
   font-size: 1em;
   transition: 0.3s;
 }

 button:hover {
   background: #3ed6e0;
   letter-spacing: 5px;
 }
 .red{
   color: red !important
 }
 @keyframes rotating {
   0%{
       transform: rotate(0deg);
   }
   100%{
       transform: rotate(360deg);
   }
}

@media (max-width: 376px) {
 .box{
   width: 350px
 }
 .formBox input{
   width: 94%;
 }
 .box::before{ 
   top: -30%;
   left: -60%;
 }
.box::after{
   top:-45%;
   left: -70%;
}
}
</style>