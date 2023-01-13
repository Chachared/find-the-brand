<script setup lang="ts">
import GamePicture from "./components/Picture.vue";
import Word from "./components/Word.vue";
import Keyboard from "./components/Keyboard.vue";
</script>

<template >
  <header>
      <div>
      <h1 class="text-center">Trouvez la marque !</h1>
      <GamePicture/>
      </div>
  </header>

  <main>
    <div class="wrapper">
      <div>
        <Word />
        <Keyboard/>
      </div>
      </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  font-family: 'Edu QLD Beginner', cursive;
}
.wrapper {
  font-family: 'Mingzat', sans-serif;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
