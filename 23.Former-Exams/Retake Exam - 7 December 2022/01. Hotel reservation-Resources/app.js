window.addEventListener('load', solve);

function solve() {
    const fNameElement = document.querySelector('#first-name');
    const lNameElement = document.querySelector('#last-name');
    const dateInElement = document.querySelector('#date-in');
    const dateOutElement = document.querySelector('#date-out');
    const peopleElement = document.querySelector('#people-count');
 
    const nextButton = document.querySelector('#next-btn');
 
    nextButton.addEventListener('click', makeReservation);
 
    function makeReservation(event) {
        event.preventDefault();
 
        const fName = fNameElement.value;
        const lName = lNameElement.value;
        const dateIn = dateInElement.value;
        const dateOut = dateOutElement.value;
        const people = peopleElement.value;
 
        if (
            fName === '' ||
            lName === '' ||
            dateIn === '' ||
            dateOut === '' ||
            people === '' ||
            // || new Date(dateIn) >= new Date(dateOut)){
            dateIn >= dateOut
        ) {
            return;
        }
 
        const ulInfoList = document.querySelector('.info-list');
 
        const liElement = document.createElement('li');
        liElement.classList.add('reservation-content');
 
        const articleElement = document.createElement('article');
 
        const h3NamesElement = document.createElement('h3');
        h3NamesElement.textContent = `Name: ${fName} ${lName}`;
 
        const checkInElement = document.createElement('p');
        checkInElement.textContent = `From date: ${dateIn}`;
 
        const checkOutElement = document.createElement('p');
        checkOutElement.textContent = `To date: ${dateOut}`;
 
        const peopleNumberElement = document.createElement('p');
        peopleNumberElement.textContent = `For ${people} people`;
 
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');
        editButtonElement.textContent = 'Edit';
 
        const continueButtonElement = document.createElement('button');
        continueButtonElement.classList.add('continue-btn');
        continueButtonElement.textContent = 'Continue';
 
        articleElement.appendChild(h3NamesElement);
        articleElement.appendChild(checkInElement);
        articleElement.appendChild(checkOutElement);
        articleElement.appendChild(peopleNumberElement);
 
        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(continueButtonElement);
 
        ulInfoList.appendChild(liElement);
 
        nextButton.disabled = true;
        fNameElement.value = '';
        lNameElement.value = '';
        dateInElement.value = '';
        dateOutElement.value = '';
        peopleElement.value = '';
 
        editButtonElement.addEventListener('click', edit);
 
        function edit() {
            nextButton.disabled = false;
 
            fNameElement.value = fName;
            lNameElement.value = lName;
            dateInElement.value = dateIn;
            dateOutElement.value = dateOut;
            peopleElement.value = people;
 
            liElement.remove();
        }
 
        continueButtonElement.addEventListener('click', continueFunc);
 
        function continueFunc() {
            const ulConfirmList = document.querySelector('.confirm-list');
            ulConfirmList.appendChild(liElement);
 
            editButtonElement.classList.remove('edit-btn'); 
            editButtonElement.classList.add('confirm-btn');
            // editButtonElement.className = 'confirm-btn'
            editButtonElement.textContent = 'Confirm';
 
            continueButtonElement.classList.remove('continue-btn');
            continueButtonElement.classList.add('cancel-btn');
            // continueButtonElement.className = 'confirm-btn'
            continueButtonElement.textContent = 'Cancel';
 
            editButtonElement.removeEventListener('click', edit);
            editButtonElement.addEventListener('click', confirm);
            function confirm() {
                liElement.remove();
                nextButton.disabled = false;
                const h1VerificationElement = document.querySelector('#verification');
                h1VerificationElement.classList.add('reservation-confirmed');
                h1VerificationElement.textContent = 'Confirmed.';
            }
 
            continueButtonElement.removeEventListener('click', continueFunc);
            continueButtonElement.addEventListener('click', cancel);
            function cancel() {
                liElement.remove();
                nextButton.disabled = false;
                const h1VerificationElement = document.querySelector('#verification');
                h1VerificationElement.classList.add('reservation-cancelled');
                h1VerificationElement.textContent = 'Cancelled.';
            }
        }
    }
}




    
    
