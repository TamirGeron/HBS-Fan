import { createStore } from "vuex";
import song from "./modules/song.js";
import user from "./modules/user.js";

const storeOptions = {
  strict: true,
  modules: {
    song,
    user,
  },
};

const store = createStore(storeOptions);
export default store;
