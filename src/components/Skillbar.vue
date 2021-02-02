<template>
  <div
    v-for="skill in skillList"
    :key="skill.name"
    class="flex flex-col place-items-start"
  >
    <label class="font-roboto uppercase title-label"> {{ skill.name }}: </label>
    <div class="barwrapper w-full rounded-full">
      <div
        class="inline-flex overflow-hidden rounded-full justify-between section-title"
        :style="{ width: skill.value + '%' }"
      >
        <ThunderboltFilled
          class="text-black opacity-20 text-lg"
          v-for="n in Math.ceil(skill.value / 10)"
          :key="n"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import ThunderboltFilled from "@ant-design/icons-vue/ThunderboltFilled";

export default defineComponent({
  components: {
    ThunderboltFilled
  },
  setup() {
    const store = useStore();
    const language = computed(() => store.state.language);

    if (language.value === "pt-BR") {
      return {
        skillList: [
          { name: "Github", value: 80 },
          {
            name: "Inglês",
            value: 95
          },
          { name: "React+Redux", value: 85 },
          { name: "Javascript", value: 90 },
          { name: "Typescript", value: 75 },
          { name: "Vue+Vuex", value: 60 },
          { name: "Express", value: 40 },
          { name: "React Native", value: 80 },
          { name: "Unity", value: 30 }
        ].sort((a, b) => (a.value < b.value ? 1 : -1))
      };
    }

    return {
      skillList: [
        { name: "Github", value: 80 },
        {
          name: "English",
          value: 95
        },
        { name: "React+Redux", value: 85 },
        { name: "Javascript", value: 90 },
        { name: "Typescript", value: 75 },
        { name: "Vue+Vuex", value: 60 },
        { name: "Express", value: 40 },
        { name: "React Native", value: 80 },
        { name: "Unity", value: 30 }
      ].sort((a, b) => (a.value < b.value ? 1 : -1))
    };
  }
});
</script>

<style scoped>
.barwrapper {
  border: 1px solid rgb(107, 105, 105);
  display: inline-flex;
}
.title-label {
  font-size: 0.75rem;
  line-height: 2.66;
  letter-spacing: 0.08333em;
  text-transform: uppercase;
}
</style>
