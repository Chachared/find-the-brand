import wordsArray from "@/data/words";

export function fetchWords() {
    const words:string[] = wordsArray;
    return words;
};

export function getRandomWord() {
    for (let i = wordsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];
    }
    return wordsArray[0];
};

export function hideWord(randomWord:string) {
    const hiddenWord = randomWord.slice().replace(/[A-Z]/g, '_');
    return hiddenWord;
};

export function compareLetters(randomWord: string, hiddenWord: string, letter: string) {
    if (randomWord.includes(letter)) {
        randomWord.split('').forEach((letter, index) => {
            if(letter === letter) {
                hiddenWord[index] === letter;
            }
        });
}
};


