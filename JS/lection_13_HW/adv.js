const createAdv = ({
  id,
  img,
  title,
  description
}) => {
  return `
    <div class="col-4 col-md-6 col-sm-12 col-xs-12">
      <div class="adv-card" id="${id}">
        <figure class="adv-card__pic">
          <img
            class="adv-card__img"
            src="${img}"
            alt="adv-image"
          />
        </figure>
        <div class="adv-card__text-content_overlay"></div>
        <div class="adv-card__text-content">
          <h2 class="adv-card__title">${title}</h2>
          <div class="adv-card__description">${description}</div>
        </div>
      </div>
    </div>
  `;
};

export {
  createAdv
};