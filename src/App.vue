<script setup lang="ts">
import Picture from "./components/Picture.vue";
import GameStats from "./components/GameStats.vue";
import Word from "./components/Word.vue";
import Keyboard from "./components/Keyboard.vue";
</script>

<template >
  <header>
      <div>
      <h1 class="text-center">Trouvez la marque !</h1>
      <Picture/>
      </div>
      
  </header>

  <main>
    <div class="wrapper">
      <div>
        <GameStats/>
        <Word/>
        <Keyboard/>
      </div>
      </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
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
