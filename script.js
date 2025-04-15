let basket = [];

let delivery = true;

function init() {
    renderAppetizers();
    renderSalads();
    renderPizza();
    renderPasta();
    renderBurger();
    renderDesserts();
}

function renderAppetizers() {
    let appetizersRef = document.getElementById('appetizers-dishes');
    appetizersRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < menuDishes.appetizers.length; indexDishes++) {
        appetizersRef.innerHTML += getDishesSingleTemplate(indexDishes, "appetizers");
    }
}

function renderSalads() {
    let saladsRef = document.getElementById('salads-dishes');
    saladsRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < menuDishes.appetizers.length; indexDishes++) {
        saladsRef.innerHTML += getDishesSingleTemplate(indexDishes, "salads");
    }
}

function renderPizza() {
    let pizzaRef = document.getElementById('pizza-dishes');
    pizzaRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < menuDishes.pizza.length; indexDishes++) {
        pizzaRef.innerHTML += getDishesSingleTemplate(indexDishes, "pizza");
    }
}

function renderPasta() {
    let pastaRef = document.getElementById('pasta-dishes');
    pastaRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < menuDishes.pasta.length; indexDishes++) {
        pastaRef.innerHTML += getDishesSingleTemplate(indexDishes, "pasta");
    }
}

function renderBurger() {
    let burgerRef = document.getElementById('burger-dishes');
    burgerRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < menuDishes.burger.length; indexDishes++) {
        burgerRef.innerHTML += getDishesSingleTemplate(indexDishes, "burger");
    }
}

function renderDesserts() {
    let dessertsRef = document.getElementById('dessert-dishes');
    dessertsRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < menuDishes.desserts.length; indexDishes++) {
        dessertsRef.innerHTML += getDishesSingleTemplate(indexDishes, "desserts");
    }
}

function addSelectedDishToBasket(indexDishes, menuCategories) {
    if (menuDishes[menuCategories][indexDishes].amount == 0) {
        basket.push({ menuCategorie: menuCategories, index: indexDishes });
        document.getElementById('basket-starter').classList.add('d_none');
        document.getElementById('total-order-overview').classList.remove('d_none');
    }

    increaseOrderQuantity(indexDishes, menuCategories);
    showTotalPrice();
}

function renderBasket() {
    let basketRef = document.getElementById('dishes-selected');
    basketRef.innerHTML = "";
    subtotal = 0;

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        let indexDishes = basket[indexBasket].index;
        let menuCategories = basket[indexBasket].menuCategorie;
        basketRef.innerHTML += getBasketTemplate(indexDishes, menuCategories, indexBasket);
        calucationTotalOrder(indexDishes, menuCategories);
    }
    getDeliveryCosts();
    subtotalPrice();
}

function trashDecreaseButtonBasket(indexDishes, menuCategories, indexBasket) {
    if (menuDishes[menuCategories][indexDishes].amount > 1) {
        decreaseOrderQuantity(indexDishes, menuCategories);
    }
    else if (menuDishes[menuCategories][indexDishes].amount == 1) {
        removeDishFromBasket(indexDishes, menuCategories, indexBasket);
    }
    showTotalPrice();
}

function removeDishFromBasket(indexDishes, menuCategories, indexBasket) {
    menuDishes[menuCategories][indexDishes].amount = 0;
    basket.splice(indexBasket, 1);
    renderBasket();
}

function increaseOrderQuantity(indexDishes, menuCategories) {
    menuDishes[menuCategories][indexDishes].amount++;
    showTotalPrice();
    renderBasket();

}

function decreaseOrderQuantity(indexDishes, menuCategories) {
    menuDishes[menuCategories][indexDishes].amount--;
    renderBasket();
}

function calucationTotalOrder(indexDishes, menuCategories) {
    subtotal = subtotal + (menuDishes[menuCategories][indexDishes].price * menuDishes[menuCategories][indexDishes].amount);

}

function showTotalPrice(deliveryCosts) {
    let totalPriceRef = document.getElementById('total');
    if (deliveryCosts >= 0) {
        totalPriceRef.innerHTML = (subtotal + deliveryCosts).toFixed(2).replace(".", ",").concat(" €");
    }
}

function subtotalPrice() {
    let subTotalPriceRef = document.getElementById('subtotal');
    subTotalPriceRef.innerHTML = subtotal.toFixed(2).replace(".", ",").concat(" €");
}

function getDeliveryCosts() {
    let getDeliveryCostsRef = document.getElementById('deliveryPrice');
    let deliveryCosts = 5;
    if (delivery === true) {
        deliveryCosts = 5;
    } else {
        deliveryCosts = 0;
    }
    getDeliveryCostsRef.innerHTML = deliveryCosts.toFixed(2).replace(".", ",").concat(" €");
    showTotalPrice(deliveryCosts);

}

function changeFromDeliveryToPickUp() {
    if (basket.length > 0) {
        delivery = false;
        document.getElementById('pickup').classList.add('delivery-pickup-seletion')
        document.getElementById('delivery').classList.remove('delivery-pickup-seletion');
        getDeliveryCosts();
    }
}

function changeFromPickUpToDelivery() {
    if (basket.length > 0) {
        delivery = true;
        document.getElementById('pickup').classList.remove('delivery-pickup-seletion')
        document.getElementById('delivery').classList.add('delivery-pickup-seletion');
        getDeliveryCosts();
    }
}

function completeOrder() {
    document.getElementById('basket-starter').classList.add('d_none');
    document.getElementById('delivery-pick-up-options').classList.add('d_none');
    document.getElementById('order-confirmation').classList.remove('d_none');
    document.getElementById('dishes-selected').classList.add('d_none');
    document.getElementById('total-order-overview').classList.add('d_none');

}

function openBasketOverlay() {
    document.getElementById('basket-container').style.display = 'block';
    document.getElementById('basket-container-overlay-btn').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
}

function closeBasketOverlay() {
    document.getElementById('basket-container').style.display = 'none';
    document.getElementById('basket-container-overlay-btn').style.display = 'block';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('footer').style.display = 'block';
}
