import {Elements} from './elements';
import {game} from './game';
import {closePopup} from './popup';

const init = () => {
  Elements.rockDiv.addEventListener(`click`, () => game(`r`));
  Elements.paperDiv.addEventListener(`click`, () => game(`p`));
  Elements.scissorsDiv.addEventListener(`click`, () => game(`s`));
};

closePopup();
init();
