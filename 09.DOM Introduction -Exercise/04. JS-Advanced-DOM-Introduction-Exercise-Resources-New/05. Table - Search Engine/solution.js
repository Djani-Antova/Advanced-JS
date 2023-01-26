function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {
      for (let row of rows) {
         row.classList.remove('select')
      }

      for (let row of rows) {
         if (input.value !== '' && row.textContent.includes(input.value)) {
            row.className = 'select';
         }
      }
      input.value = '';
   }
}