import {Elements} from './elements';
import {game} from './game';

const init = () => {
  Elements.rockDiv.addEventListener(`click`, () => game(`r`));
  Elements.paperDiv.addEventListener(`click`, () => game(`p`));
  Elements.scissorsDiv.addEventListener(`click`, () => game(`s`));
};

const closePopup = () => {
  Elements.modalBtn.addEventListener(`click`, () => {
    Elements.modal.classList.add(`modal-close`);
  });
  init();
};

closePopup();
