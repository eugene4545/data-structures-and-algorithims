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





// an alternative solution with slightly better time complexity
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let word=""; //the variable that takes every character of the first string one by one
    let words="";// the variable that stores the previous state of 'word' variable
    let i; // variable for iterating through the remaining strings
    let count=0; //To let the code know which character of the string to look at
    while(count!=strs[0].length) // A loop to gather every character of the first string at 0th index
    {
        words=word; // stores the previous state
        word+=strs[0][count]; //adds the next character to 'word' variable's previous state
        for(i=1;i<strs.length;i++) //A loop to iterate through the remaining strings
        {
            if(strs[i][count]!==word[count]) //condition for 'word' & 'count' number of character of remaining strings 
            {
                // if true then revert to previous state and break
                word=words; //reverting to previous state
                break;
            }
        }
        if(word==words) //if state of 'word' remains unchanged then break
        {
            break;
        }
        count+=1; //increment to count to get the next character
    }
    return(word); //answer
};