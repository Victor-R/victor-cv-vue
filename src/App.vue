<template>
  <div
    class="flex flex-col"
    :class="theme === 'dark' ? 'text-white' : 'text-black'"
  >
    <div class="flex flex-row justify-around py-2">
      <div class="flex flex-row items-center">
        <IconEmpire
          v-if="theme === 'dark'"
          class="text-2xl mr-2"
          :class="theme === 'dark' ? 'text-gray-700' : 'text-white'"
        />
        <font-awesome-icon
          v-else
          class="text-3xl mr-2"
          :class="theme === 'dark' ? 'text-gray-700' : 'text-white'"
          :icon="faJedi"
        />
        <Switch :checked="theme === 'dark'" @change="handleToggleTheme" />
      </div>
      <div class="flex flex-row items-center">
        <font-awesome-icon
          class="text-3xl mr-2"
          :class="theme === 'dark' ? 'text-gray-700' : 'text-white'"
          :icon="faLanguage"
        />
        <Switch
          :checked="language === 'pt-BR'"
          :label="language"
          @change="handleToggleLanguage"
        />
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Switch from "./components/Switch.vue";
import store from "@/store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLanguage, faJedi } from "@fortawesome/free-solid-svg-icons";
import IconEmpire from "@/assets/svg/IconEmpire.vue";

export default defineComponent({
  name: "App",
  components: { Switch, FontAwesomeIcon, IconEmpire },
  beforeMount() {
    if (!store.state.user) {
      store.dispatch("fetchUser");
    }
  },
  setup() {
    const language = computed(() => store.state.language);
    const theme = computed(() => store.state.theme);

    function handleToggleLanguage() {
      store.dispatch("toggleLanguage");
    }

    function handleToggleTheme() {
      store.dispatch("toggleTheme");
    }

    return {
      language,
      theme,
      handleToggleLanguage,
      handleToggleTheme,
      faLanguage,
      faJedi
    };
  }
});
</script>

<style lang="postcss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(-45deg, #9c27b0, #3f51b5, #009688, #4caf50);
  -webkit-animation: Gradient 10s ease infinite;
  -moz-animation: Gradient 10s ease infinite;
  animation: Gradient 10s ease infinite;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-size: 400% 400%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.light-text {
  color: #fff;
}

.dark-text {
  color: #000;
}

.section-title {
  background: linear-gradient(-45deg, #9c27b0, #3f51b5, #009688, #4caf50);
  -webkit-animation: Gradient 10s ease infinite;
  -moz-animation: Gradient 10s ease infinite;
  animation: Gradient 10s ease infinite;
  border-radius: 10px;
  background-size: 400% 400%;
}

.scale-enter-active {
  -webkit-animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.scale-leave-active {
  transition: opacity 0.3s;
  -webkit-animation: scale-out-center 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: scale-out-center 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.scale-enter,
.scale-leave-to {
  opacity: 0;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
}
@keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
}
</style>
