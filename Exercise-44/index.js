let sandwiches = ["Vegetable", "Grilled Cheese", "Potato"];

function item(...sandwiches) {
    for (i of sandwiches) {
        console.log(`${i} SandWich`);
    }
}

item(...sandwiches);
item(...sandwiches, "Beef", "Egg");