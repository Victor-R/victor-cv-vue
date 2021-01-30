<template>
  <div class="flex flex-col text-center">
    <img
      :v-if="user"
      :src="user && user.avatar_url"
      class="rounded-full avatar-image h-auto"
      alt="avatarImage"
    />
    <p class="text-lg font-roboto">Victor Henrique Ribeiro</p>
    <label class="text-sm font-roboto">Desenvolvedor frontend</label>
    <div class="flex justify-center icons-container">
      <button @click="handleOpenInNewTab(user.html_url)">
        <GithubFilled />
      </button>
      <button @click="handleOpenInNewTab(user.linkedinUrl)">
        <LinkedinFilled />
      </button>
    </div>
    <Skillbar />
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";

import GithubFilled from "@ant-design/icons-vue/GithubFilled";
import LinkedinFilled from "@ant-design/icons-vue/LinkedinFilled";
import Skillbar from "@/components/Skillbar.vue";

export default defineComponent({
  components: {
    GithubFilled,
    LinkedinFilled,
    Skillbar
  },
  setup() {
    const store = useStore();
    function handleOpenInNewTab(link: string) {
      return window.open(link, "__blank");
    }

    return { user: computed(() => store.state.user), handleOpenInNewTab };
  }
});
</script>

<style lang="scss" scoped>
.icons-container {
  font-size: 24px;
  button:first-child {
    margin-right: 8px;
  }
}
</style>
