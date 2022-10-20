import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFacebook, faGoogle, faHeart, faHeartCircleCheck);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
