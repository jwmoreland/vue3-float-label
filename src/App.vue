<template> 

  <float-label :label="'This is label text'">
    <input id="justin-id" type="text" placeholder="This is placeholder text">
  </float-label>

  <float-label label="This has no placeholder but a :label prop">
    <input type="text">
  </float-label>

  <float-label>
    <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="This is a text area"></textarea>
  </float-label>

  <float-label :label="'Select a big number'">
    <select name="justins-select" id="justins-select">
      <option value="" disabled="disabled" selected="">Select a number</option>
      <option value="1">one</option>
      <option value="2">two</option>
      <option value="3">three</option>
      <option value="4">four</option>
      <option value="5">five</option>
    </select>
  </float-label>

  <float-label>
    <input type="text" v-model="dynamicText" placeholder="Pre-filled Text">
  </float-label>
<float-label :label="'This is a <div> with a red border'">
  <div style="padding: 24px; border: 1px solid red;"></div>
</float-label>

</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { ref } from 'vue';
import FloatLabel from './components/FloatLabel.vue'

let dynamicText = ref('This is existing v-model text');

</script>


