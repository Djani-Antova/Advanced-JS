class CarDealership {
    constructor(name) {
      this.name = name;
      this.availableCars = [];
      this.soldCars = [];
      this.totalIncome = 0;
    }
    
    addCar(model, horsepower, price, mileage) {
      if (!model || typeof model !== "string" || !model.length ||
          typeof horsepower !== "number" || horsepower <= 0 ||
          typeof price !== "number" || price <= 0 ||
          typeof mileage !== "number" || mileage <= 0) {
        throw new Error("Invalid input!");
      }
  
      this.availableCars.push({
        model: model,
        horsepower: horsepower,
        price: price,
        mileage: mileage
      });
      return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    
    sellCar(model, desiredMileage) {
      const carIndex = this.availableCars.findIndex(c => c.model === model);
      if (carIndex === -1) {
        throw new Error(`${model} was not found!`);
      }
      const car = this.availableCars[carIndex];
      let soldPrice = car.price;
      const mileageDiff = car.mileage - desiredMileage;
      if (mileageDiff > 0) {
        if (mileageDiff <= 40000) {
          soldPrice *= 0.95;
        } else {
          soldPrice *= 0.9;
        }
      }
      this.availableCars.splice(carIndex, 1);
      this.soldCars.push({
        model: car.model,
        horsepower: car.horsepower,
        soldPrice: soldPrice
      });
      this.totalIncome += soldPrice;
      return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }
    
    currentCar() {
      if (!this.availableCars.length) {
        return "There are no available cars";
      }
      let result = "-Available cars:\n";
      for (const car of this.availableCars) {
        result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`;
      }
      return result;
    }
    
    // salesReport(criteria) {
    //   if (criteria !== "horsepower" && criteria !== "model") {
    //     throw new Error("Invalid criteria!");
    //   }
    //   let soldCars = this.soldCars;
    //   if (criteria === "horsepower") {
    //     soldCars = soldCars.sort((a, b) => b.horsepower - a.horsepower);
    //   } else if (criteria === "model") {
    //     soldCars = soldCars.sort((a, b) => a.model.localeCompare(b.model));
    //   }
    //   let result = `-${this.name} has

}
  