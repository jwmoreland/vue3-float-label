<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

// import HelloWorld from './components/HelloWorld.vue'
import FloatLabel from './components/FloatLabel.vue'
</script>

<template> 

  <float-label :label="'This is label text'">
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
    <option value="" disabled="disabled" selected>Select a number</option>
    <option value="1">one</option>
    <option value="2">two</option>
    <option value="3">three</option>
    <option value="4">four</option>
    <option value="5">five</option>
  </select>
</float-label>

<float-label :label="'this is a box'">
  <div style="padding: 24px; border: 1px solid red;"></div>
</float-label>

</template>

<style>
:root {
    --vfl-y-padding: 16px;
    --vfl-x-padding: 16px;

    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color: #213547;
    background-color: #ffffff;
    background-color: #FFF;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
}
.float-label {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}
.float-label__label {
    transition: all .2s;
    opacity: 1;
    left: calc(var(--vfl-x-padding) -2px);
}
.float-label--fade-anim .float-label__label {
    opacity: 0;
}

.float-label input, .float-label textarea, .float-label select {
    padding: var(--vfl-y-padding) var(--vfl-x-padding);
    width: 100%;
    font-size: 16px;
    line-height: 20px;
}

.float-label input::placeholder, .float-label > textarea::placeholder, .float-label select::placeholder, .float-label label {
    position: absolute;
    top: var(--vfl-y-padding); 
    left: var(--vfl-x-padding);
    display: block;
    line-height: 24px;
    font-weight: 400;
}
.float-label input::placeholder, .float-label textarea::placeholder {
    color: transparent;
    transition: opacity 0.2s;
}
.float-label--fade-anim input::placeholder, .float-label--fade-anim textarea::placeholder {
    color: purple;
}
.float-label--fixed .float-label__label, .float-label--on-focus input:focus ~ .float-label__label {
    transform-origin: top left;
    transform: scale(.85) translateY(-18px);
    opacity: 1;
    pointer-events: none;
}
.float-label--fixed input::placeholder, .float-label--fixed textarea::placeholder {
    opacity: 0;
}
</style>

