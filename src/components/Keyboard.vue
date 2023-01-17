
<script setup lang="ts">
import { useWord } from '@/stores/word.store';

const wordStore = useWord();
const state = wordStore.$state;

const letters = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');

const emit = defineEmits<{ 
    (e: 'compareLetters', clickedLetter: string): void;
    (e: 'checkIfGameEnds'): void; 
    }>();



</script>


<template>
    <div class="text-center fw-bold border mx-3">
        <div>
            <ul>
                <li v-for="clickedLetter in letters"
                    @click="$emit('checkIfGameEnds')"
                    @click.once="$emit('compareLetters', clickedLetter)"
                    class="keyboard">
                    <button 
                        
                        :v-model="clickedLetter" 
                        :class="{ good: state.isGoodLetter, bad: state.isBadLetter }"
                        class="btn">
                        {{ clickedLetter }}
                    </button>

                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>