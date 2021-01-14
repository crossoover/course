const createModal = (root, levelDescription = 'Уровень 1/3', lectionDescription = 'Урок 0/5') => {
   const modal = document.createElement('div');
   modal.classList.add('modal');
   root.appendChild(modal);
   const modal__triangle = document.createElement('div');
   modal__triangle.classList.add('modal__triangle');
   modal.appendChild(modal__triangle);
   const modal__square = document.createElement('div');
   modal__square.classList.add('modal__square');
   modal.appendChild(modal__square);

   const square__layer1 = document.createElement('div');
   square__layer1.classList.add('square__layer');
   square__layer1.classList.add('square__layer1');
   modal__square.appendChild(square__layer1);

   const square__layer1_text = document.createElement('div');
   square__layer1_text.classList.add('square__layer1_text');
   square__layer1.appendChild(square__layer1_text);

   const level = document.createElement('p');
   level.classList.add('level');
   level.textContent = levelDescription;
   square__layer1_text.appendChild(level);

   const lection = document.createElement('p');
   lection.classList.add('lesson');
   lection.textContent = lectionDescription;
   square__layer1_text.appendChild(lection);

   const square__layer1_key = document.createElement('div');
   square__layer1_key.classList.add('square__layer1_key');
   square__layer1.appendChild(square__layer1_key);

   const key = document.createElement('button');
   key.classList.add('key');
   square__layer1.appendChild(key);

   const key__image = document.createElement('img');
   key__image.classList.add('key__image');
   key__image.src = '../assets/key.png'
   key.appendChild(key__image);

   const square__layer2 = document.createElement('div');
   square__layer2.classList.add('square__layer');
   square__layer2.classList.add('square__layer2');
   modal__square.appendChild(square__layer2);

   const theory__btn = document.createElement('button');
   theory__btn.classList.add('theory__btn');
   theory__btn.textContent = 'ТЕОРИЯ';
   square__layer2.appendChild(theory__btn);

   const square__layer3 = document.createElement('div');
   square__layer3.classList.add('square__layer');
   square__layer3.classList.add('square__layer3');
   modal__square.appendChild(square__layer3);

   const start__btn = document.createElement('button');
   start__btn.classList.add('start__btn');
   start__btn.textContent = 'СТАРТ';
   square__layer3.appendChild(start__btn);
};

export {
   createModal
};