window.addEventListener("load", solve);

function solve() {
  // Sections output
  const sections = {
    inProgress: document.querySelector('#in-progress'),
    counter: document.querySelector('#progress-count'),
    finished: document.querySelector('#finished'),
  };
  // User input 
  const inputs = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    gender: document.getElementById('genderSelect'),
    description: document.getElementById('task'),
  };
  // Add event on submit btn
  document.getElementById('form-btn').addEventListener('click', onSubmit);
  // Add event on [Clear] btn
  document.getElementById('clear-btn').addEventListener('click', () => {
    // sections.finished.innerHTML = '';
    Array.from(sections.finished.querySelectorAll('li')).forEach(el => el.remove());
    // sections.finished.querySelectorAll('li').forEach(el => el.remove()); -> NOT IN JUDGE
    // sections.finished.replaceChildren();
  });
 
  function onSubmit(event) {
    event.preventDefault();
 
    const firstName = inputs.firstName.value;
    const lastName = inputs.lastName.value;
    const age = inputs.age.value;
    const gender = inputs.gender.value;
    const description = inputs.description.value;
 
    if (firstName === ''
      || lastName === ''
      || age === ''
      || description === '') {
      return;
    }
 
    const li = genareteEl('li', '', sections.inProgress, { class: 'each-line' });
    const article = genareteEl('article', '', li);
    const h4 = genareteEl('h4', `${firstName} ${lastName}`, article);
    const pAge = genareteEl('p', `${gender}, ${age}`, article);
    const pDescription = genareteEl('p', `Dish description: ${description}`, article);
    const editBtn = genareteEl('button', 'Edit', li, { class: 'edit-btn' });
    const completeBtn = genareteEl('button', 'Mark as complete', li, { class: 'complete-btn' });
    editBtn.addEventListener('click', editFn);
    completeBtn.addEventListener('click', finishedCook);
 
    // Increment counter
    sections.counter.textContent = Number(sections.counter.textContent) + 1;
 
    // Clear all input fields
    for (const prop in inputs) {
      inputs[prop].value = '';
      // TODO Judge
      // if (prop !== 'gender') {
      //   inputs[prop].value = '';
      // }
    }
 
    // Function part
    function editFn() {
      inputs.firstName.value = firstName;
      inputs.lastName.value = lastName;
      inputs.age.value = age;
      inputs.gender.value = gender;
      inputs.description.value = description;
 
      // Remove element
      li.remove();
      // sections.inProgress.removeChild(li);
      // Decrement counter
      sections.counter.textContent = Number(sections.counter.textContent) - 1;
    }
 
    function finishedCook() {
      // Remove btn
      editBtn.remove();
      completeBtn.remove();
 
      // Add to finished
      sections.finished.appendChild(li);
 
      // Decrement counter
      sections.counter.textContent = Number(sections.counter.textContent) - 1;
    }
 
  }
 
  // Create HTML element
  function genareteEl(typeEl, content, parent, attributes) { // attributes: {class: 'something'} 
    // typeEl = 'li' , 'button' , 'h4'
    // content = '';
    // attributes = {}? = undefined
    const el = document.createElement(typeEl);
    el.textContent = content;
    if (attributes) {
      // Object.assign(el, attributes); // TODO JUDGE
      for (const prop in attributes) {
        // attributes: {class: 'something'}
        el.setAttribute(prop, attributes[prop]);
      }
    }
 
    if (parent) {
      parent.appendChild(el);
    }
 
    return el;
  }
}
 
 
// // Generate HTML element
// function generateEl(elType, options = {}, parent) {
//   const el = document.createElement(elType);
//   Object.assign(el, options);
//   if (options.events) {
//       for (const eventType in options.eventListeners) {
//           el.addEventListener(eventType, options.eventListeners[eventType]);
//       }
//   }
//   if (parent) {
//       parent.appendChild(el);
//   }
 
//   return el;
// }
 
 
// // options must be an object with a property
//   // ('elType', { textContent: 'Test',
//   //     className: 'Something',
//   //     style: 'background-color: blue;',
//   //     to add eventListener - the prop must be events (string) - value must be an object
//   //     eventListeners: { click: () => alert('Button clicked!') }
//   // })