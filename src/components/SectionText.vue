<template>
  <h3 class="text-center text-5xl mb-2 text-white section-title font-lobster">
    {{ title }}
  </h3>
  <p class="text-center mb-2 font-abeezee" v-html="content" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: { type: String, required: true },
    content: { type: String, default: "" }
  }
});
</script>

<style scoped></style>
