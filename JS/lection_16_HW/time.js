let body = document.querySelector('body');


let time = document.createElement('div');
let text = document.createElement('h2');
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');


const renderTime = (body = document.querySelector('body')) => {
   time.classList.add('time');
   body.appendChild(time);
   body.style.transition = '0.35s';
   time.style.fontSize = '70px';
   body.style.textAlign = 'center';
   time.style.margin = '200px auto';
   time.style.boxSizing = 'border-box';
   time.style.width = '400px';
   time.style.padding = '30px 0';
   time.style.borderRadius = '50px';
   time.style.fontFamily = 'Arial, Helvetica, sans-serif';
   time.style.letterSpacing = '10px';
   time.style.userSelect = 'none';
   time.style.transition = '0.3s';
   time.style.cursor = 'pointer';
   time.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.1), -10px -10px 10px rgba(255, 255, 255, 0.1), inset -5px -5px 10px rgba(0, 0, 0, 0.1), inset 5px 5px 10px rgba(255, 255, 255, 0.1)';
}

const addZero = (n) => {
   if (parseInt(n) < 10) {
      return '0' + n;
   } else {
      return '' + n;
   };
};

const showTime = () => {
   renderTime();
   renderHelp();
   let nowDate = new Date();
   let hours = nowDate.getHours();
   let mins = nowDate.getMinutes();
   let sec = nowDate.getSeconds();
   time.innerHTML = addZero(hours) + ':' + addZero(mins) + ':' + addZero(sec);
}


let actionTimer = setInterval(showTime, 1000);

showTime();