<script lang='ts' setup>
import { useWord } from '@/stores/word.store';

const wordStore = useWord();
const state = wordStore.$state;

// selection aleatoire d'un mot dans data
state.randomWord = wordStore.generateRandomWord();
console.log(state.randomWord);
// remplacer le mot par des underscores
state.hiddenWord = wordStore.generateHiddenWord(state.randomWord);
// remplacer les underscore par les lettres justes

</script>

<template>
    <div v-if="wordStore.isLoading">
        <p class="h5">Chargement en cours</p>
    </div>
    <div v-else>
        <div class="text-center fw-bold border m-3">
            <p v-for="hiddenLetter in state.hiddenWord" class="hidden-letters">{{ hiddenLetter }}</p>
        </div>
    </div>
</template>

<style>
.hidden-letters {
    display: inline-flex;
    letter-spacing: 10px;
    font-size: 35px;
}
</style>