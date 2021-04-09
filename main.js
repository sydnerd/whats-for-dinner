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
var sideButton = document.querySelector("#sideButton");
var letsCookButton = document.querySelector("#cookButton");
var randomDishDisplay = document.querySelector("#dishDisplay")








//list of event listners
letsCookButton.addEventListener("click",showDish);





//list of functions
function showDish(){
  var sideList = sides[getRandomIndex(sides)];
  randomDishDisplay.innerText =sideList;
}



//List of function for random dishes
var sideList = sides[getRandomIndex(sides)];
console.log(sideList)




function getRandomIndex(array){
  return Math.floor(Math.random()*array.length);
}
