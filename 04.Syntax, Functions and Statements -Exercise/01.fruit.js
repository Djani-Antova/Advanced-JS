function fruit(fruit, grams, price) {
    let kilo = grams / 1000;
    let sum = price * kilo;
    console.log(`I need $${sum.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${fruit}.`);
    
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)