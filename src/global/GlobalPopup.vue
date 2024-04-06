<template>
    <section @click="$emit('close-popup')">
      <div class="popUpMain">
        <div class="content">
          <div class="title">
            <h1> 
              <slot name="title">
              </slot>
          </h1>           
          </div>
          <div class="message">
            <slot name="message">
            </slot>
          </div>
          <div class="button">
            <button @click="$emit('close-popup')">Okay!</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      position: fixed;
      top: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
    
    .popUpMain {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      align-content: center;
      color:#fff;
      z-index: 99999;

    }
  
    .content {
      width: 355px;
      background-color: #1f2833;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
      margin: 20px;
      padding: 20px;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid #66f1f6;
      box-shadow: 0px 0px 10px #66f1f6;
    }
  
    .title {
      margin-bottom: 20px;
      width: 50%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .title h1{
      border-bottom: 1px solid #66f1f6;
      font-size: 40px;
    }
    .message {
      padding: 10px 0;
    }
  
    .button {
      width: 100%;
      padding: 10px 0;

    }
    .button button{
        border: none;
        border-radius: 10px;
        background-color: rgba(69, 162, 158, 0.6);
        padding: 10px 0;
        color:#fff;
        font-size: 15px;
        letter-spacing: 1.2px;
        font-weight: 700;
        transition: 0.3s;
        width: 100%;
    }
    .button button:hover{
        background-color: rgba(124, 232, 227, 0.6);
        letter-spacing: 5px;
        cursor: pointer;
    }
  </style>
  