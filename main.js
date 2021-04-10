var radioButtons = document.querySelectorAll(".radioButtons");
var letsCookButton = document.querySelector("#cookButton");
var randomDishDisplay = document.querySelector("#dishDisplay");

var image =document.querySelector("#cookpotImg");
var rightText =document.querySelector("#rightText");
var addARecipe =document.querySelector("#addRecipeButn");
var footer =document.querySelector("#recipeFooter");


letsCookButton.addEventListener("click",displayMeal);
addARecipe.addEventListener("click", displayForm);

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


//When you click the add a recipe button, the footer appears. It is hidden before
//When the recipe Type = side, push the string into the sides array and then use the display
//function to display the meal and removethe cooking pot image
//Do this for side, main dish, and dessert
