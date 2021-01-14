const apiURL = 'https://boring-fe.herokuapp.com/movies';
export class CommentItem {
  /**
   * JSDOC
   * @param {HTMLElement} root
   * @param {{title: string, author: string; avatarUrl: string; id: number;text: string}} data
   */
  constructor(root, data) {
    this.root = root;
    this.data = data;
    this.render();
  }

  render() {
    this.domElement = document.createElement('div');
    this.domElement.classList.add('movie-card');
    this.domElement.innerHTML = `
      <div class="movie-card__stats">
            <div class="movie-card__stats_rating">${this.data.rating}</div>
            <div class="movie-card__stats_genre">${this.data.genre}</div>
        </div>
        <img class="movie-card__image"
            src="${this.data.preview}" alt="image">
        <div class="movie-card__text-content">
            <div class="movie-card__text-content_title">${this.data.title}</div>
            <div class="movie-card__text-content_description">${this.data.description}</div>
        </div>
    `;
    this.root.append(this.domElement);
  }
}