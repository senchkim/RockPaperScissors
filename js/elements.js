let userScore = 0;
let computerScore = 0;
let computerScoreSpan = document.getElementById(`computer-score`);
const userScoreSpan = document.getElementById(`user-score`);
const result = document.querySelector(`.result > p`);
const rockDiv = document.getElementById(`r`);
const paperDiv = document.getElementById(`p`);
const scissorsDiv = document.getElementById(`s`);
const modal = document.querySelector(`.modal`);
const help = document.querySelector(`.help`);
const modalBtn = modal.querySelector(`.modal-btn`);

export const Elements = {
  userScore,
  computerScore,
  computerScoreSpan,
  userScoreSpan,
  result,
  rockDiv,
  paperDiv,
  scissorsDiv,
  modal,
  modalBtn,
  help
};
