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
