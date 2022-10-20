<template>
  <section class="filter">
    <div class="searchBox">
      <input
        v-if="isSearch"
        class="searchInput"
        type="text"
        v-model="filter.search"
        placeholder="חפש שיר"
      />
      <button @click="toggleSearch" class="searchButton">🔍</button>
    </div>
    <div v-if="user" class="is-fav-box">
      <label class="is-fav-label" for="isFav">מועדפים</label>
      <input
        class="is-fav-input"
        type="checkbox"
        id="isFav"
        v-model="filter.isFav"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Filter",
  props: ["filter", "user"],
  data() {
    return {
      isSearch: false,
    };
  },
  methods: {
    toggleSearch() {
      this.isSearch = !this.isSearch;
    },
  },
};
</script>

<style>
.searchBox {
  height: 40px;
}

.searchButton {
  color: white;
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.searchInput {
  background: #2f3640;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  border: none;
  outline: none;
  float: right;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  width: 100%;
  text-align: right;
}

.is-fav-box {
  text-align: right;
  height: 40px;
  justify-content: center;
  display: flex;
}

.is-fav-label {
  margin: 5px;
  font-size: 20px;
  font-weight: bold;
}

.is-fav-input {
  height: 30px;
  width: 30px;
  margin: 5px;
}
</style>