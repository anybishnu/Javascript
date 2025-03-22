console.log("This is assignment page day - 15");
/* Q.1 - age category message - ask the user for their age. if they are under 18, print "you are minor".
if they are between 18 and 60, print "you are an adult". if they are above 60, print "you are a senior citizen".*/

/*
let age = Number(prompt("Enter your age!"));

if (isNaN(age) || age < 0) {
  console.log("invalid age, try again!");
} else if (age < 18) {
  console.log("you are a minor");
} else if (age < 60) {
  console.log("you are an adult");
} else {
  console.log("you are senior citizen");
}
*/

/* Q.2 - even or odd sum - take two numbers from the user using prompt(). if the sum of both numbers is even,
print "even sum"; otherwise, print "odd sum".*/

/*
let num1 = Number(prompt("Enter your first number:"));
let num2 = Number(prompt("Enter your second number:"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input! Please enter numbers only.");
} else {
    let sum = num1 + num2;
    let result = (sum % 2 === 0) ? "Even sum" : "Odd sum";
    console.log(result, ":", sum);
}
*/

/*Q.3 - character case checker - ask the user for a single character.
check if it's uppercase, lowercase, or neither(not a letter).*/

/*
let input = prompt("Enter a single character:");

if (input.length !== 1) {
    console.log("Invalid input! Please enter only one character.");
} else if (input >= "A" && input <= "Z") {
    console.log("The character is uppercase.");
} else if (input >= "a" && input <= "z") {
    console.log("The character is lowercase.");
} else {
    console.log("Neither (not a letter).");
}
*/

/*Q.4 - Largest of three numbers - Take three numbers as input and print the largest number among them without using Math.max().*/

/*
let fnumber = Number(prompt("Enter first number:"));
let snumber = Number(prompt("Enter second number:"));
let tnumber = Number(prompt("Enter third number:"));

if (isNaN(fnumber) || isNaN(snumber) || isNaN(tnumber)) {
    console.log("Invalid input! Please enter numbers only.");
} else {
    let largest = fnumber;

    if (snumber > largest) {
        largest = snumber;
    }
    if (tnumber > largest) {
        largest = tnumber;
    }

    console.log("The largest number is:", largest);
}
*/

/*Q.5 - Leap year checker - ask the user for a year and determine if it's a leap year or not.*/

/*
let year = Number(prompt("Enter a year:"));

if (isNaN(year) || year <= 0) {
    console.log("Invalid input! Please enter a valid positive year.");
} else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
*/

/*Q.6 simple calculator - ask the user for two numbers and an operator(+ - * /). perform the operation and display the result.*/

/*
let firstNumber = Number(prompt("Enter the first number:"));
let operator = prompt("Enter the operator (+, -, *, /):");
let secondNumber = Number(prompt("Enter the second number:"));

let result;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Invalid input! Please enter valid numbers.");
} else if (operator == "+") {
    result = firstNumber + secondNumber;
} else if (operator == "-") {
    result = firstNumber - secondNumber;
} else if (operator == "*") {
    result = firstNumber * secondNumber;
} else if (operator == "/") {
    if (secondNumber === 0) {
        console.log("Division by zero is not allowed.");
    } else {
        result = firstNumber / secondNumber;
    }
} else {
    console.log("Invalid operator! Please use +, -, *, or /.");
}

if (result !== undefined) {
    console.log("Result:", result);
}
*/

/*Q.7 - Positive, Negative or Zero - Take a number input and check if it is positive, negative or zero.*/

/*
let userInput = Number(prompt("Enter a number:"));

if (userInput > 0) {
  console.log("User input is positive");
} else if (userInput < 0) {
  console.log("User input is negative");
} else {
  console.log("User input is zero");
}
*/

/*Q.8 - user greeting - ask for the user's name and time(24 - hour format). Greet them accordingly:
5am - 12pm: "good morning, [name]!"
12pm - 5pm: "good afternoon, [name]!"
5pm - 9pm: "good evening, [name]!"
9pm - 5am: "good night, [name]!"
*/

/*
let userName = prompt("Enter your name:");
let userTime = Number(prompt("Enter the time in 24-hour format (0-23):"));

if (userTime >= 5 && userTime < 12) {
  console.log(`Good morning, ${userName}!`);
} else if (userTime >= 12 && userTime < 17) {
  console.log(`Good afternoon, ${userName}!`);
} else if (userTime >= 17 && userTime < 21) {
  console.log(`Good evening, ${userName}!`);
} else if ((userTime >= 21 && userTime <= 23) || (userTime >= 0 && userTime < 5)) {
  console.log(`Good night, ${userName}!`);
} else {
  console.log("Invalid time! Please enter a valid time between 0 and 23.");
}
*/

