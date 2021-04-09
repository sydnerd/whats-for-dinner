//when the user clicks a dish option, and then clicks lets cook,
//the user sees a randomdish from the list of possible dishes
//use query selector to grab html that we are going to be using
//create event listener on lets cook button
//create random generator function
//random generated meal comes on the cookpot box,
//put hidden class on the pot
var sides =[
  "Caeser Salad",
  "Crispy Potatoes",
  "Brussel Sprouts",
  "Mashed Potatoes",
  "Garden Salad",
  "French Fries",
  "Tater Tots",
  "Cole Slaw",
];

var mains =[
  "Chicken Parmesean",
  "Spaghetti and Meatballs",
  "Chicken Tenders",
  "Cheese Burger",
  "Pulled Pork Sandwich",
  "Cheese Pizza",
  "Chicken Fried Rice",
  "Grilled Chicken",
  "Steak Fajitas",
  "Fillet Mignon",
];

var desserts =[
  "Apple Pie",
  "Cheesecake",
  "Brownie",
  "Funfetti Cupcake",
  "Pumpkin Pie",
  "Vanilla Icecream",
  "Key Lime Pie",
  "Black Forest Cake",
  "Chocolate Fudge",
  "Strawberry Shortcake",
];

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
// function showRecipe(){
//   randomDishDisplay.innerText =
//     `<h2>${recipe}</h2>`
//   }
//list of functions
// //function displayMeal(){
//   var ele= document.getElementsByName("Course");
//   for(i=0;i<ele.length;i++){
//     if(ele[i].checked)
//     randomDishDisplay.innerHTML = ele[i].value;
//   }
// }
function displayMeal(){
var sideList = sides[getRandomIndex(sides)];
var mainsList = mains[getRandomIndex(mains)];
var dessertList = desserts[getRandomIndex(desserts)];
  if(sideRadio.checked){
  randomDishDisplay.innerText =sideList;
  image.classList.add("hidden");
  return sideList;
  }else if(mainRadio.checked){
  randomDishDisplay.innerText =mainsList;
  image.classList.add("hidden");
  }else {
  randomDishDisplay.innerText =dessertList;
  image.classList.add("hidden");
  }
}
//List of function for random dishes
var sideList = sides[getRandomIndex(sides)];
console.log(sideList)
var mainsList = mains[getRandomIndex(mains)];
var dessertList = mains[getRandomIndex(desserts)];

function getRandomElement(array){
  return array[getRandomIndex(array)];
}
function getRandomIndex(array){
  return Math.floor(Math.random()*array.length);
}
