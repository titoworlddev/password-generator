<template>
  <div class="container">
    <h1 class="app-title">Password Generator</h1>

    <div class="result-container">
      <p class="result">
        <!-- {{ password }} -->
      </p>
    </div>

    <form class="password-form">
      <RangeSlider />

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

<script>
import RangeSlider from '@/components/RangeSlider.vue'

export default {
  components: {
    RangeSlider,
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