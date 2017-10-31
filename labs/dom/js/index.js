"use strict";

var boxOne = document.querySelector('#one'),
  boxTwo = document.querySelector('#two'),
  boxThree = document.querySelector('#three'),
  boxFour = document.querySelector('#four'),
  boxFive = document.querySelector('#five'),
  boxSix = document.querySelector('#six');


boxOne.addEventListener("click", function() {
  // if (boxOne.classList.contains("spin")) {
  //   boxOne.classList.remove("spin");
  // } else {
  //   boxOne.classList.add("spin");
  // }
	boxOne.classList.toggle("spin");
	setTimeout(function(){boxOne.classList.toggle("spin");}, 1000)
});

boxTwo.addEventListener("mouseover", function() {
	boxTwo.classList.add("fade-to-white");
	boxTwo.classList.add("white");
});
boxTwo.addEventListener("mouseout", function() {
	boxTwo.classList.remove("fade-to-white");
	boxTwo.classList.remove("white");
});

boxThree.addEventListener("dblclick", function(){
	boxThree.classList.toggle("explode");
	setTimeout(function(){boxThree.classList.toggle("explode");}, 1000)
});

let counter = true;
boxFour.addEventListener("click", function(){
	if(counter) {
		boxFour.classList.remove("float");
		boxFour.classList.add("fall");
		counter = !counter;
	} else {
		boxFour.classList.remove("fall");
		boxFour.classList.add("float");
		counter = !counter;
	}
});

boxFive.addEventListener("mouseover", function() {
	boxFive.classList.toggle("shake");
	boxFive.classList.toggle("black");
})
boxFive.addEventListener("mouseout", function() {
	boxFive.classList.toggle("shake");
	boxFive.classList.toggle("black");
})
