<template>
  <div class="container">
    <h1 class="app-title">Password Generator</h1>

    <div class="result-container">
      <p class="result">
        <!-- {{ password }} -->
      </p>
    </div>

    <form class="password-form">
      <p class="length-value-text">Password length
        <span class="value">16</span>
      </p>
      <div class="slider-container">
        <input class="slider" type="range" min="4" max="32" value="16">
      </div>

      <input type="text" name="custom-password-input" id="custom-password-input" placeholder="Write your password">

      <label class="checkbox" for="allow-uppercase-checkbox">Allow uppercase
        <input type="checkbox" name="allow-uppercase-checkbox" id="allow-uppercase-checkbox">
      </label>

      <label class="checkbox" for="allow-numbers-checkbox">Allow numbers
        <input type="checkbox" name="allow-numbers-checkbox" id="allow-numbers-checkbox">
      </label>

      <label class="checkbox" for="allow-symbols-checkbox">Allow symbols
        <input type="checkbox" name="allow-symbols-checkbox" id="allow-symbols-checkbox">
      </label>

      <button @click.prevent="">
        Generate
      </button>
    </form>
  </div>
</template>

<script></script>

<style scoped>
.app-title {
  margin: 1rem 0;
  text-align: center;
}

.slider-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}

.length-value-text {
  display: flex;
  justify-content: space-between;
}


.result-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 8px;
}
</style>