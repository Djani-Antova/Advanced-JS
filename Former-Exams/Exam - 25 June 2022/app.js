window.addEventListener("load", solve);

function solve() {

  const makeEl = document.querySelector('#make');
  const modelEl = document.querySelector('#model');
  const yearEl = document.querySelector('#year');
  const fuelEl = document.querySelector('#fuel');

  const originalCostEl = document.querySelector('#original-cost');
  const sellingPriceEl = document.querySelector('#selling-price');

  const tbody = document.querySelector('#table-body');
  const carsList = document.querySelector('#cars-list')

  const profit = document.querySelector('#profit');
  let totalPrice = Number(profit.textContent)

  const publishBtn = document.querySelector('#publish');
  publishBtn.addEventListener('click', publish);


  function publish(event) {
    event.preventDefault()

    const make = makeEl.value
    const model = modelEl.value
    const year = yearEl.value
    const fuel = fuelEl.value
    const originalCost = originalCostEl.value
    const sellingPrice = sellingPriceEl.value

    if (make === ''
      || model === ''
      || year === ''
      || fuel === ''
      || originalCost === ''
      || sellingPrice === ''
      || Number(sellingPrice) < Number(originalCost)) {
      return
    }

    const tr = elGenerator('tr');
    tr.classList.add('row');
    elGenerator('td', `${make}`, tr);
    elGenerator('td', `${model}`, tr)
    elGenerator('td', `${year}`, tr)
    elGenerator('td', `${fuel}`, tr)
    elGenerator('td', `${originalCost}`, tr)
    elGenerator('td', `${sellingPrice}`, tr);
    const buttonsTd = elGenerator('td', '', tr);
    const editBtn = elGenerator('button', 'Edit', buttonsTd);
    editBtn.classList.add('action-btn', 'edit');
    const sellBtn = elGenerator('button', 'Sell', buttonsTd);
    sellBtn.classList.add('action-btn', 'sell');

    tbody.appendChild(tr);

    makeEl.value = '';
    modelEl.value = '';
    yearEl.value = '';
    fuelEl.value = '';
    originalCostEl.value = '';
    sellingPriceEl.value = '';

    editBtn.addEventListener('click', edit)
          function edit() {
            makeEl.value = make;
            modelEl.value = model;
            yearEl.value = year;
            fuelEl.value = fuel;
            originalCostEl.value = originalCost
            sellingPriceEl.value = sellingPrice;

            tr.remove();

          }

    sellBtn.addEventListener('click', () => {                
            tr.remove();
            const li = elGenerator('li', '', carsList)
            li.classList.add('each-list');
            originalCostEl.value = Number(originalCost)
            sellingPriceEl.value = Number(sellingPrice);

            let difference = sellingPrice - originalCost

            elGenerator("span", `${make} ${model}`, li);
            elGenerator("span", `${year}`, li);
            elGenerator("span", `${difference}`, li);

            totalPrice += difference;
            profit.textContent = totalPrice.toFixed(2)
           
          })       

  }

  // Create HTML element
  function elGenerator(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }

}


