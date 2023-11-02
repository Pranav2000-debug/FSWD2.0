const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
  ];

function minMaxProd(products){
    let minProd = products[0];
    let maxProd = products[0];

    for (let i = 0; i < products.length; i++) {
        if(products[i].price > maxProd.price)
        {
            maxProd = products[i];
        }
        if(products[i].price < minProd.price){
            minProd = products[i];
        }
    }
    console.log(`The product with maximum ammount is ${maxProd.name} which is priced at Rs. ${maxProd.price}`);
    console.log(`The product with maximum ammount is ${minProd.name} which is priced at Rs. ${minProd.price}`);
}

minMaxProd(products);