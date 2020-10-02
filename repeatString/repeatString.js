const repeatString = function(string, repetitions) {
    if (repetitions < 0) {
        return "ERROR";
    }

    // initialise empty string and +concatenate string specified number of time 
    let ret = "";
    for (let i = 0; i < repetitions; i++) {
        ret += string;
    }

    return ret;
}

module.exports = repeatString
