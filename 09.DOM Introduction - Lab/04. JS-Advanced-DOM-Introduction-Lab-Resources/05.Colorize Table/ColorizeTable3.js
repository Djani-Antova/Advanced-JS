function colorize() {
    const rows = document.querySelectorAll('tr:nth-child(2n)') //nth-child row is 1,2,3
   const elements = Array.from(rows).forEach(el => el.style.backgroundColor = 'teal')
   
    
}