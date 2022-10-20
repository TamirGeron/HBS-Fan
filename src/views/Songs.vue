<template>
  <div class="songs">
    <div class="songs-content">
      <PlayerCmp
        v-if="!(filterSongs === null || filterSongs.length === 0)"
        :name="filterSongs[index].name"
        :isPlaying="isPlaying"
        @play="play"
        @pause="pause"
        @prev="prev"
        @next="next"
      />
      <h2 v-else class="song-title-header">אין שירים</h2>
      <Filter :filter="filter" :user="user" />
      <Lyrics
        v-if="
          !(filterSongs === null || filterSongs.length === 0) &&
          filterSongs[index].lyrics
        "
        :lyrics="filterSongs[index].lyrics"
        :isLyrics="isLyrics"
        @click="toggleLyrics"
      />
      <Playlist
        @onPlay="onPlay"
        :songs="filterSongs"
        :index="index"
        :user="user"
        :search="search"
        @onFavorite="onFavorite"
        @onUnFavorite="onUnFavorite"
      />
    </div>
  </div>
</template>

<script>
import PlayerCmp from "../components/PlayerCmp.vue";
import Playlist from "../components/playlist.vue";
import Lyrics from "../components/Lyrics";
import Filter from "../components/Filter";
export default {
  name: "Songs",
  components: { PlayerCmp, Playlist, Lyrics, Filter },
  data() {
    return {
      isPlaying: false,
      player: new Audio(),
      index: 0,
      isLyrics: false,
      filter: {
        search: "",
        isFav: false,
      },
    };
  },
  watch: {
    index: function (newIdx, oldIdx) {
      if (newIdx !== oldIdx) this.play();
    },
  },
  computed: {
    songs() {
      return this.$store.getters.songs;
    },
    user() {
      return this.$store.getters.user;
    },
    filterSongs() {
      if (!this.songs) return [];
      let curSongs;
      if (this.filter.isFav) curSongs = this.user.favorites;
      else curSongs = this.songs;
      this.player.pause();
      this.isPlaying = false;
      return curSongs.filter((song) => {
        return song.name.match(this.filter.search);
      });
    },
  },
  async created() {
    await this.$store.dispatch({ type: "loadSongs" });
  },
  methods: {
    play() {
      this.player.src = this.filterSongs[this.index].src;
      this.player.play();
      this.isPlaying = true;
      this.player.addEventListener("ended", () => {
        if (this.player.currentTime !== 0) this.next();
      });
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      if (this.index === this.filterSongs.length - 1) this.index = 0;
      else this.index++;
      return;
    },
    prev() {
      if (this.index === 0) this.index = this.filterSongs.length - 1;
      else this.index--;
    },
    onPlay(idx) {
      this.index = idx;
    },
    toggleLyrics() {
      this.isLyrics = !this.isLyrics;
    },
    async onFavorite(song) {
      let newUser = JSON.parse(JSON.stringify(this.user));
      newUser.favorites.push(song);
      await this.$store.dispatch({ type: "updateUser", newUser: newUser });
    },
    async onUnFavorite(songSrc) {
      let newUser = JSON.parse(JSON.stringify(this.user));
      const favIdx = newUser.favorites.findIndex((fav) => fav.src === songSrc);
      newUser.favorites.splice(favIdx, 1);
      await this.$store.dispatch({ type: "updateUser", newUser: newUser });
    },
    onFilter() {
      this.filterSongs = this.songs.filter((song) => {
        return song.name.match(this.filter.search);
      });
    },
  },
};
</script>

<style>
.songs {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("../assets/fan.JPG");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.8;
}

.songs-content {
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0 10px;
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>