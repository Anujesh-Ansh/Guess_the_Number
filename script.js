// console.log(Math.random() * 100 + 1); // returns a random number between 0 and 1

const guessRemain = document.querySelector('.lastResult');
const lowHi = document.querySelector('.lowOrHi');
let num;
let attempts;
let prevGuess = document.querySelector('.guesses');
let guess;

guess = document.querySelector('.guessField');

function ranNumber(){
    num = parseInt(Math.random() * 100 + 1);
    console.log(num);
    prevGuess.innerHTML = "";

    attempts = 10;
    guessRemain.innerHTML = " "+attempts;
    guess.value = "";
}



const form = document.querySelector('form');
ranNumber();

function guesser(){
            

    attempts--;
    console.log('Attempts: '+attempts);
    guessRemain.innerHTML = " "+attempts;
    prevGuess.innerHTML += guess.value+ ",";
    

    if( guess.value >100 || guess.value < 1){
        alert('Enter a valid number');
        ranNumber();
    }else{
        if(guess.value == num){
            console.log('You guessed it right');
            lowHi.innerHTML = "Congratulations! You guessed it right";
            ranNumber();
            
        }else if(guess.value > num){
            lowHi.innerHTML="High";
        
        }else{
            lowHi.innerHTML="Low";
            
        }
            
        if(attempts == 0){
            console.log('You lost');
            ranNumber();
        }
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    guesser();
})

