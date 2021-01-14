const lights = document.querySelectorAll('.circle');

const deleteAll = (lights) => {
   for (let i = 0; i < lights.length; i++) {
      lights[i].classList.remove('active');
   }
}
const changeColor = (lights, number) => {
   deleteAll(lights);
   lights[number].classList.add('active');
}

setInterval(() => {
   let timer1 = setInterval(changeColor, 1000, lights, 0);
   let timer2 = setInterval(changeColor, 2000, lights, 1);
   let timer3 = setInterval(changeColor, 3000, lights, 2);
   setTimeout(() => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
   }, 3999);
}, 3000);