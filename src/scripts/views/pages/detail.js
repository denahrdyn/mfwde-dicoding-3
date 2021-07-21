/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/resto-source';
import EXTRA from '../../DATA';

import {
  createCustomerReview,
  createDrinksMenu,
  createFoodsMenu,
  createRestoCategories,
  createRestoDetailTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="detail-resto" id="detail-resto"></div>
      <div class="main">
        <div class="main-header">
          <div class="food-menu">
            <h1>Foods</h1>
            <div class="foods" id="food-menu"></div>
          </div>
          <div class="drink-menu">
            <h1>Drinks</h1>
            <div class="drinks" id="drink-menu"></div>
          </div>
          <div class="costumer-review">
            <h1>Review</h1>
              <div class="review" id="review"></div>
            </div>
        </div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailResto = await RestoDBSource.detailResto(url.id);
    const results = detailResto.restaurant;

    const restoOverview = document.querySelector('#detail-resto');
    restoOverview.innerHTML += createRestoDetailTemplate(detailResto);

    const infoCategories = document.querySelector('#overview-categories');
    results.categories.forEach((category) => {
      infoCategories.innerHTML += createRestoCategories(category);
    });

    const foodsMenu = document.querySelector('#food-menu');
    results.menus.foods.forEach((food, index = 0) => {
      foodsMenu.innerHTML += createFoodsMenu(food, EXTRA.foods[index]);
    });

    const DrinksMenu = document.querySelector('#drink-menu');
    results.menus.drinks.forEach((drink, index = 0) => {
      DrinksMenu.innerHTML += createDrinksMenu(drink, EXTRA.drinks[index]);
    });

    const costumerReview = document.querySelector('#review');
    results.customerReviews.forEach((review) => {
      costumerReview.innerHTML += createCustomerReview(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: results.id,
        name: results.name,
        city: results.city,
        rating: results.rating,
        address: results.address,
        pictureId: results.pictureId,
        description: results.description,
      },
    });
  },
};

export default Detail;
