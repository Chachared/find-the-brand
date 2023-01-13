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
const letters = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
function checkLetter(event) {
    // incrémenter le compteur de tentatives

    //récupérer la lettre du bouton

    //comparer la lettre avec le tableau de lettres du hiddenWord
    // if(this.random_word.includes(selected_letter)) {
    //     event.target.classList.add('good');
    //     this.random_word.split('').forEach((letter, index) => {
    //         if(letter === selected_letter) {
    //             this.letters_found++;
    //             this.hidden_letters_array[index] = selected_letter;
    //         }
    //     });
    //teinter le bouton en vert
    //montrer la lettre découverte -> remplacer le underscore par la lettre du hiddenWord
    //this.hidden_letters_array.join('');

    //sinon incrémenter le compteur d'erreur et teinter le bouton en rouge
    //afficher l'image d'erreur en fonction du nombre d'erreur
    // } else {
    //     this.errors++;
    //     event.target.classList.add('wrong');
    //     document.body.querySelector('img').src = `./img/error${this.errors}.jpg`;
    // }

    //vérifier s'il faut rejouer ou arrêter la partie
    // this.checkIfWinner();
};


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
        <div class="text-center fw-bold border mx-3">
        <div>
            <ul>
                <li v-for="letter in letters">
                    <button 
                        @click="checkLetter(event), {once:true}"
                        class="mx-2 my-2 btn btn-primary rounded"
                    >
                        {{ letter }}
                    </button>
                </li>
            </ul>
        </div>
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