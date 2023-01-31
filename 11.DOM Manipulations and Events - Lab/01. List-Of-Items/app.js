function addItem() {
    // select input field and read its value
    let input = document.getElementById('newItemText');  
   
    // create <li> element and assign input value to the created element as textContent
    let liElement = document.createElement('li')
     
    liElement.textContent = input.value;
    
    // select <ul> and append new element
    document.querySelector('#items').appendChild(liElement);

    // select input field and clear contents(value)
    input.value = '';
}