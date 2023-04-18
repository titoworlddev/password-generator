<template>
  <div class="container">
    <h1 class="app-title">Password Generator</h1>

    <ResultContainer :password="password" />

    <form @submit.prevent="generate" class="password-form">
      <RangeSlider />
      <CheckBox label="Allow lowercase" id="hasLowercase" checked />
      <CheckBox label="Allow uppercase" id="hasUppercase" checked />
      <CheckBox label="Allow numbers" id="hasNumbers" checked />
      <CheckBox label="Allow symbols" id="hasSymbols" checked />
      <div class="btn-container">
        <button>Generate</button>
      </div>
    </form>
  </div>
</template>

<script>
  import RangeSlider from '@/components/RangeSlider.vue';
  import CheckBox from './components/CheckBox.vue';
  import { generatePassword } from './utils/generatePassword';
  import ResultContainer from './components/ResultContainer.vue';

  export default {
    components: {
      RangeSlider,
      CheckBox,
      ResultContainer
    },

    data() {
      return {
        password: ''
      };
    },

    methods: {
      generate(e) {
        const formData = Object.fromEntries(new FormData(e.target));
        this.password = generatePassword({ ...formData });
      }
    }
  };
</script>

<style scoped>
  .app-title {
    margin: 1rem 0;
    text-align: center;
  }
</style>
