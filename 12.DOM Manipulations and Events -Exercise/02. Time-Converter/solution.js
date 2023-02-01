function attachEventsListeners() {

    let buttons = document.querySelectorAll('input[type="button"]');
    for (let button of buttons) {
        button.addEventListener('click', convert)

    }

    function convert(e) {
        let unit = e.target.parentElement.querySelector('input[type="text"]').id;
        let value = Number(e.target.parentElement.querySelector('input[type="text"]').value);

        switch (unit) {
            case "days":
                populate(value)
                break;
            case "hours":
                populate(value / 24)
                break;
            case "minutes":
                populate(value / 24 / 60)
                break;
            case "seconds":
                populate(value / 24 / 60 / 60)
                break;
        }
    }
    function populate(value) {
        let inputs = Array.from(document.querySelectorAll('input[type="text"]'));
        inputs.shift().value = value;
        let currentValue = value * 24;
        for (let input of inputs) {
            input.value = currentValue;
            currentValue *= 60
        }
    }

}