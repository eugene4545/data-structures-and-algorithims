/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            answer.push("FizzBuzz");
        }else if(i % 3 === 0){
            answer.push("Fizz");
        }else if(i % 5 === 0){
            answer.push("Buzz");
        }else {
            answer.push(i.toString());
        }
    }
    return answer;
};   // TM : O(n)
// best answer: (one line) var fizzBuzz = function(n) {
  //  return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
//};