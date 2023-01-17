<script setup lang="ts">
import Keyboard from "./components/Keyboard.vue";
import GamePicture from "./components/Picture.vue";
import Stats from "./components/Stats.vue";
import Word from "./components/Word.vue";
import GameOver from "./components/GameOver.vue";
import { useWord } from "./stores/word.store";

const wordStore = useWord();
const state = wordStore.$state;

function compareLetters(clickedLetter: string) {
    if (state.randomWord.includes(clickedLetter)) {

        state.attempts++;
        state.randomWord.split('').forEach((letter, index) => {
            if (letter === clickedLetter) {
                state.lettersFound++;
                state.hiddenWord.splice(index,1, clickedLetter);
                state.isBadLetter = false;
                state.isGoodLetter = true;
            }
        });
    } else {
        state.attempts++;
        state.errors++;
        state.isBadLetter = false;
        state.isBadLetter = true;
    }
}

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
        <Stats/>
        <Word />
        <GameOver v-if="state.errors === 5 || state.lettersFound === state.randomWord.length" />
        <Keyboard @compare-letters="compareLetters"/>
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
