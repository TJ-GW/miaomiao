import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import VueCompositionApi from "@vue/composition-api";
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store";
import "./router/premit";
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
