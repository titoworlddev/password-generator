<template>
  <div class="container">
    <h1 class="app-title">Password Generator</h1>

    <ResultContainer :password="password" />

    <CheckBox
      class="custom-password"
      label="Custom password"
      id="isCustomPassword"
      @change="isCustomPassword = !isCustomPassword"
    />
    <hr />

    <form
      v-if="isCustomPassword"
      @submit.prevent="generateCustomPassword"
      class="custom-password-form"
    >
      <label class="custom-password-label" for="customText"
        >Custom text
        <input
          type="text"
          name="customText"
          id="customText"
          placeholder="Here your custom password..."
        />
      </label>
      <CheckBox label="Fill spaces with symbols" id="fillWithSymbols" checked />
      <div class="btn-container">
        <button>Generate</button>
      </div>
    </form>

    <form v-else @submit.prevent="generatePassword" class="password-form">
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
  import CheckBox from './components/CheckBox/CheckBox.vue';
  import {
    generatePassword,
    generateCustomPassword
  } from './utils/generatePassword';
  import ResultContainer from './components/ResultContainer.vue';

  export default {
    components: {
      RangeSlider,
      CheckBox,
      ResultContainer
    },

    data() {
      return {
        password: '',
        isCustomPassword: false
      };
    },

    methods: {
      generatePassword(e) {
        const formData = Object.fromEntries(new FormData(e.target));
        if (
          formData.hasLowercase === 'on' ||
          formData.hasNumbers === 'on' ||
          formData.hasSymbols === 'on' ||
          formData.hasUppercase === 'on'
        )
          this.password = generatePassword({ ...formData });
        else this.password = 'Please select at least one option!';
      },
      generateCustomPassword(e) {
        const formData = Object.fromEntries(new FormData(e.target));
        this.password = generateCustomPassword({ ...formData });
      }
    }
  };
</script>

<style scoped>
  .app-title {
    margin: 1rem 0;
    text-align: center;
  }

  hr {
    margin: 1.5rem 1rem;
    border: 1px solid var(--hr-color);
  }

  .custom-password-label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
