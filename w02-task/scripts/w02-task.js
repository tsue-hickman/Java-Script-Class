/* W02-Task - Profile Home Page */
/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Tayler Sue Hickman';

const currentYear = new Date().getFullYear();
console.log(currentYear);

const profilePicture = 'images/tsue.png';
console.log(profilePicture);

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year'); // Corrected the selector

/* Step 4 - Adding Content */

// Add full name to the nameElement
nameElement.textContent = fullName;

// favorite food
const favoriteFoods = ['Steak', 'French Fries', 'Sushi'];
foodElement.textContent = favoriteFoods.join(', ');

// Declare a variable for another favorite food item
const newFavoriteFood = 'Burgers';

/* Step 5 - Array */

// Add food to array
favoriteFoods.push(newFavoriteFood);

// Display new array
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Remove the first food from the array
favoriteFoods.shift();

// Append array after removing the first food
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Remove the last element in the food array
favoriteFoods.pop();

// Append the final array
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
