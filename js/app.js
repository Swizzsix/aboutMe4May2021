'use strict';

// proof of life
console.log('hello world');

// ask a question that expects a yes or no answer
let climbing = prompt('Hello! Do you like climbing stuff?');
console.log('user likes climbing:', climbing);

let lowerCaseClimbing = climbing.toLowerCase();
let upperCaseClimbing = climbing.toUpperCase();
console.log(lowerCaseClimbing);
console.log(upperCaseClimbing);

if (lowerCaseClimbing === 'yes' || lowerCaseClimbing === 'y') {
  alert('cool, climbing is fun!');
} else if (lowerCaseClimbing === 'no' || LowerCaseClimbing === 'n') {
  alert('I recommend looking into it!');
} else {
  alert('Please reply with yes or no to continue');
}

let shoes = prompt('Have you ever put on a fitted pair of climbing shoes?');
console.log('user has tried shoes:', shoes);


let lowerCaseShoes = shoes.toLowerCase();
let upperCaseShoes = shoes.toUpperCase();
console.log(lowerCaseShoes);
console.log(upperCaseShoes);

if (lowerCaseShoes === 'yes' || lowerCaseShoes === 'y') {
  alert('RIGHT ON!');
} else if (lowerCaseShoes === 'no' || LowerCaseShoes === 'n') {
  alert('nice, ask to try an inexpensive less aggressive shoe!');
} else {
  alert('Please reply with yes or no to continue');
}

let capable = prompt('Do you have extremeties to grip a hold?');
console.log('user can climb:', capable);

let lowerCaseCapable = capable.toLowerCase();
let upperCaseCapable = capable.toUpperCase();
console.log(lowerCaseCapable);
console.log(upperCaseCapable);

if (lowerCaseCapable === 'yes' || lowerCaseCapable === 'y') {
  alert('cool, almost anyone can climb! Fear of heights go away!');
} else if (lowerCaseCapable === 'no' || LowerCaseCapable === 'n') {
  alert('I\m sorry to hear that');
} else {
  alert('Please reply with yes or no to continue');
}

let localGym = prompt('Do you live next to a local gym?');
console.log('user has local gym:', localGym);


let lowerCaseLocalGym = localGym.toLowerCase();
let upperCaseLocalGym = localGym.toUpperCase();
console.log(lowerCaseLocalGym);
console.log(upperCaseLocalGym);

if (lowerCaseLocalGym === 'yes' || lowerCaseLocalGym === 'y') {
  alert('Scope it out! I recommend starting out Bouldering');
} else if (lowerCaseLocalGym === 'no' || LowerCaseLocalGym === 'n') {
  alert('Next time you visit a main city, see if they have a bouldering/sport gym!');
} else {
  alert('Please reply with yes or no to continue');
}

let phobia = prompt('Are you afraid of heights?');
console.log('afraid of heights:', phobia);

let lowerCasePhobia = phobia.toLowerCase();
let upperCasePhobia = phobia.toUpperCase();
console.log(lowerCasePhobia);
console.log(upperCasePhobia);

if (lowerCasePhobia === 'yes' || lowerCasePhobia === 'y') {
  alert('That goes away quickly!');
} else if (lowerCasePhobia === 'no' || LowerCasePhobia === 'n') {
  alert('A healthy respect is important!');
} else {
  alert('Please reply with yes or no to continue');
}

let interest = prompt('on a scale of 1 to 3 how interested are you in climbing?')

switch (interest) {
  case '1':
    alert('Maybe your kids will like it!');
    break;
  case '2':
    alert('Ask a friend if they\d like to go with you');
    break;
  case '3':
    alert('Grab your chalk back and a pair of climbing shoes :]');
    break;
  default:
    alert('Ask a climber to take you');
    break;
}

console.log('user interest 1-3:', interest);