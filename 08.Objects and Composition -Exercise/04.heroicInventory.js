function heroicInventory(input) {
    let result = []

    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level)
        items = items ? items.split(', ') : [];
        
        let obj = { name, level, items} 
        result.push(obj)    
    }
    //console.table(result);
    let myJSON = JSON.stringify(result);
    console.log(myJSON);    
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)