

//list of queryselectors

var radioButtons = document.querySelectorAll(".radioButtons");
var letsCookButton = document.querySelector("#cookButton");
var randomDishDisplay = document.querySelector("#dishDisplay");

var image =document.querySelector("#cookpotImg");
var rightText =document.querySelector("#rightText");



//list of event listners
letsCookButton.addEventListener("click",displayMeal);

// function meal(){
//   for(var i=0; i<radioButtons.length; i++)
//     if(radioButton[i].checked){
//
//     }
// }

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

// function displayMeal(){
//   for(var i=0; i<radioButtons.length; i++)
//     if(radioButtons[i].checked){
//     console.log(radioButtons[i])
//     }
// var sideList = sides[getRandomIndex(sides)];
// var mainsList = mains[getRandomIndex(mains)];
// var dessertList = desserts[getRandomIndex(desserts)];
// rightText.classList.remove("hidden");
// image.classList.add("hidden");
//   if(sideRadio.checked){
//   randomDishDisplay.innerText =`${sideList}!`;
//   }else if(mainRadio.checked){
//   randomDishDisplay.innerText =`${mainsList}!`;
//   }else {
//   randomDishDisplay.innerText =`${dessertList}!`;
//   }
// }
var buttonClicked = function(){
  for(var i=0; i<radioButtons.length; i++)
    if(radioButtons[i].checked){
      return radioButtons[i].id
    }
}

function sideDisplay(){
  var sideList = sides[getRandomIndex(sides)];
  return sideList;
  // randomDishDisplay.innerText =`${sideList}!`;
}

function dessertDisplay(){
  var dessertList = desserts[getRandomIndex(desserts)];
  return dessertList;
  // randomDishDisplay.innerText =`${dessertList}!`;
}

function mainsDisplay(){
  var mainsList = mains[getRandomIndex(mains)];
  return mainsList;

  // randomDishDisplay.innerText =`${mainsList}!`;
}

function displayMeal(){
  rightText.classList.remove("hidden");
  image.classList.add("hidden");
  var button = buttonClicked();
  var text ;
 if(button == "side"){
    text =sideDisplay();
  }if(button == "mainDish"){
    text =mainsDisplay();
  }if (button == "dessert"){
    text=dessertDisplay();
  }if(button == "entireMeal"){
    text = `${mainsDisplay()} with a side of ${sideDisplay()} and ${dessertDisplay()} for dessert`
  }
  randomDishDisplay.innerText = `${text} !`
}


//List of function for random dishes
var sideList = sides[getRandomIndex(sides)];
var mainsList = mains[getRandomIndex(mains)];
var dessertList = mains[getRandomIndex(desserts)];

function getRandomIndex(array){
  return Math.floor(Math.random()*array.length);
}
