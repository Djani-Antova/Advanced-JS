function solve() {
    
    let data = {}
    for (const arg of arguments) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);
        
        if (!data[type]) {
            data[type] = 1;
        } else {
            data[type] ++;
        }
    }  
    
    let sorted = Object.entries(data).sort((kvpA, kvpB) => kvpB[1] - kvpA[1])
    for (const entry of sorted) {
        console.log(`${entry[0]} = ${entry[1]}`);
    }

}
solve('cat', 'boy', 42, function () { console.log('Hello world!'); })