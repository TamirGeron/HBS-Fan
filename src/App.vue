<template>
  <div class="big-div">
    <header>
      <Nav />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  components: { Nav },
  async created() {
    await this.$store.dispatch({ type: "loadUser" });
  },
};
</script>

<style>
.big-div {
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: #fff;
  flex: 0 0 70px;
}
main {
  width: 100%;
  height: calc(100% - 70px);
}
</style>
