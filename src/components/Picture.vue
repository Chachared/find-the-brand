<script lang='ts' setup>import { useWord } from '@/stores/word.store';

const wordStore = useWord();
const state = wordStore.$state;
</script>

<template>
    <div class="text-center fw-bold my-5">
        <img :src = "`src/assets/img/error${state.errors}.jpg`" />
        <p class="caption">Attention à la Multipla !</p>
    </div>
</template>

<style>
img {
    float: inline-start;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    border: 5px solid seagreen;
    border-radius: 20px 20px 20px 20px;
    margin-bottom: 10px;
}

.caption {
    font-family: 'Mingzat', sans-serif;
    font-weight: 700;
    color: tomato;
}
</style>