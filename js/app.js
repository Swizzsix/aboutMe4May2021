'use strict';

// // proof of life
// console.log('hello world');

// // ask a question that expects a yes or no answer
// let climbing = prompt('Hello! Do you like climbing stuff?');
// console.log('user likes climbing:', climbing);

// let lowerCaseClimbing = climbing.toLowerCase();
// let upperCaseClimbing = climbing.toUpperCase();
// console.log(lowerCaseClimbing);
// console.log(upperCaseClimbing);

// if (lowerCaseClimbing === 'yes' || lowerCaseClimbing === 'y') {
//   alert('cool, climbing is fun!');
// } else if (lowerCaseClimbing === 'no' || LowerCaseClimbing === 'n') {
//   alert('I recommend looking into it!');
// } else {
//   alert('Please reply with yes or no to continue');
// }

// let shoes = prompt('Have you ever put on a fitted pair of climbing shoes?');
// console.log('user has tried shoes:', shoes);


// let lowerCaseShoes = shoes.toLowerCase();
// let upperCaseShoes = shoes.toUpperCase();
// console.log(lowerCaseShoes);
// console.log(upperCaseShoes);

// if (lowerCaseShoes === 'yes' || lowerCaseShoes === 'y') {
//   alert('RIGHT ON!');
// } else if (lowerCaseShoes === 'no' || LowerCaseShoes === 'n') {
//   alert('nice, ask to try an inexpensive less aggressive shoe!');
// } else {
//   alert('Please reply with yes or no to continue');
// }

// let capable = prompt('Do you have extremeties to grip a hold?');
// console.log('user can climb:', capable);

// let lowerCaseCapable = capable.toLowerCase();
// let upperCaseCapable = capable.toUpperCase();
// console.log(lowerCaseCapable);
// console.log(upperCaseCapable);

// if (lowerCaseCapable === 'yes' || lowerCaseCapable === 'y') {
//   alert('cool, almost anyone can climb! Fear of heights go away!');
// } else if (lowerCaseCapable === 'no' || LowerCaseCapable === 'n') {
//   alert('I\m sorry to hear that');
// } else {
//   alert('Please reply with yes or no to continue');
// }

// let localGym = prompt('Do you live next to a local gym?');
// console.log('user has local gym:', localGym);


// let lowerCaseLocalGym = localGym.toLowerCase();
// let upperCaseLocalGym = localGym.toUpperCase();
// console.log(lowerCaseLocalGym);
// console.log(upperCaseLocalGym);

// if (lowerCaseLocalGym === 'yes' || lowerCaseLocalGym === 'y') {
//   alert('Scope it out! I recommend starting out Bouldering');
// } else if (lowerCaseLocalGym === 'no' || LowerCaseLocalGym === 'n') {
//   alert('Next time you visit a main city, see if they have a bouldering/sport gym!');
// } else {
//   alert('Please reply with yes or no to continue');
// }

// let phobia = prompt('Are you afraid of heights?');
// console.log('afraid of heights:', phobia);

// let lowerCasePhobia = phobia.toLowerCase();
// let upperCasePhobia = phobia.toUpperCase();
// console.log(lowerCasePhobia);
// console.log(upperCasePhobia);

// if (lowerCasePhobia === 'yes' || lowerCasePhobia === 'y') {
//   alert('That goes away quickly!');
// } else if (lowerCasePhobia === 'no' || LowerCasePhobia === 'n') {
//   alert('A healthy respect is important!');
// } else {
//   alert('Please reply with yes or no to continue');
// }

// let interest = prompt('on a scale of 1 to 3 how interested are you in climbing?')

// switch (interest) {
//   case '1':
//     alert('Maybe your kids will like it!');
//     break;
//   case '2':
//     alert('Ask a friend if they\d like to go with you');
//     break;
//   case '3':
//     alert('Grab your chalk back and a pair of climbing shoes :]');
//     break;
//   default:
//     alert('Ask a climber to take you');
//     break;
// }

// console.log('user interest 1-3:', interest);

//number game
// let guessMyNumber = prompt ('Guess a number between 1 and 100')
// console.log ('User\s guessed:', guessMyNumber)


//global arrays
let climbingTypesArray = ['LEAD', 'TRAD', 'BOULDERING', 'DEEP WATER SOLO', 'free solo']
let favoriteShoeArray = ['5.10', 'MAD ROCK', 'LA SPORTIVA', 'EVOLV', 'SCARPA']
let climbingCommunityArray = ['ELI', 'BRIAN', 'TROY']
let benefitsArray = ['BALANCE', 'FLEXIBILITY', 'ENDURANCE', 'HAND EYE COORDINATION', 'COMMUNITY']

