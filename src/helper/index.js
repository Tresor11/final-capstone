/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-empty */
const navLinks = document.getElementsByClassName('nav-links');
const toggle = () => {
  navLinks[0].classList.toggle('open');
};

const inputValidation = ({ message }) => {
  const invalid = [];
  const general = message.split(':');
  const specific = general[1].split(',');
  for (const i in specific) {
    invalid.push(specific[i].split(' ')[1].toLowerCase());
  }
  const inputs = document.querySelectorAll('input,textArea');
  for (const i in inputs) {
    if (invalid.includes(inputs[i].name)) {
      inputs[i].className = `${inputs[i].className} is-danger`;
    } else {
      inputs[i].className = `${inputs[i].className} is-success`;
    }
  }
};

const loadingIcon = params => {
  const className = params || 'is-disabled button is-loading';
  const buttons = document.querySelectorAll('button');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < buttons.length; i++) {
    const arr = buttons[i].className.split(' ');
    if (arr[(arr.length) - 1] === 'is-loading') {
      arr.pop();
      buttons[i].className = arr.join(' ');
    } else {
      buttons[i].className = `${buttons[i].className} ${className}`;
    }
  }
};

export { toggle, inputValidation, loadingIcon };
