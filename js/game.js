import {Elements} from "./elements";
import {convertToWord, getComputerChoice} from "./util";

const win = (userChoice, computerChoice) => {
  const smallUserWord = `вы`.fontsize(3).sup();
  const smallCompWord = `компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  Elements.userScore++;
  Elements.userScoreSpan.innerHTML = Elements.userScore;
  Elements.computerScoreSpan.innerHTML = Elements.computerScore;
  Elements.result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} победили ${convertToWord(computerChoice)}${smallCompWord}. Вы победили!`;
  userChoiceDiv.classList.add(`green-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`green-glow`);
  }, 300);
};

const lose = (userChoice, computerChoice) => {
  const smallUserWord = `вы`.fontsize(3).sup();
  const smallCompWord = `компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  Elements.computerScore++;
  Elements.userScoreSpan.innerHTML = Elements.userScore;
  Elements.computerScoreSpan.innerHTML = Elements.computerScore;
  Elements.result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} проиграли ${convertToWord(computerChoice)}${smallCompWord}. Вы проиграли...`;
  userChoiceDiv.classList.add(`red-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`red-glow`);
  }, 300);
};

const draw = (userChoice, computerChoice) => {
  const smallUserWord = `вы`.fontsize(3).sup();
  const smallCompWord = `компьютер`.fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  Elements.computerScoreSpan.innerHTML = Elements.computerScore;
  Elements.result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ничья с ${convertToWord(computerChoice)}${smallCompWord}. Ничья!`;
  userChoiceDiv.classList.add(`gray-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`gray-glow`);
  }, 300);
};


export const game = (userChoice) => {
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
