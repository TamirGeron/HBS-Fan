import router from "@/router";
import { usersService } from "@/services/users.service";

export default {
  state: {
    user: null,
  },
  mutations: {
    loginUser(state, { user }) {
      state.user = user;
    },
  },
  actions: {
    async loadUser({ commit }) {
      const user = await usersService.getLoggedinUser();
      commit({ type: "loginUser", user: user });
    },
    async onSignup({ commit }, { curUser }) {
      try {
        const loginUser = await usersService.save(curUser);
        commit({ type: "loginUser", user: loginUser });
        if (loginUser) router.push("/");
      } catch (error) {
        throw error;
      }
    },
    async onGoSignup({ commit }) {
      try {
        const loginUser = await usersService.googleLogin();
        commit({ type: "loginUser", user: loginUser });
        if (loginUser) router.push("/");
      } catch (error) {
        throw error;
      }
    },
    async onFaSignup({ commit }) {
      try {
        const loginUser = await usersService.facebookLogin();
        commit({ type: "loginUser", user: loginUser });
        if (loginUser) router.push("/");
      } catch (error) {
        throw error;
      }
    },
    async onLogin({ commit }, { curUser }) {
      try {
        const loginUser = await usersService.login(curUser);
        commit({ type: "loginUser", user: loginUser });
        if (loginUser) router.push("/");
      } catch (error) {
        throw error;
      }
    },
    async onLogout({ commit }) {
      try {
        await usersService.logout();
        commit({ type: "loginUser", user: null });
      } catch (error) {
        throw error;
      }
    },
    async updateUser({ commit }, { newUser }) {
      try {
        await usersService.updateUser(newUser);
        commit({ type: "loginUser", user: newUser });
      } catch (error) {
        throw error;
      }
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
};
