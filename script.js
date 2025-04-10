let basket = [];

let totalDishPrice = 0;

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
    appetizersRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.appetizers.length; indexDishes++) {
        appetizersRef.innerHTML += getDishesAppetizersTemplate(indexDishes,"appetizers");
    }
}

function renderSalads() {
    let saladsRef = document.getElementById('salads-dishes');
    saladsRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.appetizers.length; indexDishes++) {
        saladsRef.innerHTML += getDishesSaladsTemplate(indexDishes, "salads");
    }
}

function renderPizza() {
    let pizzaRef = document.getElementById('pizza-dishes');
    pizzaRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.pizza.length; indexDishes++) {
        pizzaRef.innerHTML += getDishesPizzaTemplate(indexDishes,"pizza");
    }
}

function renderPasta() {
    let pastaRef = document.getElementById('pasta-dishes');
    pastaRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.pasta.length; indexDishes++) {
        pastaRef.innerHTML += getDishesPastaTemplate(indexDishes,"pasta");
    }
}

function renderBurger() {
    let burgerRef = document.getElementById('burger-dishes');
    burgerRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.burger.length; indexDishes++) {
        burgerRef.innerHTML += getDishesBurgerTemplate(indexDishes,"burger");
    }
}

function renderDesserts() {
    let dessertsRef = document.getElementById('dessert-dishes');
    dessertsRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.desserts.length; indexDishes++) {
        dessertsRef.innerHTML += getDishesDessertsTemplate(indexDishes, "desserts");
    }
}

function addSelectedDishToBasket(indexDishes,menuCategories) {    
   

    if(menuDishes[menuCategories][indexDishes].amount == 0){
 
        basket.push({menuCategorie: menuCategories, index: indexDishes});
        document.getElementById('basket-starter').classList.add('d_none');

    }
    
    increaseOrderQuantity(indexDishes,menuCategories);
}

function renderBasket() {
    let basketRef = document.getElementById('dishes-selected');
    basketRef.innerHTML="";

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        let indexDishes = basket[indexBasket].index;
        let menuCategories = basket[indexBasket].menuCategorie;
        basketRef.innerHTML += getBasketTemplate(indexDishes,menuCategories);
        calucationTotalDishPrice(indexDishes,menuCategories);   
    }
}

function increaseOrderQuantity(indexDishes,menuCategories) {
    menuDishes[menuCategories][indexDishes].amount++;
    renderBasket();
}

function calucationTotalDishPrice(indexDishes,menuCategories) {
    totalDishPrice = totalDishPrice + (menuDishes[menuCategories][indexDishes].price * menuDishes[menuCategories][indexDishes].amount);   
}