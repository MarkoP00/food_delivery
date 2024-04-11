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
  <CheckMark v-if="logSuccess"></CheckMark>
    <div v-else class="box" @keydown.enter="submitForm" :class="{active : fetchActive}">
    <form @submit.prevent>
        <h3>Login</h3>
        <div class="formBox">
            <label for="email">Email</label>
            <input type="email" v-model="formEmail">
        </div>
        <div class="formBox">
            <label for="pass">Password</label>
            <input type="password" v-model="formPassword">
        </div>
        <div class="toCreate">
          <p>Dont have an account?</p>
          <router-link to="/food_delivery/create">Create</router-link>
        </div>
        <div class="submitButton">
            <button type="button" @click="submitForm" >Submit!</button>
        </div>
    </form>
  </div>
</section>
    
</template>

<script setup>
    import { ref, reactive } from 'vue';
    import fetchService from '../fetchService/fetchService';
    import { useRouter } from 'vue-router';
    import AccountPopup from '../global/AccountPopup.vue';
    import { useStore } from 'vuex';
    import CheckMark from './component/CheckMark.vue';

    localStorage.removeItem('token')
    const store = useStore();
    const router = useRouter();
    const formEmail = ref('');
    const formPassword = ref('');
    const fetchActive = ref(false)
    //popup
    const icon = ref('');
    const popupTitle = ref('');
    const popupMessage = ref('');
    const border = ref('');
    const logSuccess = ref(null);

    const logFormData = reactive({
      email: {
        value: formEmail,
        invalid: false
      },
      password: {
        value: formPassword,
        invalid: false
      }
    });

    function validateInputs(){
      let inputInvalid = false;
      Object.keys(logFormData).forEach((key) => {
        if(logFormData[key].value === ''){
          icon.value = '❌'
          popupTitle.value = 'Neuspesno!'
          border.value = true;
          logFormData[key].invalid = true;
          inputInvalid = true;
        }else{
          logFormData[key].invalid = false;
        }
      })

      return inputInvalid
    }

    async function submitForm(){
        if(validateInputs()) return;

        fetchActive.value = true;
        const logAnswer = await fetchService.post('/restaurants/users/login', {email: formEmail.value, password: formPassword.value});
        localStorage.setItem('token', logAnswer.data.token);
        if(logAnswer.status === 'ok'){
          logSuccess.value = true;
          store.state.loggedUser = true
          setTimeout(() => {
            router.push('/food_delivery/restaurants');
          }, 1500);
        }else{
          icon.value = '❌'
          popupTitle.value = 'Neuspesno!'
          border.value = true;
          fetchActive.value = false;
        }
    }
    function closePopup(){
      popupTitle.value = ''
    }
</script>
<style scoped>
section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    z-index: 1
}
  .box{
    position: relative;
    width: 380px;
    height: 500px;
    background-color: #1c1c1c;
    border-radius: 8px;
    overflow: hidden;
    z-index: 10;
}
.box::before{
    content: '';
    position: absolute;
    top:-40%;
    left: -45%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, #45f3ff,#45f3ff);
    transform-origin: bottom right;
    animation: rotating 6s linear infinite
}
.box::after{
    content: '';
    position: absolute;
    top:-40%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, #45f3ff,#45f3ff);
    transform-origin: bottom right;
    animation: rotating 6s linear infinite;
    animation-delay: -3s;
}
form{
    position: absolute;
    background-color: #1f2833;
    border-radius: 5px;
    inset: 4px;
    padding: 60px 30px;
    display: flex;
    flex-direction: column;
    z-index: 10;
}
.active::before{
    animation: rotating 2s linear infinite
}
.active::after{
    animation: rotating 2s linear infinite;
    animation-delay: -3s;
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
  .formBox input{
    position: relative;
    width: 105%;
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
    color:#fff;

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

  button {
    border: none;
    outline: none;
    background: #45f3ff;
    padding: 11px 25px;
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1em;
    transition: 0.3s;
  }

  button:hover {
    background: #3ed6e0;
    letter-spacing: 5px;
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
    width: 95%;
  }
}
</style>