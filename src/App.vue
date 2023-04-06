<template>
  <div class="container">
    <h1 class="app-title">Password Generator</h1>

    <div class="result-container">
      <p class="result">
        {{ password }}
      </p>
    </div>

    <form @submit.prevent="generate" class="password-form">
      <!-- Si custom-password esta checked entonces se vera esto y sino lo otro que es por defecto -->
      <!-- <CheckBox label="Custom password" id="custom-password" /> -->
      <!-- <input type="text" name="custom-password-input" id="custom-password-input" placeholder="Write your custom password">
        <CheckBox label="Fill spaces with symbols" id="fill-spaces" /> -->

      <RangeSlider />
      <CheckBox label="Allow lowercase" id="hasLowercase" checked />
      <CheckBox label="Allow uppercase" id="hasUppercase" checked />
      <CheckBox label="Allow numbers" id="hasNumbers" checked />
      <CheckBox label="Allow symbols" id="hasSymbols" checked />

      <div class="btn-container">
        <button>
          Generate
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import RangeSlider from '@/components/RangeSlider.vue'
import CheckBox from './components/CheckBox.vue';
import { generatePassword } from './utils/generatePassword';

export default {
  components: {
    RangeSlider,
    CheckBox
  },

  data() {
    return {
      password: ''
    }
  },

  methods: {
    generate(e) {
      const formData = Object.fromEntries(new FormData(e.target));
      this.password = generatePassword({ ...formData });
    }
  }
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
  padding: 1rem;
  color: var(--black-color);
  font-weight: 700;
}

.result {
  /* To avoid text overflow */
  word-break: break-all;
}
</style>