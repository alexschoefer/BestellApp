function getDishesSingleTemplate(indexDishes,menuCategories) {
    return `
    <div class="single-dish-selection space-between">
        <div class="dish-information">
            <h3>${menuDishes[menuCategories][indexDishes].name}</h3>
            <p>${menuDishes[menuCategories][indexDishes].description}</p>
            <div class="dish-price">${menuDishes[menuCategories][indexDishes].price.toFixed(2).replace(".",",").concat(" €")}</div>
        </div>
        <div><img onclick="addSelectedDishToBasket(${indexDishes},'${menuCategories}')" id="add-to-Basket"src="./assets/icons/add-to-basket.png" alt="add-to-basket"></div>
    </div>    
        `
}

function getBasketTemplate(indexDishes,menuCategories, indexBasket) {
    let dish = menuDishes[menuCategories][indexDishes];
    let icon = dish.amount === 1 ? "trash.png" : "minus.png";
    return `
    <div id="selected-dishes-basket">
        <div class="selected-dishes-basket-information">
            <h3>${menuDishes[menuCategories][indexDishes].name}</h3>
            <div class="dish-price">${(menuDishes[menuCategories][indexDishes].amount * menuDishes[menuCategories][indexDishes].price).toFixed(2).replace(".",",").concat(" €")} </div>
        </div>
        <div id="selected_amount_basket">
            <div><img onclick="trashDecreaseButtonBasket(${indexDishes},'${menuCategories}', '${indexBasket}')" id="trashDecreaseButtonBasket" src="./assets/icons/${icon}" alt="trashDecreaseButtonBasket"></div>
            <div id="basket_amount">${menuDishes[menuCategories][indexDishes].amount}</div>
            <div><img onclick="increaseOrderQuantity(${indexDishes},'${menuCategories}')" id="increaseButtonBasket" src="./assets/icons/plus.png" alt="increaseButtonBasket"></div>
            
        </div> 
    </div>
    ` 
}