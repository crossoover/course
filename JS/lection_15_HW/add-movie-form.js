const formChildrenTemplate = `
  <h2>ADD A MOVIE</h2>
  <div class="add-comment-form__field">
    <input
      type="text"
      name="title"
      class="add-comment-form__native-input"
      placeholder="title"
    />
  </div>
  <div class="add-comment-form__field">
    <input
      type="text"
      name="genre"
      class="add-comment-form__native-input"
      placeholder="genre"
    />
  </div>
  <div class="add-comment-form__field">
    <input
      type="text"
      name="rating"
      class="add-comment-form__native-input"
      placeholder="rating"
    />
  </div>
  <div class="add-comment-form__field">
    <textarea
      name="description"
      class="add-comment-form__native-input"
      placeholder="description"
    ></textarea>
  </div>
  <div class="add-comment-form__field">
    <input
      type="file"
      name="preview"
      class="add-comment-form__btn add-comment-form__btn_upload"
    />
  </div>
  <div class="add-comment-form__field">
    <button class="add-comment-form__btn add-comment-form__btn_submit" type="submit">
      Add
    </button>
    <button class="add-comment-form__btn add-comment-form__btn_clear" type="reset">
      Clear
    </button>
  </div>
`;

export class AddCommentForm {
  constructor(root, onSuccessCallback) {
    this.root = root;
    this.onSuccessCallback = onSuccessCallback;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.formElement = document.createElement('form');
    this.formElement.classList.add('add-comment-form');
    this.formElement.innerHTML = formChildrenTemplate;
    this.formElement.addEventListener('submit', (e) => this.sendData(e));
    this.root.append(this.formElement);
  }

  sendData(e) {
    e.preventDefault();
    console.log(this);
    const formData = new FormData(this.formElement);
    fetch('https://boring-fe.herokuapp.com/movies', {
        method: 'POST',
        body: formData,
      })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('INSIDE FORM', data);
        this.onSuccessCallback(data);
      });
  }
}