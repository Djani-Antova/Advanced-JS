function solve() {

    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', add);
    resetBtn.addEventListener('click', reset);

    let listMails = document.getElementById('list');
    let deleteList = document.getElementsByClassName('delete-list')[0];
    let sentList = document.getElementsByClassName('sent-list')[0];

    function add(event) {
        event.preventDefault();

        let recipientNameValue = recipientName.value;
        let titleValue = title.value;
        let messageValue = message.value;

        if (!recipientNameValue || !titleValue || !messageValue) {
            return;
        }

        let li = createElement('li', listMails);
        createElement('h4', li, `Title: ${titleValue}`);
        createElement('h4', li, `Recipient Name: ${recipientNameValue}`);
        createElement('span', li, `${messageValue}`);

        let div = createElement('div', li);
        div.id = 'list-action';

        let sendBtn = createElement('button', div, 'Send');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.addEventListener('click', sendMail);

        let deleteBtn = createElement('button', div, 'Delete');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.addEventListener('click', deleteMail);

        recipientName.value = '';
        title.value = '';
        message.value = '';

        function sendMail() {
            li.innerHTML = '';
            li.className = '';

            sentList.appendChild(li);
            createElement('span', li, `To: ${recipientNameValue}`);
            createElement('span', li, `Title: ${titleValue}`);
            let divForDelete = createElement('div', li);
            divForDelete.className = 'btn';

            divForDelete.appendChild(deleteBtn);
            deleteBtn.removeAttribute('id');
            deleteBtn.className = 'delete';
        }
        function deleteMail() {
            li.innerHTML = '';
            li.className = '';
            deleteList.appendChild(li);
            createElement('span', li, `To: ${recipientNameValue}`);
            createElement('span', li, `Title: ${titleValue}`);
        }
    }

    function reset(event) {
        event.preventDefault();
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

    function reset(event) {
        event.preventDefault();
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

    function createElement(type, parent, content,) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }
        parent.appendChild(element)
        return element;
    }

}
solve()