/*Q.9 - Traffic light system - ask the user for a traffic light color(red, yellow, green). print appropriate messages:
red: "stop!"
yellow: "get ready!"
green: "go!"
*/

/*
let userColor = prompt("Enter a traffic light color (red, yellow, green):").toLowerCase().trim();

if (userColor === "red") {
  console.log("🚦 Stop!");
} else if (userColor === "yellow") {
  console.log("⚠️ Get ready!");
} else if (userColor === "green") {
  console.log("✅ Go!");
} else {
  console.log("❌ Invalid color! Please enter red, yellow, or green.");
}
*/

/*Q.10 - Multiplication Table - ask the user for a number and print its multiplication table up to 10*/

/*
let userInput = Number(prompt("Enter a number for multiplication table:"));

if (!isNaN(userInput)) {
  console.log(`\n📌 Multiplication Table of ${userInput}:\n`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${userInput} × ${i} = ${userInput * i}`);
  }
} else {
  console.log("❌ Invalid input! Please enter a valid number.");
}
*/

/*Q.11 - grade calculator - ask the user for their marks(0-100).
assign grades based on the range:

90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F
*/

/*
let marks = Number(prompt("Enter your marks (0-100):"));

if (marks < 0 || marks > 100 || isNaN(marks)) {
  console.log("❌ Invalid input! Please enter a number between 0-100.");
} else {
  let grade;
  
  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 80) {
    grade = "B";
  } else if (marks >= 70) {
    grade = "C";
  } else if (marks >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(`📚 Your Marks: ${marks} → Grade: ${grade}`);
}
*/

/*Q.12 - simple login system - set a predefined username and password. 
Ask the user to enter their credentials using prompt(). 
if correct, print"login successfull"; otherwise, print "incorrect username or password."*/

/*
// Predefined credentials
const correctUsername = "bishnu";
const correctPassword = "123";

// User input
let username = prompt("Enter your username:");
let userPwd = prompt("Enter your password:");

// Checking credentials
if (username === correctUsername && userPwd === correctPassword) {
  console.log(`✅ Login successful! Welcome, ${username}.`);
} else {
  console.log("❌ Incorrect username or password. Please try again.");
}
*/

/*Q.13 - swapping without third variable - take two numbers from the user and swap their values without using a third varibale.*/

/*
let a = Number(prompt("Enter first number (a)")); //5
let b = Number(prompt("Enter second number (b)")); //10

a = a+b // a = 15
b = a - b // b = 5
a = a - b // a = 10

console.log(`a is ${a} and b is ${b}`);
*/

/*Q.14 - FizzBuzz(Multiple of both) - ask the user for a number.
if it's a multiple of both 3 and 5, print "FizzBuzz"; if only 3, print "Fizz"; if only 5, print"Buzz";
otherwize, print the number itself.
*/

/*
let userInput = Number(prompt("Enter a FizzBuzz number"));

if (userInput % 3 === 0 && userInput % 5 === 0) {
    console.log("FizzBuzz");
} else if (userInput % 3 === 0) {
    console.log("Fizz");
} else if (userInput % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(userInput);
}
*/

/*Q.15 - Number reversal - take a three-digit number from the user and print its reverse.(ex: 123 - 321)*/

/*
let thDigitNum = Number(prompt("Enter a three-digit number")); 
let reversedNum = 0;

while(thDigitNum > 0){
    let lastDigit = thDigitNum % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    thDigitNum = Math.floor(thDigitNum / 10);
}

console.log("Reversed Number:", reversedNum);
*/

/*Q.16 - sum of digits - take a number from the user and print the sum
of it's digits(ex: 123 - 1+2+3 = 6);
*/

/*
let userInput = Number(prompt("Enter a number"));
let sum = 0;

while(userInput > 0){
    let last_digit = userInput % 10;
    sum += last_digit;
    userInput = Math.floor(userInput / 10);
}

console.log(sum);
*/

/*Q.17 - palindrome checker - ask the user for a word. check if it reads the same forward
and backward. print "palindrome" or not a palindrome.
*/

