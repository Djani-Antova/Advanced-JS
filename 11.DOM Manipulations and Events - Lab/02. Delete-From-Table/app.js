function deleteByEmail() {
    // select input field and read value

    let input = document.querySelector('input[name="email"]');
    let rows = [...document.querySelectorAll('tbody tr')]

    // repeat for every table row
    let found = false;
    for (const row of rows) {
        if (input.value === row.children[1].textContent) {
            let parent = row.parentElement;
            row.remove();
          found = true            
        }
    }
    document.getElementById('result').textContent = found ? 'Deleted.' : 'Not found.';
   
    // -- select second column
    // -- compare text content with input value
    // -- if they are equal - remove current row



    // -- display result


}