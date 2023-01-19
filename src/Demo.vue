<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import FloatLabel from './components/FloatLabel.vue'

let dynamicText = ref('This is existing v-model text');

</script>

<template> 

  <float-label>
    <input id="justin-id" type="text" placeholder="Name
    ">
  </float-label>

  <float-label>
    <input type="text" placeholder="Email">
  </float-label>

  <float-label label="Message">
    <textarea name="textarea" id="textarea" rows="3" placeholder="Type Your Message"></textarea>
  </float-label>

  <float-label :label="'This is a <div> with red border'">
    <div style="padding: 24px; border: 1px solid red;"></div>
  </float-label>

</template>

