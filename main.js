//when the user clicks a dish option, and then clicks lets cook,
//the user sees a randomdish from the list of possible dishes
//use query selector to grab html that we are going to be using
//create event listener on lets cook button
//create random generator function
//random generated meal comes on the cookpot box,
//put hidden class on the pot

//list of queryselectors
var sideRadio = document.querySelector("#side");
var mainRadio = document.querySelector("#mainDish");
var dessertRadio = document.querySelector("#dessert");
var entireMeal = document.querySelector("#entireMeal")

var letsCookButton = document.querySelector("#cookButton");
var randomDishDisplay = document.querySelector("#dishDisplay");

var image =document.querySelector("#cookpotImg");
var rightText =document.querySelector("#rightText");

//need to get the value of the radio buttons to equal the array variables
//change innerHTML??



//list of event listners
letsCookButton.addEventListener("click",displayMeal);



// function displayMeal(){
//   var recipe = sides[getRandomIndex(recipe)]
//   if(sideRadio.checked){
//     recipe = sides[getRandomIndex(sides)]
//     randomDishDisplay.innerText =recipe;
//   }
// }
// function showRecipe(recipe){
//   randomDishDisplay.innerText =
//     `<h2>${recipe}</h2>`
//   }
//would like to refactor this to be smaller and similer, maybe can use some interpolation
//need to figure out how to get the "You should make: text to appear
//need to figure out how to interpolate the exclamation mark after the food

function displayMeal(){
var sideList = sides[getRandomIndex(sides)];
var mainsList = mains[getRandomIndex(mains)];
rightText.classList.remove("hidden");
image.classList.add("hidden");
var dessertList = desserts[getRandomIndex(desserts)];
  if(sideRadio.checked){
  randomDishDisplay.innerText =`${sideList}!`;
  }else if(mainRadio.checked){
  randomDishDisplay.innerText =`${mainsList}!`;
  }else {
  randomDishDisplay.innerText =`${dessertList}!`;
  }
}
//List of function for random dishes
var sideList = sides[getRandomIndex(sides)];
console.log(sideList)
var mainsList = mains[getRandomIndex(mains)];
var dessertList = mains[getRandomIndex(desserts)];

function getRandomIndex(array){
  return Math.floor(Math.random()*array.length);
}
