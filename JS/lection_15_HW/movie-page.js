import {
  AddCommentForm
} from './add-movie-form.js';
import {
  CommentsList
} from './movie-list.js';

export class CommentsPage {
  constructor(root) {
    this.root = root;
    this.init();
  }

  init() {
    this.render();
    this.fetchData();
  }

  render() {
    this.contentEl = document.createElement('div');
    this.form = new AddCommentForm(this.contentEl, (responseData) => {
      console.log('SUCCCESS RESPONSE', responseData);
      this.list.renderOne(responseData);
    });
    this.root.append(this.contentEl);
  }

  fetchData() {
    fetch('https://boring-fe.herokuapp.com/movies')
      .then((res) => res.json())
      .then((comments) => {
        console.log('>>>>>', comments);
        this.comments = comments;
        this.list = new CommentsList(this.contentEl, this.comments);
      });
  }
}