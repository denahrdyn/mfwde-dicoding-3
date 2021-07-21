import FavoriteResto from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="main">
      <div class="main-header">
          <h2 class="resto-label">Favorite Restaurant</h2>
          <h3 class="resto-empty-label" id="empty">Ops... Your Favorite Restaurant List is Empty</h2>
      </div>
      <div class="main-content" id="resto-list"></div>
  </div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteResto.getAllRestaurant();
    const restoList = document.querySelector('#resto-list');
    const emptyLabel = document.querySelector('#empty');

    if (restaurant.length !== 0) {
      restaurant.forEach((resto) => {
        restoList.innerHTML += createRestoItemTemplate(resto);
      });
      emptyLabel.style.display = 'none';
    }
  },
};

export default Favorite;
