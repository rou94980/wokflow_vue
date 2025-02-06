import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia";
// css-------
import "./styles/style.css";
//ElementPlus UI----
import ElementPlus from "element-plus";
import zhTw from "element-plus/es/locale/lang/zh-tw"; //繁體中文
import en from "element-plus/es/locale/lang/en";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css"; //佈局樣式
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; //icon

const app = createApp(App);
app
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhTw,
  })
  .use(router)
  .mount("#app");
