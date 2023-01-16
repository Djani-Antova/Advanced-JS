function townsToJSON(data) {
    
    let arr = []
    let catalog = []        

    for (const line of data) {        
        let tokens = line.split('|');
        let length = tokens.length;        
        tokens.splice(length - 1, 1);
        tokens.splice(0, 1)
        
        for (let element of tokens) {
            element = element.trim();
            arr.push(element)                     
        }      
    }
    let town = arr.shift();   
    let latitude = arr.shift();  
    let longitude = arr.shift();    
      
    for (let index = 0; index < arr.length; index+=3) {
        let result = {}
        let city = arr[index];       
        let lat = Number(arr[index + 1])
        let latAsNumber = parseFloat(lat.toFixed(2));
        let lon = Number(arr[index + 2])
        let lonAsNumber = parseFloat(lon.toFixed(2))    
        result[town] = city;
        result[latitude] = latAsNumber;
        result[longitude] = lonAsNumber;
        catalog.push(result) 
           
    }
    let output = JSON.stringify(catalog)
    
    return output
   
}
townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
)