const fibonacci = function(start) {
    return fib_aux(start, 0, 1);
}

function fib_aux(n, a, b) {
    if (n == 0) {
        return a;
    }
    if (n == 1) {
        return b;
    }
    return fib_aux(n-1, b, a + b);
}

module.exports = fibonacci
