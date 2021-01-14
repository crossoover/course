import {
   createPost,
} from './components/post.js';

const specialRoot = document.querySelector('.wrapper');
createPost(specialRoot);
createPost(specialRoot);
createPost(specialRoot, 'test', 'content');