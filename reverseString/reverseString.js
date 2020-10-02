const reverseString = function(string) {
    // js has no native string reverse method, so
    // reverses by converting into array (split) then reversing using array method and stitching back together (join)
    return string.split('').reverse().join('');
}

module.exports = reverseString
