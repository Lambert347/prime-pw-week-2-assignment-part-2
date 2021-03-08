// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The variable name is declared and its value is set to 'Dane'.
// The code then checks if the variable name (whose value is Dane) is an exact match to 'Mary'.
// If it is, the code then prints the statement 'Hi, Mary!' in the console log.
//Otherwise, the code prints 'How do you do?' in the console log which is the case because 'Dane' is not an exact match to 'Mary'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//The code first declares the variable secret. Then the code block declares the variable code and sets its value equal to 123.
//Then, if the value of code is an exact match to 123 (which it is), then the code sets the value of the secret variable to 'super'.
//Then, the code block multiples the value of code by 2 and sets the value of code to that new value.
//If the value of code is greater than 250, then the value of secret is set to 'duper'.
//Finally, the code block prints the value of secret to the console log.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//The code declares the variable isStudent and sets its value to true, declares the varaible age and sets its value to 34, and finally declares the variable zip and sets its value to 55407.
//The code then evaluates if isStudent is true AND if the zip value is greater than 80000, printing 'You're a student on the West Coast!' to the console log if the expression evaluates to true.
//Otherwise, if isStudent is false, or age (denoted by the ||) is under 30, then the code prints 'What are your hobbies?' to the console log.
//Otherwise, if isStudent is true, then the code prints 'Welcome to Prime!' to the console log.
//Otherise, the code prints 'How about the weather?' to the console log.
//Each "branch" of the if-else statement is mutually exclusive from the others. So, even if the first if statement is true, it will only print that statement to the console log. Even though isStudent being true also fullfills the condition for the third statement.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
//FIX - colorOne is supposed to be set to blue and colorTwo is supposed to be set to red.
//Should be let colorOne = 'blue'; and letcolorTwo = 'red';

if (mix === true) {
  colorOne = 'purple';
}
//FIX - only the value of colorOne is updated. Needs to include colorTwo = 'purple'; to update its value as well, as per the description.
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//FIX - time is declared as a constant when it needs to be declared as a variable, as per the description.
//Should be let time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
//FIX - the if statement uses ||, which is or. As per the description, the if statement should instead use && since it checks if the temp is above 39 AND time is greater than or equal to 4.
//Should be if (temp > 39 && time >=4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//FIX - minAge is declared as a constant when the description says to declare it as a variable.
//Should be let minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
//FIX - the decription says that the if expression should check if age is greater than or equal to minAge.
//In the code block itself, the two variables are flipped. If that is fixed, then the print to the console.log needs to be changed as well.
//Should be if(age >= minAge){
console.log('enter');
}
//Since the age is now greater than or equal to minAge, the code block will now print 'enter' to the console.log if that is true.
//The final fix is to change the console.log under the else expression. Since now that the condititon for the expression is if age is less than minAge, the print should now be 'no entry'.
//Should be else {
  console.log('no entry');
}
*/
