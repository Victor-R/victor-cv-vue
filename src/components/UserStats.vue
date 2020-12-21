<template>
  <div class="flex flex-col text-center">
    <img
      :src="user.avatar_url"
      class="rounded-full avatar-image"
      alt="avatarImage"
    />
    <p class="text-lg font-semibold">Victor Henrique Ribeiro</p>
    <label class="text-sm">Desenvolvedor frontend</label>
    <div class="flex justify-center icons-container">
      <button @click="handleOpenInNewTab(user.html_url)">
        <GithubFilled />
      </button>
      <button @click="handleOpenInNewTab(user.linkedinUrl)">
        <LinkedinFilled />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import store, { User } from "@/store";
import GithubFilled from "@ant-design/icons-vue/GithubFilled";
import LinkedinFilled from "@ant-design/icons-vue/LinkedinFilled";
import { defineComponent, computed } from "vue";

export default defineComponent({
  components: {
    GithubFilled,
    LinkedinFilled
  },
  methods: {
    handleOpenInNewTab(link) {
      return window.open(link, "__blank");
    }
  },
  setup() {
    const user = computed(() => store.state.user as User);

    return { user };
  }
});
</script>

<style lang="scss" scoped>
.avatar-image {
  height: 250px;
  margin: 0 16px;
}
.icons-container {
  button:first-child {
    margin-right: 8px;
  }
}
</style>
