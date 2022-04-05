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
 * Create an array called people that contains three names in it.
 */
var people = ["Yusef", "Mamragbe", "Jeremy"]
/*
 * Prompt 02:
 *
 * Create an array called countries that contains four countries in it.
 */
let countries = ["USA", "Italy", "France", "Spain"]
/*
 * Prompt 03:
 *
 * Create an array called cities taht contains five cities in it.
 */
const city = ["New York", "LA", "Miami", "Detriot", "Brooklyn"]
/*
 * Prompt 04:
 *
 * Create an empty array called favoriteNumbers. On a separate line for each,
 * add a number to the favoriteNumbers array so there are 4 numbers in it.
 */
let favoriteNumbers = []
favoriteNumbers.push("3")
favoriteNumbers.push("5")
favoriteNumbers.push("10")
favoriteNumbers.push("13")
/*
 * Prompt 05:
 *
 * Create an empty array called actors. On a separate line for each, add an
 * actor to the actors array so there are 5 actors in it.
 */
let actors = []
actors.push("Zendaya")
actors.push("Alec Baldwin")
actors.push("Arnold S")
actors.push("The Rock")
actors.push("Jason Mamoa")
/*
 * Prompt 06:
 *
 * Create an array called sesameStreetCharacters with "Elmo", "Big Bird",
 * "Cookie Monster", "Ernie", and "Bert" in it. On a separate line for each,
 * remove the last 3 characters.
 */
let sesameStreetCharacters = ["Elmo", "Big Bird", "Cookie Monster", "Ernie", "Bert"]
sesameStreetCharacters.pop()
sesameStreetCharacters.pop()
sesameStreetCharacters.pop()
/*
 * Prompt 07:
 *
 * Create an array called starWarsCharacters with "Luke", "Leia", "Han",
 * "R2-D2", "Chewbacca", and "C-3PO" in it. Create a variable called han and
 * assign it the string "Han" from the array (i.e. retrieve it from the array).
 * Do the same for luke, leia, and chewbacca.
 */
let starWarsCharacters = ["Luke", "Leia", "Han", "R2-D2", "Chewbacca", "C-3P0"]
var han = [2]
var luke = [0]
var leia = [1]
var chewbacca = [4]
/*
 * Prompt 08:
 *
 * Create an array called jerseyShore with "JWoww", "The Situation", "DJ Pauly
 * D", "Snookie", and "Sweetheart" in it. On separate lines for each, remove
 * "Snookie" and "DJ Pauly D"
 */
let jerseyShore = ["JWoww", "The Situation", "DJ Pauly D", "Snookie", "Sweetheart"]
jerseyShore.splice(2, 2)
/*
 * Prompt 09:
 *
 * Create an array called months with all 12 months as strings in it (i.e.
 * "January", "February", "March", etc). In a single line, delete "September",
 * "October", and "November".
 */
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
months.splice(8, 3)
/*
* Prompt 10:
*
* Create an array called months with all 12 months as strings in it (i.e.
    * "January", "February", "March", etc). Create a loop that prints out each
    * month from the array on a separate line.
    */
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
for (i=0; i<months.length; i++) {
    console.log(months[i]);
} 
/*
 * Prompt 11:
 *
 * Create an empty array called randomNumbers. Write a for loop that will add
 * 4 random numbers to the randomNumbers array using Math.random() and push.
 */
var randomNumbers = []
for (i=0; i<=3; i++) {
    randomNumbers.push(Math.random())
}
/*
 * Prompt 12:
 *
 * Create an array name foods and add 10 foods to it. Create another array
 * called favoriteFoods but leave it empty. Create an array that loops through
 * the foods array and adds the current item to the favoriteFoods array if the
 * string is longer than 6 characters (i.e. string.length > 6).
 */

var foods = ["pasta", "chicken", "peas", "brocolli", "banana", "popcorn", "fries", "lamb", "pizza", "lobster"]
var favoriteFoods = []
for (i=0; i<foods.length; i++) {
    if (foods[i].length>6) {
        favoriteFoods.push(foods[i])
    }
}