function Product(name, category, price, stock) {
  this.name = name;
  this.category = category;
  this.price = price;
  this.stock = stock;
}

function Inventory() {
  this.inventoryArr = [];
}

Inventory.prototype.addProduct = function (product) {
  if (!(product instanceof Product)) {
    console.log("not a valid product");
    return;
  }
  this.inventoryArr.push(product);
  console.log(`Added ${product.name} to the inventory`);
  console.log(this.inventoryArr);
};

Inventory.prototype.deleteProduct = function (prodName) {
  const prodToDel = this.inventoryArr.findIndex((prod) => {
    return prod.name === prodName;
  });
  if (prodToDel !== -1) {
    console.log(prodToDel);
    this.inventoryArr.splice(prodToDel, 1);
    console.log(`${prodName} deleted`);
    console.log(this.inventoryArr);
  } else {
    console.log("product not found");
  }
};
const inventory = new Inventory();

const product1 = new Product("laptop", "electronics", 899, 10);
const product2 = new Product("phone", "electronics", 599, 8);

inventory.addProduct(product1); // pass
inventory.addProduct(product2); // pass
inventory.deleteProduct("laptop");  // pass
inventory.deleteProduct("mango"); // error
inventory.addProduct('prd1') // error
