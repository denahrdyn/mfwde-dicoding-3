/* eslint-disable no-underscore-dangle */
import FavoriteResto from '../data/favorite-resto-idb';
import { createLikeButton, createLikedButton } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteResto.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButton();

    const likeBtn = document.querySelector('#likeButton');
    likeBtn.addEventListener('click', async () => {
      await FavoriteResto.putRestaurant(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButton();

    const likeBtn = document.querySelector('#likeButton');
    likeBtn.addEventListener('click', async () => {
      await FavoriteResto.deleteRestaurant(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
