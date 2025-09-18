// <!-- Logical Operators Example -->

let totalPrice;
let amazonPrime;

if (!(totalPrice > 20 || amazonPrime === true)) {
    // free shipping
} else {
    // no shipping free
}


// <!-- Conditional If Else Example -->

let totalPrice = 19;
let shippingCost;

if (totalPrice > 20) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}
if (totalPrice <= 20) {
    shippingCost = 5;
} else {
    shippingCost = 0;
}



// <!-- Function Example -->
let totalPrice = 19;

if (totalPrice  <= 10) {
    shippingCost = 5
} else if (totalPrice  <= 20) {
    shippingCost = 3
} else {
    shippingCost = 0
}

console.log("Shipping cost for you is $ " + shippingCost);



// <!-- Function Parameters Example -->

let totalPrice;

function calculateShippingCost(totalPriceParam) {
    let shippingCost;


     if (totalPriceParam  <= 10) {
        shippingCost = 5
    } else if (totalPriceParam  <= 20) {
        shippingCost = 3
        } else {
    shippingCost = 0
    }


    console.log("Shipping cost for you is $ {shippingCost}");
    console.log('for total price of $ " {totalPriceParam}');

}

//user start shopping
totalPrice = 10;
//more items added to shopping cart
totalPrice= 19
//ready to order
calculateShippingCost(totalPrice)



// <!-- Function Const Case Usage Example -->
const standardShippingCost = 5;
const discountedShippingCost = 4 ;


let totalPrice;

function calculateShippingCost(totalPriceParam) {
    let shippingCost;


     if (totalPriceParam  <= 10) {
        shippingCost = discountedShippingCost
    } else if (totalPriceParam  <= 20) {
        shippingCost = discountedShippingCost
        } else {
    shippingCost = 0
    }


    console.log("Shipping cost for you is $ {shippingCost}");
    console.log('for total price of $ " {totalPriceParam}');
    console.log('------------');

}

//user start shopping
totalPrice = 10;
calculateShippingCost(totalPrice)

//more items added to shopping cart
totalPrice= 19
//ready to order
calculateShippingCost(totalPrice)

//add anothet thing to cart
totalPrice= 24
calculateShippingCost(totalPrice)

//place order










