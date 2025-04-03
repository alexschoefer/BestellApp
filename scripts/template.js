function getDishesTemplate(indexDishes) {
    return `
        <div>
            <h3>${menuDishes.appetizers[indexDishes].name}</h3>
            <p>${menuDishes.appetizers[indexDishes].description}</p>
            </div>
        `
}