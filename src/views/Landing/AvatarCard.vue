<template>
  <Loading v-if="!user" class="loading-icon text-gray-700 text-8xl" spin />
  <div
    v-else
    class="avatar-card grid grid-cols-2 shadow-md h-auto rounded-xl  place-items-center "
    :class="theme === 'dark' ? 'bg-gray-700' : 'bg-white'"
  >
    <img
      :v-if="user"
      :src="user.avatar_url"
      class="rounded-full avatar-image col-span-full md:col-span-1"
      alt="avatarImage"
    />
    <div class="flex flex-col place-items-center col-span-full md:col-span-1">
      <h1 class="title text-4xl text-center font-roboto">
        Victor Henrique Ribeiro
      </h1>
      <router-link :to="{ name: 'Main' }">
        <button class="button-link shadow-lg font-roboto">
          {{ language === "pt-BR" ? "Mostrar mais" : "Show more" }}
          <DownOutlined
            width="24"
            height="24"
            class="down-icon text-sm"
          /></button
      ></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import DownOutlined from "@ant-design/icons-vue/DownOutlined";
import Loading from "@ant-design/icons-vue/LoadingOutlined";

export default defineComponent({
  components: {
    DownOutlined,
    Loading
  },
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.state.user),
      theme: computed(() => store.state.theme),
      language: computed(() => store.state.language)
    };
  }
});
</script>

<style scoped>
.avatar-image {
  height: 250px;
  margin: 0 16px;
}
.avatar-card {
  padding: 48px;
}
.title {
  margin-bottom: 16px;
}
.loading-icon {
  font-size: 64px;
}

.button-link {
  color: #fff;
  background-color: #22569f;
  height: 56px;
  font-size: 0.875rem;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 600;
  padding: 0 16px;
  text-transform: uppercase;
  width: fit-content;
  border-radius: 24px;
  display: flex;
  align-items: center;
}

.button-link:hover {
  background-color: #173c6f;
}

.down-icon {
  margin-left: 8px;
}
</style>
