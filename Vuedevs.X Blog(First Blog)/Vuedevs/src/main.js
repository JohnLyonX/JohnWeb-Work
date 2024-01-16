import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/bootstrap-4.3.1.css";
import "./assets/css/common.css";

createApp(App).use(router).mount("#app");
