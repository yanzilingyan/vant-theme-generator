import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import { Button, Divider } from "vant";

Vue.use(Button);
Vue.use(Divider);

new Vue({
  render: h => h(App)
}).$mount("#app");
