const palindromes = function(entry) {
    let plaintext = entry.toLowerCase().replace(/[?!,.\s]/g, ""); 
    return plaintext == std.split('').reverse().join('');
}

module.exports = palindromes
