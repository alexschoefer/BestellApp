function init() {
    renderAppetizers();
}

function renderAppetizers() {
    let appetizersRef = document.getElementById('appetizers-dishes');
    appetizersRef.innerHTML="";

    for (let indexDishes = 0; indexDishes < menuDishes.appetizers.length; indexDishes++) {
        appetizersRef.innerHTML += getDishesTemplate(indexDishes);
    }
}