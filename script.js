const words = ['web', 'game', 'class', 'player', 'hangman', 'wellcode', 'developer'];
let randomWord, underscores, livesLeft;

function newGame() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  underscores = Array(randomWord.length).fill('_');
  livesLeft = 7;
  document.getElementById('livesLeft').textContent = 'Lives left: ' + livesLeft;
  document.getElementById('underscores').innerHTML = underscores;
  document.getElementById('button').disabled = false;
  document.getElementById('gameOver').textContent = '';
}

function checkLetter() {
  let letter = document.getElementById('letter').value;
  let letterFound = false;
  let message;
  document.getElementById('letter').value = ''; 
  for (let i = 0; i < randomWord.length; ++i) {
    if (randomWord[i] === letter && underscores[i] === '_') {
      letterFound = true;
      underscores[i] = randomWord[i];
      document.getElementById('underscores').innerHTML = underscores;
    }
  }
  if (letterFound === false) {
    --livesLeft;
    document.getElementById('livesLeft').textContent = 'Lives left: ' + livesLeft;
  }
  if (!underscores.includes('_')) {
    message = 'You win! Correct word was: ';
    gameOver(message);
  }
  if (livesLeft === 0) {
    message = 'You lost! Correct word was: ';
    gameOver(message);
  }
}

function gameOver(message) {
  document.getElementById('gameOver').textContent = message + randomWord + '.';
  document.getElementById('button').disabled = true;
}