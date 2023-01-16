<script lang='ts' setup>
import { useWord } from '@/stores/word.store';

const wordStore = useWord();
const state = wordStore.$state;

// selection aleatoire d'un mot dans data
const randomWord = wordStore.generateRandomWord();
console.log(randomWord);
// remplacer le mot par des underscores
const hiddenWord = wordStore.generateHiddenWord(randomWord);

// remplacer les underscore par les lettres justes
const letters = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');

function compareLetters(clickedLetter: string) {
    if (randomWord.includes(clickedLetter)) {

        state.attempts++;
        randomWord.split('').forEach((letter, index) => {
            if(letter === clickedLetter) {
                state.lettersFound++;
                hiddenWord[index] === clickedLetter;
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

    <div v-if="wordStore.isLoading">
        <p class="h5">Chargement en cours</p>
    </div>
    <div v-else>
        <div class="text-center fw-bold border m-3">
            <h2 class="h5">STATS de JEU</h2>
            <p>Nombre de lettres à trouver: {{ hiddenWord.length }}</p>
            <p>Lettres trouvées: {{ state.lettersFound }}</p>
            <p>Nombre de tentatives: {{ state.attempts }}</p>
            <p>Nombre d'erreurs: {{ state.errors }} /5</p>
        </div>
        <div class="text-center fw-bold border m-3">
            <p v-for="hiddenLetter in hiddenWord" class="hidden-letters">{{ hiddenLetter }}</p>
        </div>
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
    </div>

</template>

<style>
.hidden-letters {
    display: inline-flex;
    letter-spacing: 10px;
    font-size: 35px;
}

.keyboard {
    list-style-type: none;
    width: 45px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    background-color: blueviolet;
    color: antiquewhite;
    border-radius: 20px 30px 20px 30px;
}

.good {
    background-color: greenyellow !important;
}

.bad {
    background-color: tomato !important;;
}
</style>