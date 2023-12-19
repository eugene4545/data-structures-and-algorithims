/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    const stack = [];
    const bracketObj = {')':'(','}':'{',']':'['};

    for(let i = 0; i < s.length; i++) {
        const currentBracket = s[i];

        if (bracketObj.hasOwnProperty(currentBracket)) {
            if (stack.length === 0 || stack.pop() !== bracketObj[currentBracket]) {
                return false;
            }
        } else {
            // It's an opening bracket, push it onto the stack
            stack.push(currentBracket);
        }
    }
    return stack.length === 0;
};


