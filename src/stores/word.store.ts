import { getRandomWord, fetchWords, HideWord } from '@/services/game.service';
import { defineStore } from 'pinia';

interface WordState {
    words: [],
    isLoading: boolean
}

export const useWord = defineStore('words', {
    state: (): WordState =>({
        words: [],
        isLoading: false,
    }),
    getters: {
        wordList(state: WordState) {
            return state.words;
        }
    },
    actions: {
        fetchWords(){
            const words = fetchWords();
            return words;
        },
        generateHiddenWord(){
            const hiddenWord = HideWord();
            return hiddenWord;
        }
        
    }
})