var radioButtons = document.querySelectorAll(".radioButtons");
var letsCookButton = document.querySelector("#cookButton");
var randomDishDisplay = document.querySelector("#dishDisplay");

var image =document.querySelector("#cookpotImg");
var rightText =document.querySelector("#rightText");
var addARecipe =document.querySelector("#addRecipeButn");
var footer =document.querySelector("#recipeFooter");
var recipeName = document.querySelector("#recipeName");
var recipeType = document.querySelector("#recipeType");
var addNewButton = document.querySelector("#addNewButton");


letsCookButton.addEventListener("click",displayMeal);
addARecipe.addEventListener("click", displayForm);
addNewButton.addEventListener("click",addRecipe);

function buttonClicked(){
for(var i=0; i<radioButtons.length; i++)
  if(radioButtons[i].checked){
    return radioButtons[i].id
  }
}

function sideDisplay(){
  var sideList = sides[getRandomIndex(sides)];
  return sideList;
}

function dessertDisplay(){
  var dessertList = desserts[getRandomIndex(desserts)];
  return dessertList;
}

function mainsDisplay(){
  var mainsList = mains[getRandomIndex(mains)];
  return mainsList;
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
  randomDishDisplay.innerText = `${text}!`
}

function displayForm(){
  footer.classList.remove("hidden");
}

function getRandomIndex(array){
  return Math.floor(Math.random()*array.length);
}
