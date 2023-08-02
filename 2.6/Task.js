let conf = confirm("You must be at least 18 years old for voting.");
let name = prompt("What's your name?");
let age = prompt("What's your age?");

if (age>=18) {
alert("you are eligible for voting.");
}
else {
alert("Sorry, you are not eligible for voting.");
}