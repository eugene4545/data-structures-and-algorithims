/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //declaring the positions of 'left' and 'right'
     let left = 0; 
     let right = s.length-1;
     
     while(left < right) {
        const temp = s[left];
         s[left]=s[right];
         s[right]= temp;
 
         left++;
         right--;
     }
 };


 //best answer
  /**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/* 
var reverseString = function(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
      // ES6 destructuring assignment
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }
  };
   */