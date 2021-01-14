import {
   createManyLamps,
   reloadLamps
} from './components/lamp.js'

createManyLamps(prompt('Привет!\nСколько лампочек Ты хочешь создать?\n(у меня лучше всего выглядит,когда их 120)'));

let alertTimer = setTimeout(() => {
   alert('P.S. По нажатию цвет у лампочек тоже меняется.');
}, 3000)

const reload = document.querySelector('.reload');
reload.addEventListener('click', () => {
   reloadLamps()
});