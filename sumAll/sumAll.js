const sumAll = function(num1, num2) {
    let sum = 0;
    let start, end;

    // wrong type check
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return "ERROR";
    }

    // negative number check
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    // initialise start and end numbers appropriately
    if (num2 > num1) {
        start = num1;
        end = num2;
    } 
    else {
        start = num2;
        end = num1;
    }

    // looping and summing
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
