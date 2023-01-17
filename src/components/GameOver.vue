<script setup lang="ts">
import { useWord } from '@/stores/word.store';

const wordStore = useWord();
const state = wordStore.$state;

function reloadPage(){
    window.location.reload();
}

</script>

<template>
    <div class="text-center fw-bold border m-3">
        <p v-if="state.errors === 5">Désolé, vous n'avez pas trouvé la marque ! :( </p>
        <p v-else-if="state.lettersFound === state.randomWord.length">Bravo, la marque était bien {{ state.randomWord }} !!! :D</p>
        <button @click="reloadPage()"
        >Rejouer</button>
    </div>
</template>

<style scoped>
button {
    padding: 10px;
    margin: 5px;
    border-radius: 20px 30px 20px 30px;
    cursor: pointer;
    background-color: blueviolet;
    color: antiquewhite;
    border: none;
}
</style>