    function timeToWalk(steps, footprint, speed) {

        let distanceInMeters = steps * footprint;
        let speedMetersInSec = speed / 3.6;
        let time = distanceInMeters / speedMetersInSec;
        let rest = Math.floor(distanceInMeters / 500);
        let timeInMin = Math.floor(time / 60);
        let timeInSec = Number((time - timeInMin * 60).toFixed())
        let timeInHour = Math.floor(time / 3600);
        
        timeInMin += rest;
        timeInHour += Math.floor(timeInMin / 60);
        timeInMin = timeInMin % 60;

        
        let finalHour;
        let finalMin;
        let finalSec;
        
        if(timeInHour < 10) {
            finalHour = `0${timeInHour}`
        } else {
            finalHour =  `${timeInHour}`
        }
        if(timeInMin < 10) {
            finalMin = `0${timeInMin}`
        } else {
            finalMin =`${timeInMin}`
        }
        if (timeInSec < 10) {
            finalSec = `0${timeInSec}`
        } else {
            finalSec = `${timeInSec}`
        }
        
        console.log(`${finalHour}:${finalMin}:${finalSec}`);
    }


timeToWalk(2564, 0.70, 5.5)