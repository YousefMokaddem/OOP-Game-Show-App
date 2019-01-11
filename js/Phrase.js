/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase;
    }

    addPhraseToDisplay (){
        //append elements as html using +=
        const phraseList = document.querySelector('#phrase ul');
        for(let i = 0; i < this.phrase.length; i++){
            if(this.phrase[i] !== ' '){
                phraseList.innerHTML += `<li class="hide letter ${this.phrase[i].toLowerCase()}">${this.phrase[i]}</li>`;
            }else{
                phraseList.innerHTML += `<li class="space">${this.phrase[i]}</li>`;
            }
        }
    }

    checkLetter(key){
        //return true as soon as a matching char is found, if none found return false
        for(let i = 0; i < this.phrase.length; i++){
            if (this.phrase[i].toLowerCase() === key){
                return true;
            }
        }
        return false;
    }

    showMatchedLetter(key){
        let matched;
        for(let i = 0; i < this.phrase.length; i++){
            if (this.phrase[i].toLowerCase() === key){
                //select all matching letters in phrase (interpolation is so cool :) )
                matched = document.getElementsByClassName(`${key}`);
            }
        }
        for(let i = 0; i < matched.length; i++){
            matched[i].classList.toggle('hide');
            matched[i].classList.toggle('show');
        }
    }
}
