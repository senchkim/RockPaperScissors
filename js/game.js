import {render, convertToWord, getComputerChoice} from "./util";
import {closePopup} from './popup';

const gameTemplate = render(`
  <div class="score-board">
  <div id="user-label" class="score-board-badge score-board-badge-user">Пользователь</div>
  <div id="computer-label" class="score-board-badge score-board-badge-computer">Компьютер</div>
  <span id="user-score" class="score-board-user">0</span>:<span id="computer-score" class="score-board-computer">0</span>
</div>

<div class="result">
  <p class="result-title">Игра пока не началась.</p>
</div>

<div class="choices">
  <div class="choice rock" id="r">
    <img src="img/rock.svg" alt="Камень">
  </div>
  <div class="choice paper" id="p">
    <img src="img/paper.svg" alt="Бумага">
  </div>
  <div class="choice scissors" id="s">
    <img src="img/scissors.svg" alt="Ножницы">
  </div>
</div>

<div id="message" class="message">Сделайте свой выбор!</div>
`);

let userScore = 0;
let computerScore = 0;
let computerScoreSpan = gameTemplate.querySelector(`.score-board-computer`);
const userScoreSpan = gameTemplate.querySelector(`.score-board-user`);
const result = gameTemplate.querySelector(`.result > p`);

const win = (userChoice, computerChoice) => {
  const smallUserWord = `вы`.fontsize(3).sup();
  const smallCompWord = `компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} победили ${convertToWord(computerChoice)}${smallCompWord}. Вы победили!`;
  userChoiceDiv.classList.add(`green-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`green-glow`);
  }, 300);
};

const lose = (userChoice, computerChoice) => {
  const smallUserWord = `вы`.fontsize(3).sup();
  const smallCompWord = `компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} проиграли ${convertToWord(computerChoice)}${smallCompWord}. Вы проиграли...`;
  userChoiceDiv.classList.add(`red-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`red-glow`);
  }, 300);
};

const draw = (userChoice, computerChoice) => {
  const smallUserWord = `вы`.fontsize(3).sup();
  const smallCompWord = `компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  computerScoreSpan.innerHTML = computerScore;
  result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ничья с ${convertToWord(computerChoice)}${smallCompWord}. Ничья!`;
  userChoiceDiv.classList.add(`gray-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`gray-glow`);
  }, 300);
};


const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case `rs`:
    case `pr`:
    case `sp`:
      win(userChoice, computerChoice);
      break;
    case `rp`:
    case `ps`:
    case `sr`:
      lose(userChoice, computerChoice);
      break;
    case `rr`:
    case `pp`:
    case `ss`:
      draw(userChoice, computerChoice);
      break;
  }
};

const rButton = gameTemplate.querySelector(`.rock`);
const pButton = gameTemplate.querySelector(`.paper`);
const sButton = gameTemplate.querySelector(`.scissors`);


rButton.addEventListener(`click`, () => game(`r`));
pButton.addEventListener(`click`, () => game(`p`));
sButton.addEventListener(`click`, () => game(`s`));

closePopup();

export default gameTemplate;
