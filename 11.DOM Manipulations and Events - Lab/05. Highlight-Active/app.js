function focused() {

    Array.from(document.querySelectorAll('input'))
        .forEach(i => {
            i.addEventListener('focus', onFocus);
            i.addEventListener('blur', onBlur);
        })

    function onFocus(event) {
        console.log(event.target)
        console.log(this);;
        // event.target.parentElement.className = 'focused'; 
        event.target.parentElement.classList.add('focused') //RECOMENDED METHOD instead of className method
    }

    function onBlur(event) {
        // event.target.parentElement.className = '';
        event.target.parentElement.classList.remove('focused') //RECOMENDED METHOD instead of className method
    }

}