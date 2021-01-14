const LIGHTS = document.querySelectorAll('.circle');

const toggleColor = (LIGHTS) => {
   for (let i = 0; i < LIGHTS.length; i++) {
      LIGHTS[i].addEventListener('click', () => {
         LIGHTS[i].classList.toggle('active');
         for (let j = 0; j < LIGHTS.length; j++) {
            if (j != i) {
               LIGHTS[j].classList.remove('active');
            }
         }
      });
   }
}
toggleColor(LIGHTS);