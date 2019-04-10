export const getComputerChoice = () => {
  const choices = [`r`, `p`, `s`];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

export const convertToWord = (letter) => {
  if (letter === `r`) {
    return `Камень`;
  } else if (letter === `p`) {
    return `Бумага`;
  } else {
    return `Ножницы`;
  }
};

export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;
  return wrapper;
};

const mainContent = document.querySelector(`#main`);

export const changeScreen = (element) => {
  mainContent.innerHTML = ``;
  mainContent.appendChild(element);
};
