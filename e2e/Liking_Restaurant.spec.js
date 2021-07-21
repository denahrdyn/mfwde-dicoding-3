/* eslint-disable no-undef */
Feature('Liking Restaurant');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'Ops... Your Favorite Restaurant List is Empty';

Scenario('Showing empty like restaurant', ({ I }) => {
  I.see(firstCondition, '.resto-empty-label');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.resto-empty-label');

  I.amOnPage('/');
  I.seeElement('#resto-list');
  I.seeElement('.resto__selector');
  I.seeElement('.card');
  I.seeElement('.card-title');

  const firstResto = locate('.card').first();
  const firstRestoTitle = await I.grabTextFrom('.card-title');

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-list');
  I.seeElement('.resto__selector');
  I.seeElement('.card');
  I.seeElement('.card-title');

  const likeRestoTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestoTitle, likeRestoTitle);
});

Scenario('UnLiking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.resto-empty-label');

  I.amOnPage('/');
  I.seeElement('#resto-list');
  I.seeElement('.resto__selector');
  I.seeElement('.card');
  I.seeElement('.card-title');

  const firstResto = locate('.card').first();
  const firstRestoTitle = await I.grabTextFrom('.card-title');

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-list');
  I.seeElement('.card');
  I.seeElement('.card-title');

  const likeResto = locate('.card').first();
  const likeRestoTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestoTitle, likeRestoTitle);

  I.click(likeResto);

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-empty-label');

  const noFavResto = await I.grabTextFrom('.resto-empty-label');

  assert.strictEqual(noFavResto, firstCondition);
});
