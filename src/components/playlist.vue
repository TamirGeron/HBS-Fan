<template>
  <section class="playlist">
    <div class="songs-container">
      <button
        v-for="(song, idx) in songs"
        :key="idx"
        :class="idx === index ? 'song playing' : 'song'"
        :ref="idx === index ? 'scroll' : undefined"
      >
        <div class="heart" v-if="user">
          <div
            v-if="user.favorites.some((fav) => fav.src === song.src)"
            @click="$emit('onUnFavorite', song.src)"
          >
            <font-awesome-icon
              icon="fa-solid fa-heart-circle-check"
              class="fa-2xl"
            />
          </div>
          <div v-else @click="$emit('onFavorite', song)">
            <font-awesome-icon icon="fa-solid fa-heart" class="fa-2xl" />
          </div>
        </div>
        <div class="song-title" @click="$emit('onPlay', idx)">
          {{ song.name }}
        </div>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["onPlay", "songs", "index", "user", "onFavorite", "onUnFavorite"],
  updated() {
    const el = document.querySelector(".playing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  },
};
</script>

<style>
.playlist {
  overflow-y: auto;
}

.playlist h3 {
  color: #212121;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
}

.song-title {
  width: 100%;
  text-align: end;
}

.playlist .song {
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 10px;
}

.playlist .song.playing {
  color: #fff;
  background-image: linear-gradient(to right, #cc2e5d, #ff5858);
}
</style>