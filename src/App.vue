<template>
  <div class="container">
    <h1 class="app-title">Password Generator</h1>

    <div class="result-container">
      <p class="result">
        <!-- {{ password }} -->
      </p>
    </div>

    <form class="password-form">
      <div class="range-slider">
        <p class="length-container">Password length
          <span class="length-container__value">0</span>
        </p>
        <input class="range-slider__range" type="range" value="100" min="0" max="500">
      </div>

      <input type="text" name="custom-password-input" id="custom-password-input" placeholder="Write your custom password">

      <label class="checkbox" for="allow-uppercase-checkbox">Allow uppercase
        <input type="checkbox" name="allow-uppercase-checkbox" id="allow-uppercase-checkbox">
      </label>

      <label class="checkbox" for="allow-numbers-checkbox">Allow numbers
        <input type="checkbox" name="allow-numbers-checkbox" id="allow-numbers-checkbox">
      </label>

      <label class="checkbox" for="allow-symbols-checkbox">Allow symbols
        <input type="checkbox" name="allow-symbols-checkbox" id="allow-symbols-checkbox">
      </label>

      <div class="btn-container">
        <button @click.prevent="">
          Generate
        </button>
      </div>
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
  position: relative;
}

.slider-bg {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  z-index: -1;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  height: 15px;
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

.length-container {
  display: flex;
  justify-content: space-between;
}


.result-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
  border-radius: 8px;
  width: 100%;
  height: 100px;
  margin: 2rem 0;
}
</style>