class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
 
    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }
 
        this.products.push({
            product,
            quantity,
        });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }
 
    quantityCheck(product, minimalQuantity) {
        const foundProduct = this.products.find((productName) => productName.product === product);
        if (foundProduct === undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        if (minimalQuantity <= foundProduct.quantity) {
            return `You have enough from product ${product}.`;
        }
 
        // const currentProductQuantity = foundProduct.quantity
        // foundProduct.quantity = minimalQuantity
        // const difference = foundProduct.quantity - currentProductQuantity
        const difference = minimalQuantity - foundProduct.quantity;
        foundProduct.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`;
    }
 
    sellProduct(product) {
        const foundProduct = this.products.find((productName) => productName.product === product);
        if (foundProduct === undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        foundProduct.quantity--;
        this.sales.push({ product, quantity: 1 });
        return `The ${product} has been successfully sold.`;
    }
 
    revision() {
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }
        // const soldProductsQuantity = 0
        // this.sales.forEach(ObjectProduct => soldProductsQuantity += ObjectProduct.quantity)
        const soldProductsQuantity = this.sales.length;
        const result = [
            `You sold ${soldProductsQuantity} products today!`,
            'Products in the warehouse:',
        ];
        this.products.forEach((p) => result.push(`${p.product}-${p.quantity} more left`));
        return result.join('\n');
        //         return `You sold ${soldProductsQuantity} products today!
        // Products in the warehouse:
        // ${this.products.map(p => `${p.product}-${p.quantity} more left`).join('\n')}
        // `
    }
}