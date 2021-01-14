const createPost = (
   root,
   title = 'Click here',
   content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At praesentium enim, ratione eligendi nihil nemo pariatur commodi maxime iste, molestiae ipsa ex sed hic adipisci quidem? Odio quam numquam.'
) => {
   const wrapper = document.createElement('div');
   wrapper.classList.add('post');
   const heading = document.createElement('h2');
   heading.classList.add('heading');
   wrapper.classList.add('post_large');
   heading.addEventListener('click', () => {
      paragraph.classList.toggle('collapse');
      wrapper.classList.toggle('post_large');
      image.classList.toggle('image__hidden');
   });
   const paragraph = document.createElement('p');
   paragraph.classList.add('paragraph');
   heading.textContent = title;
   paragraph.textContent = content;
   wrapper.appendChild(heading);
   wrapper.appendChild(paragraph);
   root.appendChild(wrapper);
   const image = document.createElement('img');
   image.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg';
   image.classList.add('image');
   wrapper.appendChild(image);
};

export {
   createPost
}