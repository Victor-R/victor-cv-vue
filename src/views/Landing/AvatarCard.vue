<template>
  <Loading v-if="!user" class="loading-icon text-gray-700 text-8xl" spin />
  <div
    v-else
    class="avatar-card bg-gray-700 shadow-md h-auto rounded-xl flex flex-row place-items-center "
  >
    <img
      :v-if="user"
      :src="user.avatar_url"
      class="rounded-full avatar-image"
      alt="avatarImage"
    />
    <div class="flex flex-col place-items-center">
      <h1 class="text-white title text-4xl font-roboto">
        Victor Henrique Ribeiro
      </h1>
      <router-link :to="{ name: 'Main' }">
        <button class="button-link shadow-lg font-roboto">
          Mostrar mais
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
      user: computed(() => store.state.user)
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
