function townPopulation(list) {

    const result = {}

    for (const town of list) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        let pop = Number(tokens[1]);

        if (result[name] != undefined) {
            pop += result[name]  // why not result[name] +=  pop ??
        }
        result[name] = pop

    }
    for (const [name, pop] of Object.entries(result)) {
        console.log(`${name} : ${pop}`);
    }

}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

)