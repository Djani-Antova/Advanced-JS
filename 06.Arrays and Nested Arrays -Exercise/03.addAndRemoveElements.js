function addRemoveElements(commands) {

    let numArr = [];
    let number = 1;

    for (const command of commands) {

        if (command == 'add') {
            numArr.push(number);
        } else if (command == 'remove') {
            numArr.pop()
        }
        number++;
    }
    if (numArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(numArr.join('\n'));
    }
}
// addRemoveElements(['add', 
// 'add', 
// 'add', 
// 'add'])
addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)