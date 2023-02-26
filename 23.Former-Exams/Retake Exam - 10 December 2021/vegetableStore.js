class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    let uniqueProducts = [];
    for (let vegetable of vegetables) {
      let [type, quantity, price] = vegetable.split(" ");
      let product = this.availableProducts.find(p => p.type === type);
      if (product) {
        product.quantity += parseFloat(quantity);
        if (product.price < parseFloat(price)) {
          product.price = parseFloat(price);
        }
      } else {
        this.availableProducts.push({ type, quantity: parseFloat(quantity), price: parseFloat(price) });
        uniqueProducts.push(type);
      }
    }
    return `Successfully added ${[...new Set(uniqueProducts)].join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0.00;
    for (let selectedProduct of selectedProducts) {
      let [type, quantity] = selectedProduct.split(" ");
      let product = this.availableProducts.find(p => p.type === type);
      if (!product) {
        throw `${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`;
      }
      if (product.quantity < parseFloat(quantity)) {
        throw `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`;
      }
      totalPrice += parseFloat(quantity) * product.price;
      product.quantity -= parseFloat(quantity);
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
  }

  rottingVegetable(type, quantity) {
    let product = this.availableProducts.find(p => p.type === type);
    if (!product) {
      throw `${type} is not available in the store.`;
    }
    if (product.quantity <= quantity) {
      product.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }
    product.quantity -= quantity;
    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    let availableProducts = this.availableProducts.sort((a, b) => a.price - b.price);
    let output = "Available vegetables:\n";
    for (let product of availableProducts) {
      output += `${product.type}-${product.quantity.toFixed(2)}-${product.price.toFixed(2)}\n`;
    }
    output += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
    return output;
  }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

