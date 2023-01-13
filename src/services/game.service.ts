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

export function HideWord() {
    const randomWord = getRandomWord();
    console.log(randomWord);
    const hiddenWord = randomWord.slice().replace(/[A-Z]/g, '_');
    return hiddenWord.split('');
};

export function checkLetter(event) {
    this.attempts++;

    const selected_letter = event.target.textContent;

    if(this.random_word.includes(selected_letter)) {
        event.target.classList.add('good');
        this.random_word.split('').forEach((letter, index) => {
            if(letter === selected_letter) {
                this.letters_found++;
                this.hidden_letters_array[index] = selected_letter;
            }
        });

        document.body.querySelector('section[id="word-to-find"] > p').textContent = this.hidden_letters_array.join('');
    } else {
        this.errors++;
        event.target.classList.add('wrong');
        document.body.querySelector('img').src = `./img/error${this.errors}.jpg`;
    }

    this.checkIfWinner();
};

// checkIfWinner() {

//     const word_paragraph = document.body.querySelector('section[id="word-to-find"] > p');
    
//     if (this.errors === 5) {
//         this.gameOver(word_paragraph);
//         word_paragraph.classList.add('loser');
//         word_paragraph.textContent = this.random_word;
//     }

//     if (this.letters_found === this.random_word.length){
//         this.gameOver(word_paragraph);
//         word_paragraph.classList.add('winner');
//     }
// };

// gameOver(word_paragraph) {

//     word_paragraph.classList.add('game-over');
//     document.body.querySelectorAll('li').forEach(letter => letter.className = 'disabled');

//     const button_element = document.createElement('button');
//     button_element.textContent = "Réessayer !";

//     button_element.addEventListener('click', () => window.location.reload(false));
//     document.body.querySelector('section[id="letters"]').appendChild(button_element);
// };

