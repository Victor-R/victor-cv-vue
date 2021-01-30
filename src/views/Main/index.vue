<template>
  <div
    class="container mx-auto my-10 bg-gray-700 shadow-md h-auto rounded-xl flex flex-col"
  >
    <router-link
      :to="{ name: 'Landing' }"
      class="back-link flex place-content-center"
    >
      <UpOutlined class="text-sm" />
    </router-link>
    <Loading v-if="!user" class="loading-icon text-white text-8xl" spin />
    <div v-else class="grid grid-cols-12 gap-0 p-8">
      <UserStats class="col-span-full md:col-span-3 mx-4" />
      <div class="col-span-full md:col-span-9 mt-6 md:mt-0">
        <SectionText
          v-for="{ title, content } in sections"
          :key="title"
          :title="title"
          :content="content"
        />
        <h3 class="text-center text-5xl mb-2 section-title font-lobster">
          Projetos Recentes
        </h3>
        <button
          @click="handleOpenInNewTab(user.html_url)"
          class="font-roboto transition-button font-bold uppercase mt-2 bg-button hover:bg-buttonhover shadow w-full py-1.5 px-4 text-sm tracking-wider rounded"
        >
          Acesse minha página do Github
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

interface Section {
  title: string;
  content: string;
}

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
    const sections: Section[] = [
      {
        title: "Sobre mim",
        content: `Olá meu nome é Victor, sou desenvolvedor de software atualmente trabalhando como desenvolvedor frontend. 
          Desde que realizei meu Técnico em Informática, me apaixonei
          por programação. Formado em Ciência da Computação pela
          UNESP. Tenho como objetivo de vida sempre continuar aprendendo coisas novas, ultimamente tenho utilizado mais ferramentas como: React, React Redux, React
          Native, Vue (2 e 3), Vuex, Unity.<br><br>
          Profissionalmente, atuei em projetos internacionais, com interações com pessoas de vários países como: Estados Unidos, Suécia, França e Índia. Atualmente estou
          trabalhando em projetos concentrados aqui na América Latina com empresas de diversos setores.
          <br><br>Você pode acompanhar alguns dos meus projetos na seção "Projetos Recentes". *Participo de outros projetos privados que não estão
          listados aqui`
      },
      {
        title: "Formação",
        content: `Bacharelado em Ciência da Computação – Junho, 2019 Universidade Estadual Paulista – UNESP – Rio Claro, SP<br>
Curso Técnico em Tecnologia da Informação – Dezembro, 2012 ETEC – Escola Técnica Dep. Ary de Camargo Pedroso – Piracicaba, SP`
      },
      {
        title: "Experiência Profissional",
        content: `<li>GAtec S/A – Gestão Agroindustrial; Agosto/2016 até Dezembro/2016; Infra - Estágio</li>
                  <li>CENTRUS – Central do SUS – Prefeitura de Piracicaba; Junho/2015 até Julho/2016; Infra - Estágio</li>
                  <li>Icaro Tech – Serviços e Comércio; Janeiro/2017 até Junho/2017; Analista de Suporte - Estágio</li>
                  <li>DEDINI – Indústrias de Base; Agosto/2017 – até Agosto/2019; Analista de Sistema Júnior</li>
                  <li><b>Daitan Group; Agosto/2019 – até o momento; Desenvolvedor Front-end</b></li>`
      }
    ];

    function handleOpenInNewTab(link: string) {
      return window.open(link, "__blank");
    }

    return {
      sections,
      handleOpenInNewTab,
      user: computed(() => store.state.user),
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
