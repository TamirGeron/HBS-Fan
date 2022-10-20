<template>
  <section class="go-fa-login">
    <div class="text-center mb-3">
      <p>Sign in with:</p>
      <button
        @click="handleSignInFacebook"
        type="button"
        class="btn btn-link btn-floating mx-1"
      >
        <font-awesome-icon icon="fa-brands fa-facebook" class="fa-2xl" />
      </button>

      <button
        @click="handleSignInGoogle"
        type="button"
        class="btn btn-link btn-floating mx-1"
      >
        <font-awesome-icon icon="fa-brands fa-google" class="fa-2xl" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    async handleSignInGoogle() {
      await this.$store.dispatch({ type: "onGoSignup" });
    },
    async handleSignInFacebook() {
      await this.$store.dispatch({ type: "onFaSignup" });
    },
  },
};
</script>

<style>
</style>