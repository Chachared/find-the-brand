import { checkIfWinner, compareLetters, fetchWords, getRandomWord, hideWord } from '@/services/game.service';
import { defineStore } from 'pinia';

interface WordState {
    words: [],
    isLoading: boolean,
    errors: number,
    attempts: number,
    lettersFound: number,
    isGoodLetter: boolean,
    isBadLetter: boolean,
    randomWord: string,
    hiddenWord: string[]
}

export const useWord = defineStore('words', {
    state: (): WordState => ({
        words: [],
        isLoading: false,
        errors: 0,
        attempts: 0,
        lettersFound: 0,
        isGoodLetter: false,
        isBadLetter: false,
        randomWord: '',
        hiddenWord: [],
    }),
    getters: {
        wordList(state: WordState) {
            return state.words;
        }
    },
    actions: {
        fetchWords() {
            const words = fetchWords();
            return words;
        },
        generateRandomWord() {
            const randomWord = getRandomWord();
            return randomWord;
        },
        generateHiddenWord(randomWord: string) {
            const hiddenWord = hideWord(randomWord);
            return hiddenWord.split('');
        },
        checkWinner(errors: number, lettersFound: number, randomWord: string){
            checkIfWinner(errors, lettersFound, randomWord);
        }
            
        

    }
})