/*
let userword = prompt("Enter your palindrome word");
let emptySpace = "";

for(let i = userword.length - 1; i >= 0; i--){
    emptySpace += userword[i];
}

if(userword == emptySpace){
    console.log("it's palindrome word");
}else {
    console.log("it's not palindrome word");
}
*/

/*Q.18 - reverse without string methods - ask the user for a number and reverse it without using .split(), .reverse, or.join()*/
/*
let user_input = Number(prompt("Enter a number:"));
let reversed_number = 0;

while (user_input > 0) {
    let last_digit = user_input % 10;
    reversed_number = (reversed_number * 10) + last_digit;
    user_input = Math.floor(user_input / 10);
}

console.log("Reversed Number:", reversed_number);
*/

/*Q.19 -  find second largest - take three numbers as input and find the second largest number (without using sort() or Math.max()) */

/*
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = Number(prompt("Enter third number"));

let second_largest;

if(a>b && a >c){
    second_largest = (b>c) ? b: c;
}else if(b>c && b>a){
    second_largest = (a > c) ? a : c
} else {
    second_largest = (a > b) ? a : b
}

console.log(second_largest);
*/

/*Q.20 - find first non-repeating character - 
ask the user for a word and find the first character that does not repeat. example: hello -> h(since e, i and o repeat).*/

/*
let user_input = prompt("Enter your word:");

for (let i = 0; i < user_input.length; i++) {
    let currentChar = user_input[i];
    let count = 0;

    
    for (let j = 0; j < user_input.length; j++) {
        if (user_input[j] === currentChar) {
            count++;
        }
    }

    
    if (count === 1) {
        console.log("First non-repeating character:", currentChar);
        break; 
    }
}
*/

/*Q.21 - even digit counter - take a number from the user and count how many even digits it has.*/

/*
let even_digit = Number(prompt("Enter number"));
let count = 0; // Even সংখ্যা গোনার জন্য

while (even_digit > 0) {
    let digit = even_digit % 10;
    if (digit % 2 === 0) { 
        count++;
    }
    even_digit = Math.floor(even_digit / 10);
}

console.log("Total even digits:", count);
*/

/*Q.22 - nested condition chalenge - ask the user for their age and salary. print a message based on conditions:
if age is below 18, print "not eligible"
if age is 18 or more but salary is less then 20,000, print "low salary"
if salary is 50,000 or more, print "high salary"
otherwise, print "medium salary"
*/

/*
let age = Number(prompt("Enter your age:"));
let salary = Number(prompt("Enter your salary:"));

if (age < 18) {
    console.log("not eligible");
} else if (salary < 20000) {
    console.log("low salary");
} else if (salary >= 50000) {
    console.log("high salary");
} else {
    console.log("medium salary");
}
*/

/*Q.23 - Toggle case - ask the user for a word and toggle the case of every character. ex: HeLLo -> hEllO.*/

/*
let userWord = prompt("Enter your word");
let emptyStr = "";

for(let i=0; i< userWord.length; i++){
    if(userWord[i] == userWord[i].toUpperCase()){
        emptyStr += userWord[i].toLowerCase()
    }else {
        emptyStr += userWord[i].toUpperCase();
    }
}

console.log(emptyStr);
*/

/*Q.24 - find the missing number in a sequence - 
take a list of consecutive numbers(except one missing) and find the missing number. ex: 1, 2, 3, 5 -> missing number is 4.*/

/*
let numbers = [1, 2, 3,4, 5, 7, 9];
let min = numbers[0];
let max = numbers[numbers.length - 1];

let missingNumber = -1;
for (let i = min; i <= max; i++) {
    let found = false;

    
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] === i) {
            found = true;
            break;
        }
    }

    
    if (!found) {
        missingNumber = i;
        break;
    }
}

console.log("Missing number is:", missingNumber);
*/

/*Q.25 - convert number to words - take a single-digit number and print it in words (ex: 1-> one, 2-> two)*/

/*
let num = Number(prompt("Enter a single-digit number (0-9):"));

if (num === 0) {
    console.log("Zero");
} else if (num === 1) {
    console.log("One");
} else if (num === 2) {
    console.log("Two");
} else if (num === 3) {
    console.log("Three");
} else if (num === 4) {
    console.log("Four");
} else if (num === 5) {
    console.log("Five");
} else if (num === 6) {
    console.log("Six");
} else if (num === 7) {
    console.log("Seven");
} else if (num === 8) {
    console.log("Eight");
} else if (num === 9) {
    console.log("Nine");
} else {
    console.log("Invalid input! Please enter a single-digit number (0-9).");
}
*/
