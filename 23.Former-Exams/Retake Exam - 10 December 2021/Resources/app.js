window.addEventListener("load", solve);     //90/100 points in Judge


function solve() {
    //get info from input fields
    let typeProductEl = document.getElementById('type-product')
    let descriptionEl = document.getElementById('description');
    let clientEl = document.getElementById('client-name');
    let clientPhoneEl = document.getElementById('client-phone');

    //read order lists
    let lists = {
        order: document.getElementById('received-orders'),
        completed: document.getElementById('completed-orders')
    }


    //add functionality to buttons
    let sendBtn = document.querySelector('button[type="submit"]')
    sendBtn.addEventListener('click', submit)


    function submit(event) {
        event.preventDefault()

        //read input fields
        let typeProduct = typeProductEl.value;
        let description = descriptionEl.value
        let client = clientEl.value
        let clientPhone = clientPhoneEl.value;

        // validate input
        if (typeProduct === "" || description === "" || client === "" || clientPhone === "") {
            return
        }

        // create div1  item 'container'
        let div = document.createElement('div');
        div.className = 'container'
        div.innerHTML = `<h2>Product type for repair: ${typeProduct}</h2>
                        <h3>Client information: ${client}, ${clientPhone}</h3>
                        <h4>Description of the problem: ${description}</h4>
                        <button class="start-btn">Start repair</button>
                        <button class="finish-btn" disabled>Finish repair</button> `

        //*add functionality to buttons      
        let startBtn = div.querySelector('.start-btn')
        let finishBtn = div.querySelector('.finish-btn')
        startBtn.addEventListener('click', start)
        finishBtn.addEventListener('click', finish)

        // append to first list
        lists.order.appendChild(div); //към parent-a добавяме детето!!

        // clear input field
        typeProductEl.value = '' //референциите приравняваме на празен стринг
        descriptionEl.value = '';
        clientEl.value = '';
        clientPhoneEl.value = '';

        function start() {

            startBtn.setAttribute("disabled", true);
            finishBtn.removeAttribute("disabled", false)
        }

        function finish() {
            //move received list  to completed list
            startBtn.setAttribute("disabled", true);
            startBtn.remove();
            finishBtn.remove()
            lists.completed.appendChild(div)
        }

        let clearBtn = document.getElementsByClassName('clear-btn')[0]
        clearBtn.addEventListener('click', clear)
    
        function clear() {
            div.remove();
        }   
    }
}