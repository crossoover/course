import {
  createAdv
} from './adv.js';

const createAdvList = (root, element) => {
  const container = document.createElement('div');
  container.classList.add('grid');

  let advHtmlStrings = '';
  element.forEach((product) => {
    const html = createAdv(product);
    advHtmlStrings += html;
  });
  container.insertAdjacentHTML('beforeend', advHtmlStrings);
  root.append(container);
};

export {
  createAdvList
};