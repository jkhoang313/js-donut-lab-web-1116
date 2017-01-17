//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
var guests = parseInt(prompt("How many guests do you have?"), 10)
var donuts = parseInt(prompt("How many donuts do you need?"), 10)

if (donuts >= guests) {
  alert(`You have ${donuts} donuts and ${guests} guests, you have enough donuts for each guest.`)
} else {
  alert(`You have ${donuts} donuts and ${guests} guests, you do not have enough donuts for each guest.`)
}
