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
        appetizersRef.innerHTML += getDishesAppetizersTemplate(indexDishes);
    }
}

function renderSalads() {
    let saladsRef = document.getElementById('salads-dishes');
    saladsRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.appetizers.length; indexDishes++) {
        saladsRef.innerHTML += getDishesSaladsTemplate(indexDishes);
    }
}

function renderPizza() {
    let pizzaRef = document.getElementById('pizza-dishes');
    pizzaRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.pizza.length; indexDishes++) {
        pizzaRef.innerHTML += getDishesPizzaTemplate(indexDishes);
    }
}

function renderPasta() {
    let pastaRef = document.getElementById('pasta-dishes');
    pastaRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.pasta.length; indexDishes++) {
        pastaRef.innerHTML += getDishesPastaTemplate(indexDishes);
    }
}

function renderBurger() {
    let burgerRef = document.getElementById('burger-dishes');
    burgerRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.burger.length; indexDishes++) {
        burgerRef.innerHTML += getDishesBurgerTemplate(indexDishes);
    }
}

function renderDesserts() {
    let dessertsRef = document.getElementById('dessert-dishes');
    dessertsRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.desserts.length; indexDishes++) {
        dessertsRef.innerHTML += getDishesDessertsTemplate(indexDishes);
    }
}