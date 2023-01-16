
<script setup lang="ts">import { useWord } from '@/stores/word.store';

const wordStore = useWord();
const state = wordStore.$state;

const letters = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');

function compareLetters(clickedLetter: string) {
    if (state.randomWord.includes(clickedLetter)) {

        state.attempts++;
        state.randomWord.split('').forEach((letter, index) => {
            if(letter === clickedLetter) {
                state.lettersFound++;
                state.hiddenWord[index] === clickedLetter;
                state.isBadLetter = false;
                state.isGoodLetter = true,
                console.log(letter);
                //checkIfWinner();
            }
        });

    } else {
        state.attempts++;
        state.errors++;
        state.isBadLetter = false;
        state.isBadLetter = true;
        //checkIfWinner();
    }
}
</script>


<template>
    <div class="text-center fw-bold border mx-3">
            <div>
                <ul>
                    <li 
                    v-for="clickedLetter in letters" 
                    @click.once="compareLetters(clickedLetter)" 
                    class="keyboard"
                    
                    >
                        <button :v-model="clickedLetter"
                        :class="{good: state.isGoodLetter, bad: state.isBadLetter}"
                         class="btn"
                         >
                            {{ clickedLetter }}
                        </button>

                    </li>
                </ul>
            </div>
        </div>
</template>

<style scoped>
    
</style>