<script setup lang="ts">
import { useWord } from '@/stores/word.store';

const wordStore = useWord();
const state = wordStore.$state;

</script>

<template>
    <div>
        <div class="text-center fw-bold border m-3">
            <h2 class="h5">STATS de JEU</h2>
            <p>Nombre de lettres à trouver: {{ state.hiddenWord.length }}</p>
            <p>Lettres trouvées: {{ state.lettersFound }}</p>
            <p>Nombre de tentatives: {{ state.attempts }}</p>
            <p>Nombre d'erreurs: {{ state.errors }} /5</p>
        </div>
    </div>
</template>

<style scoped>
    
</style>