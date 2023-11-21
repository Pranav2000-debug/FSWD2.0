const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 1499,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 499,
    },
];

const exRate = 80;
function convertToInr(usdPrice) {
    return usdPrice * exRate;
}

// returns a new object for the items array
const itemsInINR = items.map((item) => ({
    // spread operator
    ...item,
    priceINR: convertToInr(item.priceUSD)
}));
console.log(itemsInINR);