import {
   createModal
} from "./modal.js"

const createOption = (root, imageSrc = '../assets/tower.png', optionName = 'Basics') => {
   const option = document.createElement('div');
   option.classList.add('option');
   root.appendChild(option);

   const option__circle_main = document.createElement('div');
   option__circle_main.classList.add('option__circle_main');
   option.appendChild(option__circle_main);

   const option__circle_secondary = document.createElement('div');
   option__circle_secondary.classList.add('option__circle_secondary');
   option__circle_main.appendChild(option__circle_secondary);

   const option__illustration = document.createElement('img');
   option__illustration.classList.add('option__illustration');
   option__illustration.src = imageSrc;
   option__circle_secondary.appendChild(option__illustration);

   const option__text = document.createElement('p');
   option__text.classList.add('option__text');
   option__text.textContent = optionName;
   option__circle_main.appendChild(option__text);
}

export {
   createOption
};