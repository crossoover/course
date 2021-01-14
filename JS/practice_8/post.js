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
         id,
         avatarUrl,
         title,
         content
      } = this.data;

      this.wrapper = document.createElement('div');
      this.wrapper.classList.add('adv-card')
      this.wrapper.id = id
      const html = `
      
            <figure class="adv-card__pic">
               <img
                  class="adv-card__img"
                  src="${avatarUrl}"
                  alt="adv-image"
               />
            </figure>
   
            <div class="adv-card__text-content">
               <h2 class="adv-card__title">${title}</h2>
               <div class="adv-card__description">${content}</div>
            </div>
      `;
      this.wrapper.innerHTML = html
      this.root.append(this.wrapper)
   }
}

export {
   Post
}