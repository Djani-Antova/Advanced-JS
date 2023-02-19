class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || typeof model !== 'string' || model.length === 0 ||
            typeof horsepower !== 'number' || horsepower <= 0 ||
            typeof price !== 'number' || price <= 0 ||
            typeof mileage !== 'number' || mileage <= 0) {
            throw new Error("Invalid input!");
        }

        const car = {
            model,
            horsepower,
            price: Number(price.toFixed(2)),
            mileage: Number(mileage.toFixed(2))
        };
        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const foundCar = this.availableCars.find(car => car.model === model);
        if (!foundCar) {
            throw new Error(`${model} was not found!`);
        }

        const { model: soldModel, horsepower, mileage, price } = foundCar;
        let soldPrice = price;
        const mileageDifference = mileage - desiredMileage;
        if (mileageDifference > 0) {
            if (mileageDifference <= 40000) {
                soldPrice *= 0.95;
            } else {
                soldPrice *= 0.9;
            }
        }

        this.availableCars = this.availableCars.filter(car => car.model !== model);
        this.soldCars.push({
            model: soldModel,
            horsepower,
            soldPrice: Number(soldPrice.toFixed(2))
        });
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }

        return "-Available cars:\n" + this.availableCars.map(car => {
            return `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;
        }).join("\n");
    }

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        
    }

}

