<template>
  <section class="lyrics">
    <h1 class="header-lyrics">מילים</h1>
    <div class="words-container">
      <pre class="words" v-if="isLyrics">{{
        lyrics.replaceAll("&", "\n")
      }}</pre>
    </div>
  </section>
</template>

<script>
export default {
  props: ["lyrics", "isLyrics"],
};
</script>

<style>
.header-lyrics {
  text-decoration: underline;
}
.lyrics {
  text-align: center;
}
.words-container {
  max-height: 50vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
}
.words {
  font-size: 1.5em;
  font-weight: bold;
  word-wrap: break-word;
  white-space: pre-wrap;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
}
</style>