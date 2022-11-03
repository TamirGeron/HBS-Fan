<template>
  <section class="filter">
    <div class="searchBox">
      <button @click="toggleSearch" class="searchButton">🔍</button>
      <input
        v-if="isSearch"
        class="searchInput"
        type="text"
        v-model="filter.search"
        placeholder="חפש שיר"
      />
    </div>

    <div class="category">
      <button class="btn-cat" @click="toggleCategory">
        <button type="button" class="btn btn-primary" data-bs-toggle="button">
          <img :src="catSVG" />
        </button>
      </button>
      <div v-if="isCategory" class="category-on">
        <label class="lbl-cat">
          <input
            type="radio"
            class="option-input radio"
            name="example"
            checked
            v-model="filter.category"
            value=""
          />
          הכל
        </label>
        <label class="lbl-cat">
          <input
            type="radio"
            class="option-input radio"
            name="example"
            v-model="filter.category"
            value="general"
          />
          קבוצה
        </label>
        <label class="lbl-cat">
          <input
            type="radio"
            class="option-input radio"
            name="example"
            v-model="filter.category"
            value="player"
          />
          שחקן
        </label>
        <label class="lbl-cat">
          <input
            type="radio"
            class="option-input radio"
            name="example"
            v-model="filter.category"
            value="new"
          />
          חדש
        </label>
      </div>
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
      isCategory: false,
      catSVG: require("../assets/sliders.svg"),
    };
  },
  methods: {
    toggleSearch() {
      this.isSearch = !this.isSearch;
    },
    toggleCategory() {
      this.isCategory = !this.isCategory;
    },
  },
};
</script>

<style>
.filter {
  padding: 10px;
  display: flex;
  gap: 1rem;
  direction: rtl;
  flex-wrap: wrap;
  justify-content: space-around;
}
.searchBox {
  height: 40px;
  direction: rtl;
  display: flex;
}

.searchButton {
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
}

.searchInput {
  background: #2f3640;
  height: 40px;
  border-radius: 40px;
  padding: 10px 40px 10px 10px;
  border: none;
  outline: none;
  float: right;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  text-align: right;
  margin-right: -10px;
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

.category-on {
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  gap: 10px;
  flex: 1 1 auto;
  margin-top: 10px;
}

@keyframes click-wave {
  0% {
    height: 40px;
    width: 40px;
    opacity: 0.15;
    position: relative;
  }
  100% {
    height: 200px;
    width: 200px;
    margin-left: -80px;
    margin-top: -80px;
    opacity: 0;
  }
}

.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 13.33333px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 40px;
  transition: all 0.15s ease-out 0s;
  background: #a697f1;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
}
.option-input:hover {
  background: #9faab7;
}
.option-input:checked {
  background: #e91e1e;
}
.option-input:checked::before {
  height: 40px;
  width: 40px;
  position: absolute;
  display: inline-block;
  font-size: 26.66667px;
  text-align: center;
  line-height: 40px;
}
.option-input:checked::after {
  -webkit-animation: click-wave 0.25s;
  -moz-animation: click-wave 0.25s;
  animation: click-wave 0.25s;
  background: #e91e1e;
  content: "";
  display: block;
  position: relative;
  z-index: 100;
}
.option-input.radio {
  border-radius: 50%;
}
.option-input.radio::after {
  border-radius: 50%;
}

.lbl-cat {
  font-size: 2em;
  font-weight: 700;
  text-align: center;
}

.category {
  direction: rtl;
  display: flex;
  flex-direction: column;
}

.btn-circle div {
  position: relative;
  top: -1px;
}
</style>