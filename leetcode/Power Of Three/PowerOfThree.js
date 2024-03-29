
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false; // if number less than or equal to zero loop doesnt run returns false
    while(n % 3 === 0){ // loop starts if number is divisible by 3
        n /= 3;  //number is continously divided by 3; if it isnt possible loop exits
    }
    return n === 1;//function returns true if number equals 1 ; false if it isnt
};