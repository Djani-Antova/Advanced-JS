
let map = new Map();

map.set('name', 'Pesho');
map.set('age', 20);
map.set('isMale', true)

console.log(map);

console.log(map.get('name'));
map.set('age', 78)

console.log(map);
console.log(map.size);

map.set(1, 'One') // object keys can be only STRING, while in map anything may be a key
console.log(map);

//Set  object as key
let obj = {name: 'Gosho'};
map.set(obj, 'naGoshoObekta');
console.log(map);
console.log(map.get(obj));

