/*
let i =20;
while (i < 10){
    console.log(`While Loop Number : ${i}`)
    i++;
} 
*/

/*


let e = 1
if( e = 1){
    return"elizabeth is beautiful";
}else if (e > 3){
    console.log("elizabeth is pretty");
}else{
    console.log("elizabeth is ugly");
}*/


/*
const age = 18;
if (age >= 18){
    console.log("you can drive!")
}else{
    console.log(" werey! you cannot drive")
}
*/

/*

let color = "yellow";
if (color === "red"){
    console.log("color is red");
}else if(color !== "blue" && color !== "red"){
    console.log("not specified");
}else if (color === "blue"){
    console.log("its blue")
}else{
    console.log("color is blue")
}
*/


//switch statements
/*
const man =27;
if(man === 22)
    return true
}else{
    return false
}*/


/*
var a = 12
var b =7
var c = 20

var sum = a+b+c
console.log(sum)
*/


/*
ALGORITHM gmcCheckpointAlgo
VAR
    sentenceLength,numberWords,numberVowels,i,j,k : INTEGER;
    Sentence : STRING;
    sum : INTEGER := 0;
BEGIN

    Read(S);

    WHILE(Sentence[i] <> ".") DO
    sentenceLength := sentenceLength + 1;
    i := i + 1 ;
    END_WHILE

    WHILE(j<sentenceLength) DO
    IF(Sentence[j] = " ") THEN
    numberWords := numberWords+1;
    END_IF
    j:=j+1;
    END_WHILE
    
    WHILE(k<sentenceLength) DO
    IF(Sentence[k] = "a" OR Sentence[k] = "e" OR Sentence[k] = "i" OR Sentence[k] = "o" OR Sentence[k] = "u") THEN
    numberWords := numberVowels+1;
    END_IF
    k:=k+1;
    END_WHILE

    Write(sentenceLength,numberWords,numberVowels);

END
*/
/*
let sentenceLength = 0;
let numberWords = 1;
let numberVowels = 0;
let i = 0;
let j = 0;
let k = 0;
let Sentence = "";

// Read input from the user
// In a browser environment, you can use prompt() to get input
Sentence = prompt("Enter a sentence: ");

while (Sentence[i] !== ".") {
    sentenceLength++;
    i++;
}

while (j < sentenceLength) {
    if (Sentence[j] === " ") {
        numberWords++;
    }
    j++;
}

while (k < sentenceLength) {
    if (
        Sentence[k] === "a" ||
        Sentence[k] === "e" ||
        Sentence[k] === "i" ||
        Sentence[k] === "o" ||
        Sentence[k] === "u" ||
        Sentence[k] === "A" ||
        Sentence[k] === "E" ||
        Sentence[k] === "I" ||
        Sentence[k] === "O" ||
        Sentence[k] === "U"
    ) {
        numberVowels++;
    }
    k++;
}

console.log("Sentence Length:", sentenceLength);
console.log("Number of Words:", numberWords);
console.log("Number of Vowels:", numberVowels);
*/
/*
const time = undefined;
userName = 'princess';
if (time=== 7){
    console.log(`welcome back, ${userName}.`);
}else if(time >= 7){
    console.log(`afternoon, ${userName}.`);
}else if(time <= 7){
    console.log(`goodnight, ${userName}.`)
}
else{
    console.log(`what can i do to help, ${userName}.`)
}
*/
/*

function findDistinctSum() {
    const setOne = [3, 1, 7, 9];
    const setTwo = [2, 4, 1, 9, 3];
    let sum = 0;
    let isDistinct;

    for (let i = 0; i < setOne.length; i++) {
        isDistinct = true;
        for (let j = 0; j < setTwo.length; j++) {
            if (setOne[i] === setTwo[j]) {
                isDistinct = false;
                break;
            }
        }
        if (isDistinct) {
            sum += setOne[i];
        }
    }

    for (let i = 0; i < setTwo.length; i++) {
        isDistinct = true;
        for (let j = 0; j < setOne.length; j++) {
            if (setTwo[i] === setOne[j]) {
                isDistinct = false;
                break;
            }
        }
        if (isDistinct) {
            sum += setTwo[i];
        }
    }

    console.log("Sum of distinct elements:", sum);
}

// Call the function to find and print the sum of distinct elements
findDistinctSum();
*/

/*

function checkOddNumbers() {
    const quoteNumber =  [3,5,7,9,11,13,15,17,19,21,23,25,27,29,31];
    
    const markedNumber = [2,3,6,8,10,12,14,16,18,20,22,24,26,28,30];
    let isEven;
    output = "";

    for(let i=0; i < quoteNumber.length; i++){
        isEven = false;
        for(let j =0; j < markedNumber.length; j++){
            if(quoteNumber[i] === markedNumber[j]){
                isEven = true;
                break;
            }
        }
        if(isEven){
            output = "the markedNumber array is made up of even numbers";  
        }
    }

console.log(output);


}
checkOddNumbers()
*/
/*
const arr = [5,6,77,88,99]
    let key = 6;
function findNum(key,start,end){
    if(start > end){
        return 'Not found'
    }
    const mid = Math.floor((start + end)/2);
    if(arr[mid]===key){
        return "found key"
    }
    if (arr[mid] < key){
         return findNum(key,start,mid + 1)
    }
    if (arr[mid] > key){
        return findNum(key,start,mid -1)
    }
}

console.log(findNum())
*/

function bubbleSort(){
    let swapped = false
    let array = [8,9,-0,8,-8,7,4,67,88,64,43,23,72,14]
    for(i = 0; i < array.length-1; i++){
        if(array[i] > array[i+1]){
            temp=array[i];
            array[i] =array[i + 1]
            array[i+1] =temp;
            swapped = true
        

        }
    }
    console.log(bubbleSort())
}