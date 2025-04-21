let basket = [];

let deliveryCosts = 5;
let isDelivery = true;

function init() {
    renderMenu("appetizers", "appetizers-dishes");
    renderMenu("salads", "salads-dishes");
    renderMenu("pizza", "pizza-dishes");
    renderMenu("pasta", "pasta-dishes");
    renderMenu("burger", "burger-dishes");
    renderMenu("desserts", "dessert-dishes");
}

function renderMenu(menuCategories, indexDishesID) {
    let renderMenuRef = document.getElementById(indexDishesID);
    renderMenuRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < menuDishes[menuCategories].length; indexDishes++) {
        renderMenuRef.innerHTML += getDishesSingleTemplate(indexDishes, menuCategories);
    }
}

function addSelectedDishToBasket(indexDishes, menuCategories) {    
    if (menuDishes[menuCategories][indexDishes].amount == 0) {
        basket.push({ menuCategorie: menuCategories, index: indexDishes });
        document.getElementById('basket-starter').classList.add('d_none');
        document.getElementById('total-order-overview').classList.remove('d_none');
    }
    increaseOrderQuantity(indexDishes, menuCategories);
    showTotalPrice(deliveryCosts);
}

function renderBasket(isDelivery) {
    let basketRef = document.getElementById('dishes-selected');
    basketRef.innerHTML = "";
    subtotal = 0;


    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        let indexDishes = basket[indexBasket].index;
        let menuCategories = basket[indexBasket].menuCategorie;
        basketRef.innerHTML += getBasketTemplate(indexDishes, menuCategories, indexBasket);
        calculationTotalOrder(indexDishes, menuCategories);
    }
    getDeliveryCosts(isDelivery);
    subtotalPrice();
}

function trashDecreaseButtonBasket(indexDishes, menuCategories, indexBasket) {
    if (menuDishes[menuCategories][indexDishes].amount > 1) {
        decreaseOrderQuantity(indexDishes, menuCategories);
    }
    else if (menuDishes[menuCategories][indexDishes].amount == 1) {
        removeDishFromBasket(indexDishes, menuCategories, indexBasket, isDelivery);
    }
}

function removeDishFromBasket(indexDishes, menuCategories, indexBasket) {
    menuDishes[menuCategories][indexDishes].amount = 0;
    basket.splice(indexBasket, 1);
    if (basket.length === 0) {
        document.getElementById('basket-starter').classList.remove('d_none');
        document.getElementById('total-order-overview').classList.add('d_none');
    }
    renderBasket(isDelivery);   
}

function increaseOrderQuantity(indexDishes, menuCategories) {
    menuDishes[menuCategories][indexDishes].amount++;
    showTotalPrice();
    renderBasket(isDelivery);

}

function decreaseOrderQuantity(indexDishes, menuCategories) {
    menuDishes[menuCategories][indexDishes].amount--;
    renderBasket(isDelivery);
}

function calculationTotalOrder(indexDishes, menuCategories) {
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

function getDeliveryCosts(isDelivery) {
    let deliveryCostsRef = document.getElementById('deliveryPrice');
    let deliveryCosts = isDelivery ? 5 : 0; 
    deliveryCostsRef.innerHTML = deliveryCosts.toFixed(2).replace(".", ",") + " €";
    showTotalPrice(deliveryCosts);
}

function toggleDeliverySelection(newIsDelivery) {
    isDelivery = newIsDelivery; 
    document.getElementById('pickup').classList.toggle('delivery-pickup-seletion', !isDelivery);
    document.getElementById('delivery').classList.toggle('delivery-pickup-seletion', isDelivery);
    renderBasket(isDelivery);
}

function completeOrder() {
    document.getElementById('basket-starter').classList.add('d_none');
    document.getElementById('delivery-pick-up-options').classList.add('d_none');
    document.getElementById('order-confirmation').classList.remove('d_none');
    document.getElementById('dishes-selected').classList.add('d_none');
    document.getElementById('total-order-overview').classList.add('d_none');
    basketReset();
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
    document.getElementById('footer').style.display = 'flex';
}

function basketReset() {
    basket = [];
    subtotal = 0;
    isDelivery = true;
}
