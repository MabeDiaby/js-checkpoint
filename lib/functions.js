/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a function that prints the string "Hello World"
 */
var world = () => {
    console.log("Hello World");
}
world()
/*
 * Prompt 02:
 *
 * Create a function that takes a single parameter and logs it to the console.
 */
var par = (big) => {
    console.log(big);
}
par("This is huge!")
/*
 * Prompt 03:
 *
 * Create a function that takes a parameter name and prints the string "Hello
 * Zakk", if 'Zakk' is passed in as the name argument.
 */
var zeze = (name) => {
    console.log(`Hello ${name}`);
}
zeze("Zakk")
/*
 * Prompt 04:
 *
 * Write a function printCool that accepts one parameter, name as an argument.
 * The function should print the name and a message saying that that person is
 * cool.
 *
 * i.e. printCool("Captain Reynolds") // => "Captain Reynolds is cool."
 */
var printCool = (name) => {
    console.log(`${name} is cool`);
}
printCool("Mamragbe")
/*
 * Prompt 05:
 *
 * Write a function calculateCube that takes a single number and prints the
 * volume of a cube made from that number:
 *
 * i.e. calculateCube(5) // => 125
 */
var calculateCube = (num) => {
    console.log(num ** 3);
}
calculateCube(5)
/*
 * Prompt 06:
 *
 * Write a function isAVowel that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise. The vowel could be upper
 * or lower case.
 *
 * i.e. isAVowel("a"); // => true
 */
var isAVowel = (letter) => {
    if (letter == "a" && "e" && "i" && "o" && "u" && "y" &&"A" && "E" && "I" && "O" && "U" && "Y") {
        return(true)
    } else {
        return(false)
    }
}
console.log(isAVowel("a"));
/*
 * Prompt 07:
 *
 * Create a function that takes a string as a parameter and returns a reversed
 * version of the string (using the reverse method):
 *
 * Bonus: Use an arrow function
 */
var strings = (str) => {
    let doc = str.split("")
    let doc2 = doc.reverse()
    let doc3 = doc2.join("")
    console.log(doc3);
}
strings("Hello World")

// or

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello World"));
/*
 * Prompt 08:
 *
 * Write a function getTwoLengths that accepts two parameters (strings). The
 * function should return an array of numbers where each number is the length of
 * the corresponding string.
 *
 * i.e. getTwoLengths("Hank", "Hippopopalous"); // => [4, 13]
 */
var getTwoLengths = (str, strs) => {
    return [str.length, strs.length]
}
console.log(getTwoLengths("Hank", "Hippop"));
/*
 * Prompt 09:
 *
 * Write a function getMultipleLengths that accepts a single parameter as an
 * argument: an array of strings. The function should return an array of numbers
 * where each number is the length of the corresponding string.
 *
 * i.e. getMultipleLengths(["hello", "what", "is", "up", "dude"]); // => [5, 4, 2, 2, 4]
 */
var getMultipleLengths = (arr) => {
    const newArr = arr.map(x => x.length )
    console.log(newArr);
}
getMultipleLengths(["hello", "what", "is", "up", "dude"])

// or

var getMultipleLengths = (arr) => {
    return arr.map(x => x.length )
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))
/*
 * Prompt 10:
 *
 * Define a function maxOfThree that takes three numbers as arguments and
 * returns the largest of them. If all numbers are the same, it doesn't matter
 * which one is returned. If the two largest numbers are the same, one of them
 * should be returned.
 *
 * i.e. maxOfThree(6, 9, 1); // => 9
 */
var maxOfThree = (num1, num2, num3) => {
    if (num1 >= num2 && num1>=num3) {
        return num1
    }else if (num2 >= num1 && num2>=num3) {
        return num2
    }else {
        return num3
    }
}
console.log(maxOfThree(6,9,1))
/*
 * Prompt 11:
 *
 * Write a function printLongestWord that accepts a single argument, an array of
 * strings. The method should return the longest word in the array. In case of
 * a tie, the method should return the word that appears first in the array.
 *
 * i.e. printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]); // => "Peanutbutter"
 */
var printLongestWord = (arr) => {
    newArr= []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].length)
    }
    return arr[newArr.indexOf(Math.max(...newArr))]
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))
    
/*
 * Prompt 12:
 *
 * Create a function that takes a string as a parameter and returns the
 * uppercase version of the string (using the toUpperCase) method.
 *
 * Bonus: Use an arrow function
 */
var func = (string) => {
    return string.toUpperCase()
}
console.log(func("Mamragbe"));
/*
 * Prompt 13:
 *
 * Write a function that takes a sentence as a parameter and returns the words
 * in the sentence in reverse order.
 */
var reve = (rev) => {
    return rev.split(" ").reverse().join(" ");
}
console.log(reve("Mamragbe is cool"));
/*
 * Prompt 14:
 *
 * Write a function that takes a phone number (as a number) and returns
 * a formatted string. So if the number 2025171777 is pass in, the string
 * '(202) 517-1777' will be returned
 */
let phoneNum = (num) => {
    let arr = (""+num).split("")
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]} ${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}
console.log(phoneNum(2055171777))