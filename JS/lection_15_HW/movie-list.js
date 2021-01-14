import {
  CommentItem
} from './movie-item.js';

export class CommentsList {
  constructor(root, data) {
    this.root = root;
    this.data = data;
    this.render();
  }

  render() {
    this.listElement = document.createElement('div');
    this.listElement.classList.add('movie-list');
    for (let comment of this.data) {
      this.renderOne(comment);
    }
    this.root.append(this.listElement);
  }

  renderOne(comment) {
    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('movie-list__item');
    new CommentItem(this.listElement, comment);
  }
}