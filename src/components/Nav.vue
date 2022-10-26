<template>
  <nav class="navbar nav">
    <div class="container-fluid">
      <h1>HBS-Fan</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        @click="openNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel" v-if="user">
            {{ user.fullName }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li
              :class="{ active: songs }"
              class="nav-item"
              data-bs-dismiss="offcanvas"
            >
              <a class="nav-a" aria-current="page" href="#">שירים</a>
            </li>
            <li
              :class="{ active: login }"
              class="nav-item"
              v-if="!user"
              data-bs-dismiss="offcanvas"
            >
              <a class="nav-a" href="#/login">התחברות</a>
            </li>
            <li
              :class="{ active: signup }"
              class="nav-item dropdown"
              v-if="!user"
              data-bs-dismiss="offcanvas"
            >
              <a class="nav-a" href="#/signup" role="button"> הרשמה </a>
            </li>
            <li
              class="nav-item dropdown"
              v-if="user"
              data-bs-dismiss="offcanvas"
            >
              <a class="nav-a" @click="onSignout">התנתקות</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      songs: false,
      login: false,
      signup: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    async onSignout() {
      await this.$store.dispatch({ type: "onLogout" });
    },
    openNav() {
      const web = window.location.href.split("/").pop();
      this.login = false;
      this.signup = false;
      this.songs = false;
      if (web === "login") this.login = true;
      else if (web === "signup") this.signup = true;
      else this.songs = true;
    },
  },
};
</script>

<style>
.nav {
  width: 100%;
}

.offcanvas-body,
.offcanvas-header {
  background-color: rgb(238, 172, 172);
}

.nav-a {
  font-size: 2rem;
  color: black;
  text-decoration: none;
}

.btn-close,
.offcanvas-title {
  color: black;
}

.nav-item {
  text-align: center;
}

.offcanvas {
  height: fit-content;
}

.active {
  background-color: red;
}
</style>