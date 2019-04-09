import {Elements} from "./elements";

export const closePopup = () => {

  const openHandler = (evt) => {
    evt.preventDefault();
    Elements.modal.classList.add(`modal-show`);
    document.removeEventListener(`keydown`, openHandler);
  };

  const closeHandler = (evt) => {
    evt.preventDefault();
    Elements.modal.classList.add(`modal-close`);
    Elements.modal.classList.remove(`modal-show`);
    Elements.modal.classList.remove(`modal-close`);
    document.removeEventListener(`keydown`, closeHandler);
  };

  const escKeyDownHandler = (evt) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();

      if (Elements.modal.classList.contains(`modal-show`)) {
        Elements.modal.classList.remove(`modal-show`);
      }
    }
  };

  Elements.help.addEventListener(`click`, openHandler);
  Elements.modalBtn.addEventListener(`click`, closeHandler);
  window.addEventListener(`keydown`, escKeyDownHandler);
};
