<template>
  <label class="container-switch">
    <input
      v-bind="$attrs"
      class="input"
      type="checkbox"
      :checked="checked"
      @change="$emit('update:checked', $event.target.checked)"
    />
    <span
      class="switch"
      :class="theme === 'dark' ? 'switch-dark' : 'switch-light'"
    ></span>
    <span class="label font-roboto text-xs uppercase">{{ label }}</span>
  </label>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Switch",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const store = useStore();

    return {
      theme: computed(() => store.state.theme)
    };
  }
};
</script>

<style scoped>
.container-switch {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.label {
  margin-left: 12px;
  color: #1a202c;
  overflow: visible;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.switch {
  --switch-container-width: 50px;
  --switch-size: calc(var(--switch-container-width) / 2);
  /* Vertically center the inner circle */
  display: flex;
  align-items: center;
  position: relative;
  height: var(--switch-size);
  flex-basis: var(--switch-container-width);
  /* Make the container element rounded */
  border-radius: var(--switch-size);
  background-color: rgba(0, 0, 0, 0.25);
}
.switch::before {
  content: "";
  position: absolute;
  /* Move a little bit the inner circle to the right */
  left: 1px;
  height: calc(var(--switch-size) - 4px);
  width: calc(var(--switch-size) - 4px);
  /* Make the inner circle fully rounded */
  border-radius: 9999px;
}
.switch-dark::before {
  background-color: #424242;
}
.switch-light::before {
  background-color: #fff;
}
.input:checked + .switch {
  /* Teal background */
  background-color: rgba(0, 0, 0, 0.25);
}
.input:checked + .switch::before {
  border-color: rgba(0, 0, 0, 0.25);
  /* Move the inner circle to the right */
  transform: translateX(
    calc(var(--switch-container-width) - var(--switch-size))
  );
}
.switch {
  transition: background-color 0.25s ease-in-out;
  flex-shrink: 0;
}
.switch::before {
  transition: transform 0.375s ease-in-out;
}
</style>
