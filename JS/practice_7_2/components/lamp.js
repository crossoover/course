const getRandomNumber = () => {
   return Math.floor(Math.random() * 256);
}

const getRandomColor = () => {
   return 'rgb(' + getRandomNumber() + ', ' + getRandomNumber() + ', ' + getRandomNumber() + ')';
}

const getRandomSize = (min, max) => {
   min = Math.ceil(30);
   max = Math.floor(30);
   return Math.floor(Math.random() * (max - min)) + min + 'px';
}

const getRandomTime = (min, max) => {
   min = Math.ceil(2000);
   max = Math.floor(5000);

   return Math.floor(Math.random() * (max - min)) + min;
}

const createLamp = (root, color = getRandomColor, size) => {
   const lamp = document.createElement('div');
   size = getRandomSize();
   lamp.classList.add('lamp');
   lamp.style.width = size;
   lamp.style.height = size;
   lamp.style.backgroundColor = getRandomColor();
   root.appendChild(lamp);
   lamp.addEventListener('click', () => {
      lamp.style.backgroundColor = getRandomColor();
   })
   let time = getRandomTime();
   let time2 = getRandomTime();
   setInterval(() => lamp.style.backgroundColor = 'grey', time);
   setInterval(() => lamp.style.backgroundColor = getRandomColor(), time2);
}

const createManyLamps = (counter = 120, root = document.querySelector('.wrapper')) => {
   for (let i = 0; i < counter; i++) {
      createLamp(root);
   }
}

const reloadLamps = () => {
   let lamps = document.querySelector('.wrapper');
   lamps.remove();

   let newWrapper = document.createElement('div');
   newWrapper.classList.add('wrapper');
   document.body.append(newWrapper);
   createManyLamps();
}

export {
   createManyLamps,
   createLamp,
   reloadLamps
}