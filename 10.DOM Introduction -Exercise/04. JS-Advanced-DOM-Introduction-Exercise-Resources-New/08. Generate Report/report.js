function generateReport() {
    //get all table rows in an array 
    let tableRows = Array.from(document.getElementsByTagName('tr')) //[...] length 21
   
    let inputElements = Array.from(document.getElementsByTagName('input'));
    console.log(inputElements);
    

    let checkedCols = [];

    let resultArr = []
    // get elements(children) of each row

    for (let i = 0; i < tableRows.length; i++) {
        let row = tableRows[i];
        let obj = {};
        for (let j = 0; j < row.children.length; j++) {
            let element = row.children[j];
                        
            if (i === 0) {                
                if (element.children[0].checked) {
                    checkedCols.push(j);                   
                }
                continue;
            }
            if (checkedCols.includes(j)) {
                let propertyName = inputElements[j].name;
                obj[propertyName] = element.textContent;
            }
        }
        if (i !== 0) {
            resultArr.push(obj);
        }
    }
    document.getElementById('output').value = JSON.stringify(resultArr);
}