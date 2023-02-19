window.addEventListener("load", solve); // 100/100

function solve() {
    const titleElement = document.querySelector('#post-title');
    const categoryElement = document.querySelector('#post-category');
    const contentElement = document.querySelector('#post-content');
   
    const finalUl = document.querySelector("#published-list");
    const clearBtn = document.querySelector("#clear-btn")
   
    const publishButton = document.querySelector('#publish-btn');
   
    publishButton.addEventListener('click', makeTask);
    function makeTask(event) {
      event.preventDefault();
   
      const title = titleElement.value;
      const category = categoryElement.value;
      const content = contentElement.value;
   
      if (
          title === '' ||
          category === '' ||
          content === '' 
      ) {
          return;
      }
   
      const ulInfoList = document.querySelector('#review-list');
   
      const liElement = document.createElement('li');
      liElement.classList.add('rpost');
   
      const articleElement = document.createElement('article');
   
      const h4Element = document.createElement('h4');
      h4Element.textContent = `${title}`;
   
      const pElement = document.createElement('p');
      pElement.textContent = `${category}`;
   
      const p2Element = document.createElement('p');
      p2Element.textContent = `${content}`;
   
   
      const editButtonElement = document.createElement('button');
      editButtonElement.classList.add('action-btn');
      editButtonElement.classList.add('edit');
      editButtonElement.textContent = 'Edit';
   
      const approveButtonElement = document.createElement('button');
      approveButtonElement.classList.add('action-btn');
      approveButtonElement.classList.add('approve');
      approveButtonElement.textContent = 'Approve';
   
      articleElement.appendChild(h4Element);
      articleElement.appendChild(pElement);
      articleElement.appendChild(p2Element);
   
      liElement.appendChild(articleElement);
      liElement.appendChild(editButtonElement);
      liElement.appendChild(approveButtonElement);
   
      ulInfoList.appendChild(liElement);
   
      // submitButton.disabled = true;
      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';
   
      editButtonElement.addEventListener('click', edit);
      approveButtonElement.addEventListener('click', approve);
   
      function edit() {
        // submitButton.disabled = false;
        titleElement.value = title;
        categoryElement.value = category;
        contentElement.value = content;
        liElement.remove();
      }
      function approve(){
        // submitButton.disabled = false;
        liElement.remove();
        finalUl.appendChild(liElement);
        editButtonElement.remove();
        approveButtonElement.remove();
   
      }
      clearBtn.addEventListener("click", clear)
      function clear(){
        liElement.remove()
      }
  }
   
  }
   
  