function solve() {

    let [input, output] = Array.from(document.querySelectorAll('textarea'));
    let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
    let tbody = document.querySelector('tbody')

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    let items = [];

    function generate(e) {
        let data = JSON.parse(input.value)

        for (let item of data) {
            let row = createRow(item);
            tbody.appendChild(row.element);
            items.push(row)
        }
    }

    function buy(e) {
        let selectedItems = items.filter(i => i.isChecked()).map(i => i.item);
        let names = selectedItems.map( i => i.name).join(', ')
        let total = selectedItems.reduce((a, c) => a + Number(c.price), 0);
        let decFactor = selectedItems.reduce((a, c, i, arr) => a + Number(c.decFactor) / arr.length, 0);

        output.textContent = [
            `Bought furniture: ${names}`,
            `Total price: ${total.toFixed(2)}`,
            `Average decoration factor: ${decFactor}`
        ].join('\n')
    }

    function createRow(item) {
        let row = document.createElement('tr');      

        row.appendChild(createCol(createImg(item.img)));
        row.appendChild(createCol(createPara(item.name)));
        row.appendChild(createCol(createPara(item.price)));
        row.appendChild(createCol(createPara(item.decFactor)));

        let check = createCheck()
        row.appendChild(createCol(check));        

        return {
            element: row,
            item,
            isChecked
        };

        function isChecked() {
            return check.checked;
        }
    }

    function createCol(content) {
        let col = document.createElement('td');
        col.scope = 'col';       
        col.appendChild(content);
        return col;
    }
    function createPara(content) {
        let p = document.createElement('p');
        p.textContent = content;
        return p;
    }
    function createImg(src) {
        let img = document.createElement('img');
        img.src = src;
        return img;
    }
    function createCheck() {
        let check = document.createElement('input');
        check.type = 'checkbox'
        return check;
    }   

}