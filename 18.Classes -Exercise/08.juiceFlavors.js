function solve(input) {

    let bottles = {}
    let juices = {}

    for (let line of input) {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);
   
        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = 0;
        }
        juices[juice] += quantity;

        while (juices[juice] >= 1000) {
            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = 0;
            }
            bottles[juice]++;
            juices[juice] -= 1000;
        }
    }    
    // output the result
    for (const juice in bottles) {
        console.log(`${juice} => ${bottles[juice]}`);
    }
}
solve(['Orange => 2600',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])