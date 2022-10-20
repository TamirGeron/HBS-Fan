<template>
  <section class="player">
    <h2 class="song-title-header">
      {{ name }}
    </h2>
    <div class="control">
      <button class="prev" @click="$emit('prev')">Prev</button>
      <button class="play" v-if="!isPlaying" @click="$emit('play')">
        Play
      </button>
      <button class="pause" v-else @click="$emit('pause')">Pause</button>
      <button class="next" @click="$emit('next')">Next</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["name", "play", "pause", "isPlaying", "prev", "next"],
};
</script>

<style>
.song-title-header {
  color: #212121;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
}

.control {
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
  align-items: center;
}

.play,
.pause {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0 15px;
  border-radius: 8px;
  color: #fff;
  background-color: #cc2e5d;
  min-width: 100px;
}

.next,
.prev {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  /* margin: 0 15px; */
  border-radius: 6px;
  color: #fff;
  background-color: #ff5858;
}

@media (min-width: 500px) {
  .control {
    width: 350px;
    margin: auto;
  }
}
</style>