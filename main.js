var radioButtons = document.querySelectorAll(".radioButtons");
var letsCookButton = document.querySelector("#cookButton");
var randomDishDisplay = document.querySelector("#dishDisplay");

var image =document.querySelector("#cookpotImg");
var rightText =document.querySelector("#rightText");




letsCookButton.addEventListener("click",displayMeal);




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


var sideList = sides[getRandomIndex(sides)];
var mainsList = mains[getRandomIndex(mains)];
var dessertList = mains[getRandomIndex(desserts)];

function getRandomIndex(array){
  return Math.floor(Math.random()*array.length);
}
