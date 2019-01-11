/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0;
        this.phrases = ['First phrase', 'Dingus mingus', 'SomeBODY Once Told Me'];
        this.activePhrase = null;
    }
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.p = new Phrase(this.activePhrase);
        this.p.addPhraseToDisplay();
        //added here so that there is no keyboard input in title screen
        document.addEventListener('keydown', keyListener);
    }

    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    handleInteraction(key){
        //disable selected key's button
        var button;
        const keys = document.querySelectorAll('#qwerty button');
        keys.forEach((e)=>{
            if(e.textContent === key){
                button = e;
            }
        });
        //check if button is already disabled (only needed for keyboard input)
        if(!button.disabled){
            button.disabled = true;
            //check if its in the phrase and handle accordingly
            if (this.p.checkLetter(key)){
                button.className += ' chosen';
                this.p.showMatchedLetter(key);
                if(this.checkForWin()){
                    this.gameOver(true);
                }
            }else{
                button.className += ' wrong';
                this.removeLife();
            }
        }
        


    }

    removeLife(){
        document.querySelector('#scoreboard ol').children[this.missed].firstElementChild.src = "images/lostHeart.png";
        this.missed++;
        if(this.missed === 5){
            this.gameOver(false);
        }
    }

    checkForWin(){
        const ul = document.querySelector('#phrase ul');
        for(let i = 0; i < ul.children.length; i++){
            if (ul.children[i].classList.contains('hide')){
                return false;
            }
        }
        return true;
    }

    gameOver(won){
        const overlay = document.getElementById('overlay')
        const message = document.getElementById('game-over-message');
        overlay.style.display = '';
        if(won){
            overlay.className = 'win';
            message.textContent = 'Congrats, You Won! Play Again?';
        }else{
            overlay.className = 'lose';
            message.textContent = 'Sorry, You Lost! Play Again?';
        }
        document.getElementById('btn__reset').textContent = 'Play Again'

        /*RESET GAME*/
        //remove li's
        const ul = document.querySelector('#phrase ul');
        while(ul.firstElementChild){
            ul.removeChild(ul.firstElementChild);
        }
        //reset buttons
        const buttons = document.querySelectorAll('#qwerty button');
        for (let i = 0; i < buttons.length; i++){
            buttons[i].className = 'key';
            buttons[i].disabled = false;
        }
        //reset life
        this.missed = 0;
        //reset hearts
        for(let i = 0; i < 5; i++){
            document.querySelector('#scoreboard ol').children[i].firstElementChild.src = "images/liveHeart.png";
        }
        //remove keydown listener so no keyboard input is taken in title screen
        document.removeEventListener('keydown', keyListener);
    }
}