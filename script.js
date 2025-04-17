// empty basket
let basket = [];

// Standard delivery = true / pickUp = false
let delivery = true;
// deliveryCosts Standard 5
let deliveryCosts = 5;

function init() {
    renderAppetizers();
    renderSalads();
    renderPizza();
    renderPasta();
    renderBurger();
    renderDesserts();
}

// Template functions rendering Dishes 
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

//Check whether food is already in the shopping cart => yes => to be uploaded otherwise add to basket

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
        calcuationTotalOrder(indexDishes, menuCategories);
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
}

function removeDishFromBasket(indexDishes, menuCategories, indexBasket) {
    menuDishes[menuCategories][indexDishes].amount = 0;
    basket.splice(indexBasket, 1);
    if(basket.length === 0) {
        document.getElementById('basket-starter').classList.remove('d_none');
        document.getElementById('total-order-overview').classList.add('d_none');
    }
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

function calcuationTotalOrder(indexDishes, menuCategories) {
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
    const deliveryCostsRef = document.getElementById('deliveryPrice');
    const deliveryCosts = delivery ? 5 : 0;

    deliveryCostsRef.innerHTML = deliveryCosts.toFixed(2).replace(".", ",") + " €";
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
    document.getElementById('footer').style.display = 'block';
}

function basketReset() {
    basket = [];
    subtotal = 0;
    delivery = true;
}
