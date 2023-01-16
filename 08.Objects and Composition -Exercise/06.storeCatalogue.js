function storeCatalogue(input) {
    //create dictionary to hold the products, with the first letter of the name as the key    
    let catalog = {}

    for (const line of input) {
        let [productName, productPrice] = line.split(' : ') 
        productPrice = Number(productPrice)
        let firstLetter = productName[0]
        if(!catalog[firstLetter]) {
            catalog[firstLetter] = []
        }
        catalog[firstLetter].push([productName, productPrice]);
    }
    // sort the dictionary by the keys (firstLetter of the productName)
     let sortedCatalog = {}
     let keys = Object.keys(catalog);
     keys.sort();
     for (const key of keys) {
        sortedCatalog[key] = catalog[key]
     }
     // iterate through the catalog and print the products
     for (const firstLetter in sortedCatalog) {
        //print the firstLetter
        console.log(firstLetter);
        //sort the products by name
        sortedCatalog[firstLetter].sort((a,b) => a[0].localeCompare(b[0]))
        // print the products with two spaces before the name;
        for (const [name, price] of sortedCatalog[firstLetter]) {
            console.log(` ${name}: ${price}`);
        }
     } 
}

// storeCatalogue(['Appricot : 20.4',
// 'Fridge : 1500',
// 'TV : 1499',
// 'Deodorant : 10',
// 'Boiler : 300',
// 'Apple : 1.25',
// 'Anti-Bug Spray : 15',
// 'T-Shirt : 10'])
storeCatalogue(['Banana : 2',
'Rubic-s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])