function sumTable() {
    // select all data rows (exclude first and last row)
    const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let sum = 0;
    // for each row
    // -- select last column
    // -- ad content to sum
    for (let row of rows) {
        value = Number(row.lastElementChild.textContent);
        sum += value;
    }
    // display sum in total row
    document.getElementById('sum').textContent = sum;

}