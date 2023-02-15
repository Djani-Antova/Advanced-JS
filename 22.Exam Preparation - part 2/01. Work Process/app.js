function solve() {
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');
    const table = document.querySelector('table')
    const spanSum = document.querySelector('#sum')

    const addWorkerBtn = document.getElementById('add-worker');
    addWorkerBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault()

        const fname = fnameInput.value;
        const lname = lnameInput.value;
        const email = emailInput.value;
        const birth = birthInput.value;
        const position = positionInput.value;
        const salary = salaryInput.value;

        if (fname == '' || lname == '' || email == '' || birth == '' || position == '' || salary == '') {
            return
        }

        const element = document.createElement('tbody');
        element.innerHTML = `
            <tbody id="tbody">
                <tr>
                    <td>${fname}</td>
                    <td>${lname}</td>
                    <td>${email}</td>
                    <td>${birth}</td>
                    <td>${position}</td>
                    <td>${salary}</td>
                    <td><button class='fired'>Fired</button> <button class="edit">Edit</button></td>
                </tr>
            </tbody>`

        table.appendChild(element)
        element.querySelector(' .fired').addEventListener('click', fired)
        element.querySelector(' .edit').addEventListener('click', edit)

        spanSum.textContent = (Number(spanSum.textContent) + Number(salary)).toFixed(2)

        fnameInput.value = '';
        lnameInput.value = '';
        emailInput.value = '';
        birthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';

        function edit() {
            fnameInput.value = fname;
            lnameInput.value = lname;
            emailInput.value = email;
            birthInput.value = birth;
            positionInput.value = position;
            salaryInput.value = salary;

            element.remove()
            spanSum.textContent = (Number(spanSum.textContent) - Number(salary)).toFixed(2)
        }

        function fired() {
            element.remove()
            spanSum.textContent = (Number(spanSum.textContent) - Number(salary)).toFixed(2)
        }
    }
}
