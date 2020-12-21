<template>
  <AvatarCard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AvatarCard from "@/components/AvatarCard.vue";
import store from "@/store";

export default defineComponent({
  name: "App",
  components: {
    AvatarCard
  },
  created() {
    store.dispatch("fetchUser");
  }
});
</script>

<style scoped></style>
