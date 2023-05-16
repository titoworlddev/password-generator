<template>
  <div class="checkbox">
    <p>{{ label }}</p>

    <label :for="id">
      <div class="switch">
        <input type="checkbox" :name="id" :id="id" :checked="checked" />
        <div class="switch__circle"></div>
      </div>
    </label>
  </div>
</template>

<script setup>
  import './CheckBox.css';

  defineProps({
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    }
  });
</script>
