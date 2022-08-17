<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

// import HelloWorld from './components/HelloWorld.vue'
import FloatLabel from './components/FloatLabel.vue'
</script>

<template> 

  <float-label :label="'This is label text'" :fixed="true">
    <input id="justin-id" type="text" placeholder="This is placeholder text">
  </float-label>

  <float-label label="This has no placeholder">
    <input type="text">
  </float-label>

  <float-label>
    <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="This is a text area"></textarea>
  </float-label>

<float-label>
  <select name="justins-select" id="justins-select">
    <option value="" disabled="disabled" selected="selected">Select a number</option>
    <option value="1">one</option>
    <option value="2">two</option>
    <option value="3">three</option>
    <option value="4">four</option>
    <option value="5">five</option>
  </select>
</float-label>

</template>

