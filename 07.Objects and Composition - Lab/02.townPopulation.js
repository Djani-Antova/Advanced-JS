function townPopulation(list) {

    const result = {}

    for (const town of list) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        const pop = Number(tokens[1]);

        if(result[name] == undefined) {
            result[name] = pop;
        } else {
            result[name] += pop 
        }            
    }
    for (const town in result) {
        console.log(`${town} : ${result[town]}`);
    }

}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)