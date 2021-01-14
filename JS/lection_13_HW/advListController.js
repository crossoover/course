import {
  createAdvList
} from './advList.js';

const createGrid = (root = document.querySelector('body')) => {
  fetch('https://boring-fe.herokuapp.com/advertisments')
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      createAdvList(root, data);
    })
    .catch((e) => {
      console.error(e);
    });
};

export {
  createGrid
};