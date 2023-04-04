<template>
  <div class="container">
    <h1 class="app-title">Password Generator</h1>

    <div class="result-container">
      <p class="result">
        <!-- {{ password }} -->
      </p>
    </div>

    <form class="password-form">
      <CheckBox label="Custom password" id="custom-password" />
      <!-- Si custom-password esta checked entonces se vera esto y sino lo otro que es por defecto -->
      <!-- <input type="text" name="custom-password-input" id="custom-password-input" placeholder="Write your custom password">
        <CheckBox label="Fill spaces with symbols" id="fill-spaces" /> -->

      <RangeSlider />
      <CheckBox label="Allow uppercase" id="allow-uppercase" />
      <CheckBox label="Allow numbers" id="allow-numbers" />
      <CheckBox label="Allow symbols" id="allow-symbols" />

      <div class="btn-container">
        <button @click.prevent="">
          Generate
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import RangeSlider from '@/components/RangeSlider.vue'
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    RangeSlider,
    CheckBox
  },
}

</script>

<style scoped>
.app-title {
  margin: 1rem 0;
  text-align: center;
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