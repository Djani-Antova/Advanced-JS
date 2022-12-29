function solve(input) {
    let res = [];

    for (const el of input) {
        if (el < 0) {
            res.unshift(el)
        } else {
            res.push(el)
        }
    }
    
        console.log(res.join('\n'));
    
}
solve([7, -2, 8, 9])