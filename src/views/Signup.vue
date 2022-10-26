<template>
  <div class="login">
    <h1 class="display-4 font-weight-bold text-center">הרשמה</h1>
    <GoFaLogin />
    <p class="text-center">or:</p>
    <form @submit.prevent="onRegister">
      <div class="form-outline mb-4">
        <input
          type="text"
          id="form2Example13"
          class="form-control"
          v-model="fullName"
          placeholder="Full Name"
        />
        <label class="form-label" for="form2Example13">Full Name</label>
      </div>

      <div class="form-outline mb-4">
        <input
          type="email"
          id="form2Example11"
          class="form-control"
          v-model="email"
          placeholder="Email address"
        />
        <label class="form-label" for="form2Example11">Email</label>
      </div>

      <div class="form-outline mb-4">
        <input
          type="password"
          id="form2Example22"
          class="form-control"
          v-model="password"
          placeholder="Password"
        />
        <label class="form-label" for="form2Example22">Password</label>
      </div>

      <div class="text-center pt-1 mb-5 pb-1">
        <button
          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
          type="submit"
        >
          Signup
        </button>
      </div>

      <div class="d-flex align-items-center justify-content-center pb-4">
        <p class="mb-0 me-2">Do have an account?</p>
        <a href="#/login" class="btn btn-outline-danger">Login</a>
      </div>
    </form>
  </div>
</template>

<script>
import GoFaLogin from "@/components/GoFaLogin.vue";
export default {
  // components: [GoFaLogin],
  name: "Signup",
  data() {
    return { email: "", password: "", fullName: "" };
  },
  methods: {
    async onRegister() {
      const curUser = {
        email: this.email,
        password: this.password,
        fullName: this.fullName,
      };
      await this.$store.dispatch({ type: "onSignup", curUser: curUser });
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
</style>