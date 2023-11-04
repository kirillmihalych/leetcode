var getLastMoment = function(n, left, right) {
    return Math.max(Math.max(...left, 0), n - Math.min(...right, n));
};