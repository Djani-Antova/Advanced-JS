function roadRadar(speed, area) {
    let limit;
    let status;

    switch (area) {
        case 'motorway':
            limit = 130;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let diff = speed - limit;
                if (diff <= 20) {
                    status = 'speeding'
                } else if (diff <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
            }
            break;

        case 'interstate':
            limit = 90;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let diff = speed - limit;
                if (diff <= 20) {
                    status = 'speeding'
                } else if (diff <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
            }

            break;
        case 'city':
            limit = 50;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let diff = speed - limit;
                if (diff <= 20) {
                    status = 'speeding'
                } else if (diff <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
            }

            break;
        case 'residential':
            limit = 20;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let diff = speed - limit;
                if (diff <= 20) {
                    status = 'speeding'
                } else if (diff <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
            }

            break;
    }

    

}
//roadRadar(40, 'city')
roadRadar(200, 'motorway')
