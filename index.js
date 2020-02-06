var letterContainer = document.getElementById("letter-container");
var enterWord = document.querySelector(".enter-word").style.visibility ="hidden";
var submitWord = document.querySelector(".submit-word").style.visibility ="hidden";

function pickFrom(letters) {
  if (letterContainer.innerHTML.length < 8) {
    letterContainer.innerHTML += rando(letters);

    if(letterContainer.innerHTML.length == 8){

      enterWord = document.querySelector(".enter-word").style.visibility ="visible";
      submitWord = document.querySelector(".submit-word").style.visibility ="visible";
    }
  }
}

function getWord(){
  var word = document.querySelector(".enter-word").value;
  word = word.split("");
  var letterContainerFull = letterContainer.innerHTML.split("");
  if(word.length <9 ){

    for (var i=0; i<word.length; i++){

      if(letterContainerFull.includes(word[i])){
        console.log(word[i]);

        var letterContainerRemain =  letterContainerFull.indexOf(word[i]);

        letterContainerFull.splice(letterContainerRemain, 1);




        //  console.log("This is valid");

      }

      else {

      console.log("This is not valid");

      }



    }

    var yourWord = word.join("");
    console.log(yourWord);

}
}

function readTextFile(){

}










//ask the user to input a word from generated letters
//compare word to dictionary
