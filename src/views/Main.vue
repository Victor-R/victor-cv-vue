<template>
  <div
    class="container mx-auto bg-gray-700 shadow-md h-auto rounded-xl flex flex-col place-items-center col-lg-10"
  >
    <router-link
      :to="{ name: 'Landing' }"
      class="back-link flex place-content-center"
    >
      <UpOutlined />
    </router-link>
    <div>
      <UserStats />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UpOutlined from "@ant-design/icons-vue/UpOutlined";
import UserStats from "@/components/UserStats.vue";

export default defineComponent({
  components: {
    UserStats,
    UpOutlined
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.back-link {
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 4px 0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 0.75rem;
}
.back-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
