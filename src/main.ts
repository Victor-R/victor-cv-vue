import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "./assets/css/fonts.css";
import "animate.css";
import store from "./store";
import router from "./router";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
