function solve(input) {

    for (const element of input) {
       let [command, string] = input.split(' ');
       console.log(command, string);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])