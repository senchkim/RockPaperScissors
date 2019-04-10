import {render, changeScreen} from './util';
import gameTemplate from './game';

const introTemplate = render(`<section class="intro">
<div class="intro-text">
  Камень-ножницы-бумага – это древняя игра, возникшая в Китае. Раньше в нее играли военачальники поздней династии Хань, 
  а сейчас эта игра любима многими школьниками. С помощью нее можно выиграть спор, провести жеребьевку и просто убить время.
</div>
<div class="intro-block">
  <button type="button" class="intro-btn btn btn-out">Играть</button>
</div>
</section>`);

const greetingButton = introTemplate.querySelector(`.intro-btn`);

greetingButton.addEventListener(`click`, () => changeScreen(gameTemplate));

export default introTemplate;
