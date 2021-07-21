/* eslint-disable no-undef */
import FavoriteResto from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking a restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteResto.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteResto.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
  });

  it('shoulld be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteResto.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllRestaurant()).toEqual([]);
  });
});
