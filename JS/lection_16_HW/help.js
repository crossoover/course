const renderHelp = () => {
   let newActionTimer = actionTimer;
   btn1.textContent = 'Start';
   styleButton(btn1);
   body.appendChild(btn1);

   btn1.addEventListener('click', () => {
      newActionTimer = setInterval(showTime, 1000);
      console.log('start');
   })

   btn2.textContent = 'Stop';
   styleButton(btn2);
   btn2.addEventListener('click', () => {
      clearInterval(actionTimer);
      clearInterval(newActionTimer);
      console.log('stop');
   })
   body.appendChild(btn2);

   text.textContent = 'Click on the timer to change color';
   text.style.textTransform = 'uppercase';
   text.style.fontFamily = 'Arial, Helvetica, sans-serif';
   body.appendChild(text);
}

const styleButton = (element) => {
   element.style.padding = '10px 20px';
   element.style.fontSize = '20px';
   element.style.margin = '20px';
   element.style.borderRadius = '10px';
   element.style.outline = 'none';
   element.style.border = 'none';
   element.style.cursor = 'pointer';
   element.style.transition = '0.3s'
   element.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.1), -5px -5px 5px rgba(255, 255, 255, 0.1), inset -5px -5px 5px rgba(0, 0, 0, 0.1), inset 5px 5px 5px rgba(255, 255, 255, 0.1)';
}