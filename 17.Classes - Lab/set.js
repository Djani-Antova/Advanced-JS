
let numbers = new Set;

numbers.add(1);
numbers.add(2);
numbers.add(4);
numbers.add(8);
numbers.add(1); // did not add because Set keeps only unique numbers

console.log(numbers);
console.log(Array.from(numbers)); // converts to array