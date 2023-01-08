function sortingNumbers(numbers) {
    let sorted = numbers.sort((a,b) => a - b)
   
    let res = []

    for (const element of sorted) {
        let smallest = sorted.shift()
        res.push(smallest);
        let biggest = sorted.pop();
        res.push(biggest);        
    }
    
    res = res.concat(sorted)
   return res;   
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])