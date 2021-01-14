import {
   createModal
} from "./modal.js"

import {
   createOption
} from "./button.js"


createOption(document.querySelector('.wrapper'));
createModal(document.querySelector('.wrapper'));
const window = document.querySelector('.modal');
const start = document.querySelector('.option');
start.addEventListener('click', () => {
   window.classList.toggle('active')
})