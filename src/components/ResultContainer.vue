<template>
  <div class="result-container">
    <p class="result">
      {{ password }}
    </p>

    <button class="clipboard-button" @click="copyPassword">
      <CopyToClipboardIcon />
    </button>

    <div class="copy-feedback">Password copied!</div>
  </div>
</template>

<script>
  import CopyToClipboardIcon from './icons/CopyToClipboardIcon.vue';
  import { copyToClipboard } from '@/utils/copyToClipboard';

  export default {
    components: {
      CopyToClipboardIcon
    },

    props: {
      password: {
        type: String,
        required: true
      }
    },

    methods: {
      showCopyFeedback() {
        const copyFeedback = document.querySelector('.copy-feedback');
        copyFeedback.style.opacity = 1;
        setTimeout(() => {
          copyFeedback.style.opacity = 0;
        }, 3000);
      },
      copyPassword() {
        copyToClipboard();
        this.showCopyFeedback();
      }
    }
  };
</script>

<style scoped>
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
    overflow: auto;
    position: relative;
  }

  .result {
    /* To avoid text overflow */
    word-break: break-all;
  }

  .clipboard-button {
    padding: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0.2rem;
  }

  .copy-feedback {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0.4rem;
    color: var(--green-color);
    font-size: 0.8rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
</style>
