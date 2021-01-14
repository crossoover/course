import {
   CommentPage
} from './commentPage.js';
class Post {
   constructor(root, data) {
      this.data = data;
      this.root = root;
   }
   render() {
      const {
         title,
         preview,
         description,
         id,
         genre,
         rating
      } = this.data;

      this.wrapper = document.createElement('div');
      this.wrapper.classList.add('card')
      this.wrapper.id = id
      const html = `
      <div class="card__stats">
            <div class="card__rating">${rating}</div>
            <div class="card__genre">${genre}</div>
      </div>
            <figure class="card__pic">
               <img
                  class="card__img"
                  src="${preview}"
                  alt="image"
               />
            </figure>
   
            <div class="card__text-content">
               <h2 class="card__title">${title}</h2>
               <div class="card__description">${description}</div>
            </div>
      `;
      this.wrapper.innerHTML = html
      this.root.append(this.wrapper)
   }
}

export {
   Post
}