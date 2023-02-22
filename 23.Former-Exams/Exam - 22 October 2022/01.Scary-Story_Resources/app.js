window.addEventListener("load", solve);

function solve() {

    const firstNameEl = document.querySelector('#first-name')
    const lastNameEl = document.querySelector('#last-name')
    const ageEl = document.querySelector('#age')
    const storyTitleEl = document.querySelector('#story-title')
    const genreEl = document.querySelector('#genre')
    const storyTextEl = document.querySelector('#story')
    const preview = document.querySelector('#preview-list')
    const mainDiv = document.querySelector('#main')

    const publishBtn = document.querySelector('#form-btn')
    publishBtn.addEventListener('click', publish);

    function publish(event) {
        event.preventDefault()

        const firsName = firstNameEl.value;
        const lastName = lastNameEl.value;
        const age = ageEl.value;
        const storyTitle = storyTitleEl.value;
        const genre = genreEl.value;
        const storyText = storyTextEl.value;

        if (firsName === ""
            || lastName === ""
            || age === ""
            || storyTitle === ""
            || storyText === "") {
            return
        }

        const li = elGenerator("li");
        li.setAttribute("class", "rpost");
        li.className = "story-info";
        const article = elGenerator("article", "", li);
        elGenerator("h4", `Name: ${firsName} ${lastName}`, article);
        elGenerator("p", `Age: ${age}`, article);
        elGenerator("p", `Title: ${storyTitle}`, article);
        elGenerator("p", `Genre: ${genre}`, article);
        elGenerator("p", `${storyText}`, article);
        const saveBtn = elGenerator("button", `Save Story`, li);
        saveBtn.className = 'save-btn'
        const editBtn = elGenerator("button", `Edit Story`, li);
        editBtn.className = 'edit-btn'
        const deleteBtn = elGenerator("button", `Delete Story`, li);
        deleteBtn.className = 'delete-btn';

        preview.appendChild(li)

        firstNameEl.value = "";
        lastNameEl.value = "";
        ageEl.value = "";
        storyTitleEl.value = "";
        genreEl.value = "";
        storyTextEl.value = "";

        publishBtn.disabled = true;

        editBtn.addEventListener('click', editFunc);
        function editFunc() {
            firstNameEl.value = firsName;
            lastNameEl.value = lastName;
            ageEl.value = age;
            storyTitleEl.value = storyTitle;
            genreEl.value = genre;
            storyTextEl.value = storyText;

            saveBtn.disabled = true;
            editBtn.disabled = true;
            deleteBtn.disabled = true;

            publishBtn.disabled = false;

            li.remove()
        }

        saveBtn.addEventListener('click', saveStory)
        function saveStory() {
            // Remove all elements inside the main div
            mainDiv.innerHTML = '<h1>Your scary story is saved!</h1>';
        }

        deleteBtn.addEventListener('click', deleteFunc)         
        function deleteFunc () {
            li.remove()
            publishBtn.disabled = false;

        }
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