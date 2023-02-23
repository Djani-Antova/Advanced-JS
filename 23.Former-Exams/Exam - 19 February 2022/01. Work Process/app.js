function solve() {
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');
 
    const hireWorkerButton = document.getElementById('add-worker');
 
    hireWorkerButton.addEventListener('click', hireWorker);
 
    function hireWorker(event) {
        event.preventDefault();
 
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const birth = birthInput.value;
        const position = positionInput.value;
        const salary = salaryInput.value;
 
        if (
            firstNameInput.value === '' ||
            lastNameInput.value === '' ||
            emailInput.value === '' ||
            birthInput.value === '' ||
            positionInput.value === '' ||
            salaryInput.value === ''
        ) {
            return;
        }
 
        const tbody = document.getElementById('tbody');
        const tr = document.createElement('tr');
 
        const tdFirstName = document.createElement('td');
        tdFirstName.textContent = firstNameInput.value;
 
        const tdLastName = document.createElement('td');
        tdLastName.textContent = lastNameInput.value;
 
        const tdEmail = document.createElement('td');
        tdEmail.textContent = emailInput.value;
 
        const tdBirth = document.createElement('td');
        tdBirth.textContent = birthInput.value;
 
        const tdPosition = document.createElement('td');
        tdPosition.textContent = positionInput.value;
 
        const tdSalary = document.createElement('td');
        tdSalary.classList.add('salary');
        tdSalary.textContent = salaryInput.value;
 
        const tdButtons = document.createElement('td');
 
        const firedButton = document.createElement('button');
        firedButton.classList.add('fired');
        firedButton.textContent = 'Fired';
 
        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
 
        tdButtons.appendChild(firedButton);
        tdButtons.appendChild(editButton);
 
        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBirth);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        tr.appendChild(tdButtons);
 
        tbody.appendChild(tr);
 
        const spanSum = document.getElementById('sum');
        // spanSum.textContent = (Array.from(tbody.querySelectorAll('.salary')).reduce((a, b) => a + Number(b.textContent), 0)).toFixed(2);
        spanSum.textContent = (Number(tdSalary.textContent) + Number(spanSum.textContent)).toFixed(2);
 
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        birthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';
 
        editButton.addEventListener('click', edit);
 
        function edit() {
            tr.remove();
 
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            emailInput.value = email;
            birthInput.value = birth;
            positionInput.value = position;
            salaryInput.value = salary;
 
            spanSum.textContent = (Number(spanSum.textContent) - Number(salary)).toFixed(2);
        }
 
        firedButton.addEventListener('click', fired);
 
        function fired() {
            tr.remove();
            spanSum.textContent = (Number(spanSum.textContent) - Number(salary)).toFixed(2);
        }
    }
}