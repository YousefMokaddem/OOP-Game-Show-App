/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();

 document.getElementById('btn__reset').addEventListener('click', () => game.startGame());

 document.getElementById('qwerty').addEventListener('click', (e)=>{
    if(e.target.className === 'key'){
        game.handleInteraction(e.target.textContent);
    }
 });
 function keyListener(e){
    if(/^[a-z]$/.test(e.key.toLowerCase())){
        game.handleInteraction(e.key.toLowerCase());
    }
 }