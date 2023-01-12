export function getRandomWord(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array[0];
};

export function generateLetterButtons(letters_section_element) {
    const ul_element = document.createElement('ul');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(letter => {
        const li_element = document.createElement('li');
        li_element.textContent = letter;
        li_element.addEventListener('click', () => this.checkIfLetterInWord(event), {once: true});
        ul_element.appendChild(li_element);
    });

    letters_section_element.appendChild(ul_element);
};

displayHiddenWord() {
    const hidden_word = this.random_word.slice().replace(/[A-Z]/g, '_');
    const paragraph_element =  document.createElement('p');
    paragraph_element.textContent = hidden_word;
    document.body.querySelector('section[id="word-to-find"]').appendChild(paragraph_element);
    paragraph_element.id = 'hidden-letters';
    return hidden_word.split('');
};

checkIfLetterInWord(event) {
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
    document.body.querySelector('figcaption').innerHTML = `
        Nombre de lettres à trouver : ${this.random_word.length} <br>
        Lettres trouvées : ${this.letters_found} <br>
        Nombre de tentatives : ${this.attempts} <br>
        Nombre d'erreurs : ${this.errors} / 5
    `;

    this.checkIfWinner();
};

checkIfWinner() {

    const word_paragraph = document.body.querySelector('section[id="word-to-find"] > p');
    
    if (this.errors === 5) {
        this.gameOver(word_paragraph);
        word_paragraph.classList.add('loser');
        word_paragraph.textContent = this.random_word;
    }

    if (this.letters_found === this.random_word.length){
        this.gameOver(word_paragraph);
        word_paragraph.classList.add('winner');
    }
};

gameOver(word_paragraph) {

    word_paragraph.classList.add('game-over');
    document.body.querySelectorAll('li').forEach(letter => letter.className = 'disabled');

    const button_element = document.createElement('button');
    button_element.textContent = "Réessayer !";

    button_element.addEventListener('click', () => window.location.reload(false));
    document.body.querySelector('section[id="letters"]').appendChild(button_element);
};
