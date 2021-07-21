/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
    <div class="detail-ovw-resto">
        <div class="main">
            <div class="detail-header-title">
                <ul>
                    <li><h3 class="header-title">Home </h3></li>
                    <li><p class="title-slash">/</p></li>
                    <li><h3 class="header-title">Restaurant</h3></li>
                    <li><p class="title-slash">/</p></li>
                    <li><p class="detail-h-title">${resto.restaurant.name}</p></li>
                </ul>
            </div>
        </div>
        <div class="header-resto">
            <div class="main">
                <div class="main-header">
                    <div class="detail-ovw-image">
                        <img data-src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" class="image-ovw lazyload" alt="${resto.restaurant.name}">
                    </div>
                    <div class="detail-ovw-info">
                        <h1 class="ovw-title">${resto.restaurant.name}</h1>
                        <div class="ovw-categories" id="overview-categories"></div>
                        <div class="ovw-subtitle">
                            <div class="ovw-rating"><i class="fas fa-star"></i>${resto.restaurant.rating}</div>
                            <div class="ovw-city"><i class="fas fa-map-marker-alt"></i>${resto.restaurant.city}</div>
                        </div>
                        <div class="ovw-address">
                            <h3>Address: </h3>
                            <p>${resto.restaurant.address}</p>
                        </div>
                        <p class="ovw-description">${resto.restaurant.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const createRestoCategories = (category) => `
    <span> ${category.name} </span>
`;

const createRestoItemTemplate = (resto) => `
    <div class="card">
        <div class="card-img">
            <a href="#/detail/${resto.id}" class="resto__selector">
                <img class="card-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
            </a>
        </div>
        <div class="rate"><i class="fas fa-star"></i>${resto.rating}</div>
        <div class="card-content">
            <h1 class="card-title">
                <a href="#/detail/${resto.id}">${resto.name}</a>
            </h1>
            <h3 class="card-subtitle">
                <i class="fas fa-map-marker-alt"></i>${resto.city}
            </h3>
            <p class="card-desc">${resto.description.slice(0, 140)}...</p>
        </div>
    </div>
`;

const createFoodsMenu = (food, dummy) => `
    <div class="food-card">
        <div class="food-image">
            <img data-src="${dummy.picture}" class="lazyload" alt="${food.name}">
        </div>
        <div class="food-info">
            <h2>${food.name}</h2>
            <div class="food-subtitle">
                <div class"rating"><i class="fas fa-star"></i>${dummy.rating}</div>
                <div class="time"><i class="far fa-clock"></i> ${dummy.time} Minutes</div>
            </div>
            <div class="food-desc">
                <p>${dummy.description}</p>
            </div>
        </div>
    </div>
`;

const createDrinksMenu = (drink, dummy) => `
<div class="drink-card">
    <div class="drink-image">
        <img data-src="${dummy.picture}" class="lazyload" alt="${drink.name}">
    </div>
    <div class="drink-info">
        <h2>${drink.name}</h2>
        <div class="drink-subtitle">
            <div class"rating"><i class="fas fa-star"></i>${dummy.rating}</div>
            <div class="time"><i class="far fa-clock"></i> ${dummy.time} Minutes</div>
        </div>
        <div class="drink-desc">
            <p>${dummy.description}</p>
        </div>
    </div>
</div>
`;

const createCustomerReview = (review) => `
    <div class="review-card">
        <div class="review-image">
            <img data-src="../../../../images/customer-review.png" class="lazyload">
        </div>
        <div class="review-info">
            <h2>${review.name}</h2>
            <p class="date"> ${review.date} </p>
            <p>${review.review}</p>
        </div>
    </div>
`;

const createLikeButton = () => `
    <button aria-label="like this resto" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButton = () => `
    <button aria-label="unlike this resto" id="likeButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestoItemTemplate,
  createRestoCategories,
  createRestoDetailTemplate,
  createFoodsMenu,
  createDrinksMenu,
  createCustomerReview,
  createLikeButton,
  createLikedButton,
};