console.log(climbingTypesArray.length);
console.log(favoriteShoeArray.length);
console.log(climbingCommunityArray.length);
console.log(benefitsArray.length);

let numberOfGuesses = 6
let theyGuessedRight = false

while (numberOfGuesses > 0 && theyGuessedRight === false){
  //Question One
  let climbingTypesGuess = prompt ('Name a method of climbing?')
  console.log(climbingTypesGuess);
  
  // lower || uppercase
  let lowerCaseClimbingTypesGuess = climbingTypesGuess.toLowerCase();
  let upperCaseClimbingTypesGuess = climbingTypesGuess.toUpperCase();
  console.log(lowerCaseClimbingTypesGuess);
  console.log(upperCaseClimbingTypesGuess);
  
for (let i = 0; i < climbingTypesArray.length; i++) {
  console.log(climbingTypesArray[i]);
  if (climbingTypesArray[i] === climbingTypesGuess || climbingTypesArray[i] === lowerCaseClimbingTypesGuess || climbingTypesArray[i] === upperCaseClimbingTypesGuess) {
    console.log('Correct!');
    alert('Correct!');
    theyGuessedRight = true
    break;
   }
}
if (theyGuessedRight === false)
    alert('Sorry, Troy does know now how to ' + climbingTypesGuess);

//check if they guessed right is still false then you will tell them to try again
numberOfGuesses--
}

while (numberOfGuesses > 0 && theyGuessedRight === false){
  //Question Two
  let favoriteShoeGuess = prompt ('What is one of Troy\s favorite climbing shoe brands?')
  console.log(favoriteShoeGuess);

  // lower || uppercase
  let lowerCaseFavoriteShoeGuess = favoriteShoeGuess.toLowerCase();
  let upperCaseFavoriteShoeGuess = favoriteShoeGuess.toUpperCase();
  console.log(lowerCaseFavoriteShoeGuess);
  console.log(upperCaseFavoriteShoeGuess);

for (let i = 0; i < favoriteShoeArray.length; i++) {
  console.log(favoriteShoeArray[i]);
  if (favoriteShoeArray[i] === favoriteShoeGuess || favoriteShoeArray[i] === lowerCaseFavoriteShoeGuess || favoriteShoeArray[i] === upperCaseFavoriteShoeGuess) {
    console.log('Correct!');
    alert('Correct!');
    theyGuessedRight = true
    break;
  }
}
if (theyGuessedRight === false)
    alert('Sorry, Troy has never tried ' + favoriteShoeGuess);

//check if they guessed right is still false then you will tell them to try again
numberOfGuesses--
}

while (numberOfGuesses > 0 && theyGuessedRight === false){
  //Question Three
  let climbingCommunityGuess = prompt ('Can you name one of Troy\s climbing friends?')
  console.log(climbingCommunityGuess);

  //lower || uppercase
  let lowerCaseClimbingCommunityGuess = climbingCommunityGuess.toLowerCase();
  let upperCaseClimbingCommunityGuess = climbingCommunityGuess.toUpperCase();
  console.log(lowerCaseClimbingCommunityGuess);
  console.log(upperCaseClimbingCommunityGuess);

for (let i = 0; i < climbingCommunityArray.length; i++) {
  console.log(climbingCommunityArray[i]);
  if (climbingCommunityArray[i] && climbingCommunityGuess === climbingCommunityArray[i] === lowerCaseClimbingCommunityGuess || climbingCommunityArray[i] === upperCaseClimbingCommunityGuess) {
    console.log('Troy loves meeting new climbers of any level!');
    alert('Correct!');
    theyGuessedRight = true
    break;
  }
}
if (theyGuessedRight === false)
    alert('Troy has never met ' + climbingCommunityGuess);

numberOfGuesses--
}

while (numberOfGuesses > 0 && theyGuessedRight === false){
  //Question Four
  let benefitsGuess = prompt ('Name one benefit Troy receives from climbing!')
  console.log(benefitsGuess);

  //lower || uppercase
  let lowerCaseBenefitsGuess = benefitsGuess.toLowerCase();
  let upperCaseBenefitsGuess = benefitsGuess.toUpperCase();
  console.log(lowerCaseBenefitsGuess);
  console.log(upperCaseBenefitsGuess);

for (let i = 0; i < benefitsArray.length; i++) {
  console.log(benefitsArray[i]);
  if (benefitsArray[i] === benefitsGuess || benefitsArray[i] === lowerCaseBenefitsGuess || benefitsArray[i] === upperCaseBenefitsGuess) {
    console.log('A safe climber is a healthy one!');
    alert('Correct!');
    theyGuessedRight = true
    break;
  }
}
if (theyGuessedRight === false)
    alert('Nice! I didn\t think of ' + benefitsGuess);

numberOfGuesses--
}