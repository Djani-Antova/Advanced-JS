function listOfNames(names) {
    let sorted = names.sort((a,b) => a.localeCompare(b));
    
    for (let i = 0; i < sorted.length; i++) {
        const element = `${i+1}.${sorted[i]}` ;
        console.log(element);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"])