
<script setup lang="ts">
import { useWord } from '@/stores/word.store';

const wordStore = useWord();
const state = wordStore.$state;

const letters = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');

const emit = defineEmits<{
    (e: 'compareLetters', clickedLetter: string): void;
}>();

// function endOfGame(){
//   if (){
//       state.keyboardIsDisabled = true;
//     }
// }



</script>


<template>
    <div class="text-center fw-bold border mx-3">
        <div>
            <ul>
                <li v-for="clickedLetter in letters"
                    @click.once="$emit('compareLetters', clickedLetter)" :v-model="clickedLetter" class="keyboard">
                    <button 
                        :disabled="state.lettersFound === state.randomWord.length || state.errors === 5"
                        :class="{ good: state.isGoodLetter, bad: state.isBadLetter}"
                    >{{ clickedLetter }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.keyboard {
    list-style-type: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

button {
    width: 45px;
    padding: 10px;
    margin: 5px;
    border-radius: 20px 30px 20px 30px;
    cursor: pointer;
    background-color: blueviolet;
    color: antiquewhite;
    border: none;
}
.good {
    background-color: greenyellow !important;
    color: darkgrey !important;
}

.bad {
    background-color: tomato !important;
    color: black !important;
}
</style>