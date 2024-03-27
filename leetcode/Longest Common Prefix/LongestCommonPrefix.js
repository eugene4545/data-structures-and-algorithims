/**
 * @param {string[]} strings
 * @return {string}
 */
var longestCommonPrefix = function(strings) {
    if (strings.length === 0) return ""; // If the array is empty, it returns an empty string

    // we iterate through the characters of the first string
    for (let i = 0; i < strings[0].length; i++) {
        // we then compare the current character with the corresponding characters of other strings
        for (let j = 1; j < strings.length; j++) {
            // If the current character doesn't match or we've reached the end of any string, return the prefix up to the current index
            if (strings[j][i] !== strings[0][i] || i === strings[j].length) {
                return strings[0].substring(0, i);
            }
        }
    }

    // If all strings have the same prefix, return the first string
    return strings[0];
};
