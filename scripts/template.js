function getDishesAppetizersTemplate(indexDishes) {
    return `
    <div class="single-dish-selection space-between">
        <div class="dish-information">
            <h3>${menuDishes.appetizers[indexDishes].name}</h3>
            <p>${menuDishes.appetizers[indexDishes].description}</p>
            <div class="dish-price">${menuDishes.appetizers[indexDishes].price.toFixed(2).replace(".",",").concat(" €")}</div>
        </div>
        <div><img id="add-to-Basket"src="./assets/icons/add-to-basket.png" alt="add-to-basket"></div>
    </div>    
        `
}

function getDishesSaladsTemplate(indexDishes) {
    return `
    <div class="single-dish-selection space-between">
        <div class="dish-information">
            <h3>${menuDishes.salads[indexDishes].name}</h3>
            <p>${menuDishes.salads[indexDishes].description}</p>
            <div class="dish-price">${menuDishes.salads[indexDishes].price.toFixed(2).replace(".",",").concat(" €")}</div>
        </div>
        <div><img id="add-to-Basket"src="./assets/icons/add-to-basket.png" alt="add-to-basket"></div>
    </div>    
        `
}

function getDishesPizzaTemplate(indexDishes) {
    return `
    <div class="single-dish-selection space-between">
        <div class="dish-information">
            <h3>${menuDishes.pizza[indexDishes].name}</h3>
            <p>${menuDishes.pizza[indexDishes].description}</p>
            <div class="dish-price">${menuDishes.pizza[indexDishes].price.toFixed(2).replace(".",",").concat(" €")}</div>
        </div>
        <div><img id="add-to-Basket"src="./assets/icons/add-to-basket.png" alt="add-to-basket"></div>
    </div>    
        `
}

function getDishesPastaTemplate(indexDishes) {
    return `
    <div class="single-dish-selection space-between">
        <div class="dish-information">
            <h3>${menuDishes.pasta[indexDishes].name}</h3>
            <p>${menuDishes.pasta[indexDishes].description}</p>
            <div class="dish-price">${menuDishes.pasta[indexDishes].price.toFixed(2).replace(".",",").concat(" €")}</div>
        </div>
        <div><img id="add-to-Basket"src="./assets/icons/add-to-basket.png" alt="add-to-basket"></div>
    </div>    
        `
}

function getDishesBurgerTemplate(indexDishes) {
    return `
    <div class="single-dish-selection space-between">
        <div class="dish-information">
            <h3>${menuDishes.burger[indexDishes].name}</h3>
            <p>${menuDishes.burger[indexDishes].description}</p>
            <div class="dish-price">${menuDishes.pasta[indexDishes].price.toFixed(2).replace(".",",").concat(" €")}</div>
        </div>
        <div><img id="add-to-Basket"src="./assets/icons/add-to-basket.png" alt="add-to-basket"></div>
    </div>    
        `
}

function getDishesDessertsTemplate(indexDishes) {
    return `
    <div class="single-dish-selection space-between">
        <div class="dish-information">
            <h3>${menuDishes.desserts[indexDishes].name}</h3>
            <p>${menuDishes.desserts[indexDishes].description}</p>
            <div class="dish-price">${menuDishes.desserts[indexDishes].price.toFixed(2).replace(".",",").concat(" €")}</div>
        </div>
        <div><img id="add-to-Basket"src="./assets/icons/add-to-basket.png" alt="add-to-basket"></div>
    </div>    
        `
}