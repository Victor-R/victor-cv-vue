<template>
  <AvatarCard />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AvatarCard from "./AvatarCard.vue";

export default defineComponent({
  name: "App",
  components: {
    AvatarCard
  }
});
</script>

<style scoped></style>
