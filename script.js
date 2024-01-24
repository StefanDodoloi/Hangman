const words = ['web', 'game', 'class', 'player', 'hangman', 'wellcode', 'developer'];
const randomWord = words[Math.floor(Math.random() * words.length)];
let underscores = Array(randomWord.length).fill('_');
let livesLeft = 7;
document.getElementById('livesLeft').textContent = 'Lives left: ' + livesLeft;
document.getElementById('underscores').innerHTML = underscores;


function checkLetter() {
  let letter = document.getElementById('letter').value;
  let letterFound = 0;
  document.getElementById('letter').value = ''; 
  
  for (let i = 0; i < randomWord.length; ++i) {
    if (randomWord[i] === letter && underscores[i] === '_') {
      letterFound = 1;
      underscores[i] = randomWord[i];
      document.getElementById('underscores').innerHTML = underscores;
    }
  }
  if (letterFound === 0) {
    --livesLeft;
    document.getElementById('livesLeft').textContent = 'Lives left: ' + livesLeft;
  }
  if (!underscores.includes('_')) {
    youWon();
  }
  if (livesLeft === 0) {
    gameOver();
  }
}

function gameOver() {
  document.getElementById('gameOver').textContent = 'You lost! Correct word was: ' + randomWord + '.';
  document.getElementById('button').disabled = true;
}

function youWon() {
  document.getElementById('gameOver').textContent = 'You won!';
  document.getElementById('button').disabled = true;
}