<template>
  <div class="login">
    <h1 class="display-4 font-weight-bold text-center">התחברות</h1>
    <GoFaLogin />
    <p class="text-center">or:</p>
    <form @submit.prevent="onLogin">
      <div class="form-outline mb-4">
        <input
          type="email"
          id="form2Example11"
          class="form-control"
          placeholder="Email Address"
          v-model="email"
        />
        <label class="form-label" for="form2Example11">Email</label>
      </div>

      <div class="form-outline mb-4">
        <input
          type="password"
          id="form2Example22"
          class="form-control"
          v-model="password"
        />
        <label class="form-label" for="form2Example22">Password</label>
      </div>

      <div class="text-center pt-1 mb-5 pb-1">
        <button
          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
          type="submit"
        >
          Log in
        </button>
      </div>

      <div class="d-flex align-items-center justify-content-center pb-4">
        <p class="mb-0 me-2">Don't have an account?</p>
        <a href="#/signup" class="btn btn-outline-danger">Create new</a>
      </div>
    </form>
  </div>
</template>

<script>
// import { auth } from "../services/firebase.service";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoFaLogin from "../components/GoFaLogin.vue";
// const provider = new GoogleAuthProvider();

export default {
  name: "Login",
  // components: [GoFaLogin],
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async onLogin() {
      const curUser = {
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch({ type: "onLogin", curUser: curUser });
    },
  },
  components: { GoFaLogin },
};
</script>

<style>
.login {
  padding: 0.75rem;
  height: 100%;
  overflow: auto;
}

.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    #ee7724,
    #d8363a,
    #dd3675,
    #b44593
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}
</style>