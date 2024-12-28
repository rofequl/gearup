import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {Tooltip} from "bootstrap";

import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus";

//imports for app initialization
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { initKtIcon } from "@/core/plugins/keenthemes";

import "@/core/plugins/prismjs";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus);

initKtIcon(app);
initVeeValidate();

app.directive("tooltip", (el) => {
    new Tooltip(el);
});

app.mount('#app')
