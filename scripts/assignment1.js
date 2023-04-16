// TASK NO.1

// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".


let ZakatPercentage = 0.025;
let UserInput = prompt("Enter Your Zakat Amount");
let Result = ZakatPercentage * (UserInput);
alert("Your Zakat is " + Result);

// ----------------------------------------------------------------------------------------------------------------------------------

// TASK NO. 2

// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.


let FamilyMembers = prompt("Please Enter the Number of family Member");

let FitraMetod = prompt("Please Select Fitra Method (1)Wheat 250Rs, (2)Barly 450Rs, (3)Dates 2100Rs, (4)Raisin 2800Rs");

if (FitraMetod === "1") {
    console.log("Your Fitra Amount is ", 250 * FamilyMembers);
}else if (FitraMetod === "2") {
    console.log ("Your Fitra Amount is ", 450 * FamilyMembers);
}else if (FitraMetod === "3") {
    console.log ("Your Fitra Amount is ", 2100 * FamilyMembers);
}else if (FitraMetod === "4") {
    console.log ("Your Fitra Amount is ", 2800 * FamilyMembers);
}
 else {
    console.log("Invalid Selection, Please Try Again");
}

// --------------------------------------------------------------------------------------------------------------------------------- 

// TASK NO. 3

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

let secretNumber = 8

let guessNum = prompt("Guess the Secret Number");
if (secretNumber == guessNum) {
    console.log("Congratulations!");
} else if (secretNumber < guessNum) {
    console.log("Your value is High Guess Again");
} else {
    console.log("Your value is  Low guess Again");
}

// ------------------------------------------------------------------------------------------------------------------------------------

// TASK NO. 4

// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

let myName = prompt("Please enter your name:");
myName = myName.charAt(0).toUpperCase() + myName.slice(1);

console.log("My name is: " + myName);

// ----------------------------------------------------------------------------------------------------------------------------------

// TASK NO. 5

// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

let contactNumbers = [];
let contactNames = [];

while (true) {
  let number = prompt("Please enter a contact number:");
  if (!number) {

    break;
  }
  let name = prompt("Please enter a contact name:");

  contactNumbers.push(number);
  contactNames.push(name);
}

for (let i = 0; i < contactNumbers.length; i++) {
  console.log(contactNumbers[i] + ": " + contactNames[i]);
}

// --------------------------------------------------------------------------------------------------------------------------------

// TASK NO. 6

// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining

let products = ["shoes", "hats", "belts", "watches", "sunglasses"];

emove (1-" + products.length + "):");
position = parseInt(position);

let removedItem = products.splice(position - 1, 1)[0]; 
console.log("Removed item: " + removedItem);

console.log("Remaining items: " + products.join(", "));
console.log("Total number of items: " + products.length);

// -------------------------------------------------------------------------------------------------------------------------------------

// TASK NO. 7

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.


let nationality = prompt("What is your nationality?");
let gender = prompt("What is your gender?");
let age = prompt("What is your age?");

if (nationality === "Pakistani" || nationality === "Indian") {
  if (gender === "male" && age >= 18) {
    console.log("You are eligible to vote!");
  } else if (gender === "female" && age >= 18) {
    let married = prompt("Are you married? (yes or no)");
    if (married === "yes") {
      console.log("You are eligible to vote!");
    } else {
      console.log("Sorry, you are not eligible to vote.");
    }
  } else {
    console.log("Sorry, you are not eligible to vote.");
  }
} else {
  console.log("Sorry, you are not eligible to vote.");
}

// ------------------------------------------------------------------------------------------------------------------------------------

// TASK NO. 8

// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

const WorldCupSquad = [
    "Babar Azam",
    "Fakhar Zaman",
    "Imam-ul-Haq",
    "Shoaib Malik",
    "Asif Ali",
    "Mohammad Hafeez",
    "Haris Sohail",
    "Sarfaraz Ahmed",
    "Shadab Khan",
    "Imad Wasim",
    "Hasan Ali",
    "Wahab Riaz",
    "Mohammad Amir",
    "Shaheen Afridi",
    "Junaid Khan"
  ];
  
  const teamPlayers = WorldCupSquad.slice();

  const finalTeamPlayers = teamPlayers.splice(0, 11);

  console.log(finalTeamPlayers);
  