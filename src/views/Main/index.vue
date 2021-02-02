<template>
  <div
    class="container mx-auto mb-6 shadow-md h-auto rounded-xl flex flex-col"
    :class="theme === 'dark' ? 'bg-gray-700' : 'bg-white'"
  >
    <router-link
      :to="{ name: 'Landing' }"
      class="back-link flex place-content-center"
    >
      <UpOutlined
        class="text-sm"
        :class="theme === 'dark' ? 'text-white' : 'text-black'"
      />
    </router-link>
    <Loading v-if="!user" class="loading-icon text-8xl" spin />
    <div v-else class="grid grid-cols-12 gap-0 p-8">
      <UserStats class="col-span-full md:col-span-3 mx-4" />
      <div class="col-span-full md:col-span-9 mt-6 md:mt-0">
        <SectionText
          v-for="{ title, content } in sections"
          :key="title"
          :title="language === 'pt-BR' ? title.ptBR : title.enUS"
          :content="language === 'pt-BR' ? content.ptBR : content.enUS"
        />
        <h3
          class="text-center text-5xl text-white mb-2 section-title font-lobster"
        >
          {{ language === "pt-BR" ? "Projetos Recentes" : "Recent Projects" }}
        </h3>
        <button
          @click="handleOpenInNewTab(user.html_url)"
          class="font-roboto transition-button font-bold text-white uppercase mt-2 bg-button hover:bg-buttonhover shadow w-full py-1.5 px-4 text-sm tracking-wider rounded"
        >
          {{
            language === "pt-BR"
              ? "Acesse minha página do Github"
              : "Visit my github page"
          }}
          <GithubFilled class="text-3xl" />
        </button>
        <div class="overflow-y-auto h-96 mt-2">
          <button
            class="w-full text-left py-2.5 px-4 hover:bg-black hover:bg-opacity-5"
            v-for="repo in reposList"
            @click="handleOpenInNewTab(repo.html_url)"
            :key="repo.html_url"
          >
            <span class="text-base ">{{ repo.name }}</span>
            <br />
            <span class="text-sm text-gray-400">{{
              repo.description ? repo.description : "Sem descrição"
            }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import UpOutlined from "@ant-design/icons-vue/UpOutlined";
import UserStats from "./UserStats.vue";
import SectionText from "@/components/SectionText.vue";
import Loading from "@ant-design/icons-vue/LoadingOutlined";
import GithubFilled from "@ant-design/icons-vue/GithubFilled";
import { useStore } from "vuex";
import Sections from "./sections";

export default defineComponent({
  components: {
    UserStats,
    UpOutlined,
    SectionText,
    GithubFilled,
    Loading
  },
  setup() {
    const store = useStore();

    store.dispatch("fetchRepositories");

    function handleOpenInNewTab(link: string) {
      return window.open(link, "__blank");
    }

    return {
      sections: Sections,
      handleOpenInNewTab,
      user: computed(() => store.state.user),
      language: computed(() => store.state.language),
      theme: computed(() => store.state.theme),
      reposList: computed(() => store.state.reposList)
    };
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
.transition-button {
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.back-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
