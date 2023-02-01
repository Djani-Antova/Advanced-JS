function create(words) {


   for (const word of words) {
      let p = document.createElement('p');
      let div = document.createElement('div');
      let contentDiv = document.getElementById('content');
      p.textContent = word;
      p.style.display = 'none'
      div.appendChild(p)
      div.addEventListener('click', onClick);
      contentDiv.appendChild(div)
     
     

      function onClick(event) {
         p.style.display = ''
      }

   }

}