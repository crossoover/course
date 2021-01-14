import {
   Post
} from './post.js';
import {
   createPost
} from './createPost.js';
class CommentPage {
   constructor(root = document.querySelector('body')) {
      this.data = [];
      this.root = root;
   }

   fetchData() {
      fetch('https://boring-fe.herokuapp.com/movies')
         .then((resp) => {
            return resp.json();
         })
         .then((data) => {
            console.log(data);


            data.forEach(element => {
               const comment = new Post(this.domElement, element);
               comment.render();

            });
         })
         .catch((e) => {
            console.error(e);
         });
   };

   render() {
      this.domElement = document.createElement('div');
      this.root.append(this.domElement)
   }
}

export {
   CommentPage
};