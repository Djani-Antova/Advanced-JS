function cookingByNumbers(a, b, c, d, e, f,) {

    let commands = [a, b, c, d, e, f];
    let num = Number(commands.shift())

    for (const command of commands) {

        switch (command) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;

            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;

            case 'spice':
                num += 1;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);

                break;
            case 'fillet':
                num *= 0.8
                console.log(num);
                break;
        }
    }

    
   
}
//cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')