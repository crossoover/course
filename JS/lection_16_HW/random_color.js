const getRandomColor = () => {
   num1 = Math.floor(Math.random() * 256);
   num2 = Math.floor(Math.random() * 256);
   num3 = Math.floor(Math.random() * 256);
   let color = ('rgb(' + num1 + ', ' + num2 + ', ' + num3 + ')');
   return color;
}

time.addEventListener('click', () => {
   const newColor = getRandomColor();
   console.log(newColor);
   time.style.backgroundColor = newColor;
   body.style.backgroundColor = newColor;
   btn1.style.backgroundColor = newColor;
   btn2.style.backgroundColor = newColor;
})