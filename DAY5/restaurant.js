function orderDish(dish, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Dish "${dish}" is ready.`);
            resolve(`Enjoy your ${dish}!`);
        }, delay);
    });
}


//BY USING THEN:-
orderDish('Pizza', 1000)
    .then(() => orderDish('Pasta', 2000))
    .then(() => orderDish('Salad', 3000))
    .then(() => {
        console.log("All dishes are served!");
    })
    .catch((error) => {
        console.error("Error in serving:", error);
    });
// BY USING ASYNC AWAIT

    // async function orderAllDishes() {
    //     try {
    //         await orderDish('Pizza', 2000);
    //         await orderDish('Pasta', 3000);
    //         await orderDish('Salad', 1000);
    //         console.log("All dishes are served!");
    //     } catch (error) {
    //         console.error("Error in serving:", error);
    //     }
    // }
    
    
    // orderAllDishes();
    
