 //keep submission input and button hidden
$(".submission").hide();

//assigning letter container class to variable
var letterContainer = document.querySelector(".letter-container");
var givenLetters = document.querySelector(".letter-container").innerHTML.split();
var inputWord = document.querySelector(".enter-word").value;

function pickFrom(letters){

  // if the length of the letter container is less than 8
  if(letterContainer.innerHTML.length < 8){

  //add letters to the letter container
  letterContainer.innerHTML+=rando(letters);
  }

showSubmission();
submitWord();

}





function showSubmission(){

  if(letterContainer.innerHTML.length === 8){
    $(".submission").show();
    $(".letter-buttons").hide();

  }
}

function submitWord(){
  if(inputWord.length <=8){
    for (var i = 0; i < inputWord.length; i++) {

      if (givenLetters.includes(inputWord[i])) {
        var indexPosition = givenLetters.indexOf(inputWord[i]);
        givenLetters.splice(indexPosition, 1);
        var newWord = inputWord.join("").toLowerCase();
        console.log(newWord);

  }
}
}

}
