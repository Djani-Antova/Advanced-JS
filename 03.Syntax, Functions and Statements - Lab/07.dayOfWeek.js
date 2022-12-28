function dayOfWeek(input) {


    let weekdays = {
        'Monday': 1,
        "Tuesday": 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }
    let result = weekdays[input];
    if (!result) {
        console.log('error');
    } else {
        return result;
    }
}
dayOfWeek('Monday')
dayOfWeek('Friday')
dayOfWeek('Invalid')