<template>
  <div class="range-slider">
    <p class="length-container">Password length
      <span class="length-container__value">0</span>
    </p>
    <input class="range-slider__range" type="range" value="100" min="0" max="500">
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.length-container {
  display: flex;
  justify-content: space-between;
}

.range-slider {
  /* // Base Colors */
  --shade-10: var(--black-color);
  --shade-1: var(--white-color);
  --shade-0: var(--white-color);
  --teal: teal;

  /* // Range Slider */
  --range-handle-color: var(--shade-10);
  --range-handle-color-hover: var(--teal);
  --range-handle-size: 20px;

  --range-track-color: var(--shade-1);
  --range-track-height: 10px;

  --range-label-color: var(--shade-10);
  --range-label-width: 60px;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.range-slider__range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: var(--range-track-height);
  border-radius: 5px;
  background: var(--range-track-color);
  outline: none;
  padding: 0;
  margin: 0;
}

/* // Range Handle */
.range-slider__range::-webkit-slider-thumb {
  appearance: none;
  width: var(--range-handle-size);
  height: var(--range-handle-size);
  border-radius: 50%;
  background: var(--range-handle-color-hover);
  cursor: pointer;
  transition: background 0.15s ease-in-out;


}

.range-slider__range::-webkit-slider-thumb:hover {
  background: var(--range-handle-color);
}


.range-slider__range:active::-webkit-slider-thumb {
  background: var(--range-handle-color);
}

.range-slider__range::-moz-range-thumb {
  width: var(--range-handle-size);
  height: var(--range-handle-size);
  border: 0;
  border-radius: 50%;
  background: var(--range-handle-color);
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}

.range-slider__range::-moz-range-thumb:hover {
  background: var(--range-handle-color-hover);
}


.range-slider__range:active::-moz-range-thumb {
  background: var(--range-handle-color-hover);
}

/* // Focus state */
.range-slider__range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px var(--shade-0), 0 0 0 6px var(--teal);
}

/* // Firefox Overrides */
::-moz-range-track {
  background: var(--range-track-color);
  border: 0;
}

input::-moz-focus-inner,
input::-moz-focus-outer {
  border: 0;
}
</style>