<script lang='ts' setup>
import { useWord } from '@/stores/word.store';

const wordStore = useWord();
const words = wordStore.fetchWords();
console.log(words);

// selection aleatoire d'un mot dans data
// remplacer le mot par des underscores
const hiddenWord = wordStore.generateHiddenWord();
console.log(hiddenWord);

// remplacer les underscore par les lettres justes

// faire winner / loser à la fin de la partie

</script>

<template>

    <div v-if="wordStore.isLoading">
        <p class="h5">Chargement en cours</p>
    </div>
    <div v-else>
        <div class="text-center fw-bold border m-3">
        <h2 class="h5">STATS de JEU</h2>
        <p>Nombre de lettres à trouver: {{ hiddenWord.length }}</p>
        <p>Lettres trouvées: -</p>
        <p>Nombre de tentatives: -</p>
        <p>Nombre d'erreurs: - /5</p>
    </div>
        <div class="text-center fw-bold border m-3">
            <p v-for="hiddenLetter in hiddenWord" class="hidden-letters">{{ hiddenLetter }}</p>
        </div>
    </div>
    
</template>

<style>
.hidden-letters {
    display:inline-flex;
    letter-spacing: 10px;
    font-size: 35px;
}
</style>