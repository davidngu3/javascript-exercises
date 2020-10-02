const removeFromArray = function(array, ...args) {
    return array.filter(e => !args.includes(e));
}

module.exports = removeFromArray
