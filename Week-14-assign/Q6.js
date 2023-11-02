const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  };

  console.log('Below are the product details -');
  for (const key of Object.keys(productDetails)) {
        console.log(`${key}: ${productDetails[key]}`);
  }

//   const keys = Object.keys(productDetails);
//   for (let index = 0; index < keys.length; index++) {
//     console.log(`${keys[index]} : ${productDetails[keys[index]]}`);
//   }