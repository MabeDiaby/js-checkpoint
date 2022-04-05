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
 * Create a variable and assign it a random number between 0 and 100 using
 * Math.random(). Create a conditional so that if the number is greater than 50,
 * you print the message "That's a big number!"
 */
var numbers = Math.random() * 100
if (numbers > 50) {
        console.log("That's a nig number!");
    }
/*
 * Prompt 02:
 *
 * Monkey in the middle! Create a variable and assign it a random number between
 * 0 and 10 using Math.Random(). Create a conditional that:
 *
 *   - prints "small number" if the number is less than 5
 *   - prints "big number" if the number is greater than 5
 *   - otherwise, prints "monkey"
 */
var numbers = Math.random() * 10
if (numbers < 5) {
    console.log("sall number");
} else if (numbers > 5) {
    console.log("big number");
} else {
    console.log("monkey");
}
/*
 * Prompt 03:
 *
 * Driver's Ed! Create a variable that holds a person's age. If their age is
 * greater than 16, print "Here are the keys"; otherwise print "Sorry, you're
 * too young for now."
 */
var age = 17
if (age > 16) {
    console.log("Here are the keys");
} else {
    console.log("Sorry, you're too young for now");
}