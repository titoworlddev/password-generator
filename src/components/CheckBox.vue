<template>
  <div class="checkbox">
    <p>{{ label }}</p>

    <label :for="id">
      <div class="switch">
        <input type="checkbox" :name="id" :id="id" :checked="checked">
        <div class="switch__circle"></div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
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
  }
}
</script>

<style scoped>
.checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkbox input[type="checkbox"] {
  display: none;
}

p {
  cursor: default;
}

.checkbox .switch {
  cursor: pointer;
  background-color: var(--white-color);
  width: 40px;
  height: 16px;
  border-radius: 8px;
  padding: 2px;
}

.checkbox .switch__circle {
  background-color: var(--black-color);
  width: 12.5px;
  height: 100%;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.checkbox input:checked+.switch__circle {
  background-color: teal;
  margin-left: calc(100% - 12.5px);
}
</style>