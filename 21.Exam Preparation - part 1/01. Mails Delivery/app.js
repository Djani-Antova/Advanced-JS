function solve() {

    const nameInput = document.getElementById("recipientName");
    const titleInput = document.getElementById("title");
    const messageInput = document.getElementById("message");
    const list = document.getElementById("list");
    const deleted = document.querySelector(".delete-list");
    const sent = document.querySelector(".sent-list");

    // 1. Create mail process
    // add listener to Create button (absolutely 1-st step)
    document.getElementById("add").addEventListener('click', createMail)
    document.getElementById("reset").addEventListener('click', onReset)
    // - read input field       
    // - validate all fields are entered
    // - create element from input
    // - add event listener to Send button
    // - add event listener to Delete button
    // - clear input fields
    // - add element to DOM

    function createMail(event) {
        event.preventDefault()

        const name = nameInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        if (name == '' || title == '' || message == '') {
            return
        }

        const element = document.createElement('li');
        element.innerHTML = `
            <h4>Title: ${title}</h4>
            <h4>Recipient Name: ${message}</h4>
            <span>${message}</span>
            <div id="list-action">
                <button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>
            </div>`

        element.querySelector('#send').addEventListener('click', sendMail)
        element.querySelector('#delete').addEventListener('click', deleteMail)

        list.appendChild(element)

        resetInput();

        // 2. Send mail process             ----- we moved this function from the second last line into
        // - read data from closure         ----- function createMail(event)
        // - create sent mail element       ----- in order to have access to closure (the info from createMail(event))
        // - add event listener to Delete button
        // - add element to DOM
        // - remove former element from DOM  
        function sendMail() {
            const sentMailElement = document.createElement('li');
            sentMailElement.innerHTML = `
                        <span>To: ${name}</span>
                        <span>Title: ${title}</span>
                        <div class="btn">
                            <button type="submit" class="delete">Delete</button>
                        </div>`
            sentMailElement.querySelector('.delete').addEventListener('click', () => {
                const deletedMailElement = document.createElement('li')
                deletedMailElement.innerHTML = `                   
                        <span>To: ${name}</span>
                        <span>Title: ${title}</span>`

                deleted.appendChild(deletedMailElement);
                sentMailElement.remove()
            })
            sent.appendChild(sentMailElement);
            element.remove()


        }

        // 3. Delete mail process           ----- we moved this function from the last line into 
        // - read data from closure         ----- function createMail(event)
        // - create deleted mail element    ----- in order to have access to closure (the info from createMail(event))
        // - add element to DOM
        // - remove former element from DOM 
        function deleteMail() {
            const deletedMailElement = document.createElement('li')
            deletedMailElement.innerHTML = `                   
                        <span>To: ${name}</span>
                        <span>Title: ${title}</span>`

            deleted.appendChild(deletedMailElement);
            element.remove()

        }


    }







    function onReset(event) {
        event.preventDefault();
        resetInput()
    }


    // 4. Reset mail process
    // add listener to Reset button (absolutely 2-nd step)
    // - clear input fields

    function resetInput() {
        nameInput.value = "";
        titleInput.value = "";
        messageInput.value = "";
    }




};

solve()