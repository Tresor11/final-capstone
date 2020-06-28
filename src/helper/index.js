/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-empty */
const navLinks = document.getElementsByClassName('nav-links');
const toggle = () => {
  navLinks[0].classList.toggle('open');
};

// document.addEventListener('DOMContentLoaded', () => {
//   (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
//     $notification = $delete.parentNode;

//     $delete.addEventListener('click', () => {
//       $notification.parentNode.removeChild($notification);
//     });
//   });
// });

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
export { toggle, inputValidation };
