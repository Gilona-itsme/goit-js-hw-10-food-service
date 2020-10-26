/** Импорт исходного массива */

import menuCardTpl from "../templates/food-menu.hbs";
import menuCards from "./menu.json";

console.log(menuCardTpl);

export const menuList = document.querySelector('.js-menu');
export const menuMarkUp = createMenuMarkUp(menuCards);
export default menuList.insertAdjacentHTML('beforeend', menuMarkUp);

function createMenuMarkUp(menuCards) {
    return menuCards.map(menuCardTpl).join('');
} 



