 //keep submission input and button hidden
 $(".submission").hide();
 $(".hand-move").hide();
 $(".error").hide();
 $(".your-word").hide();


 //assigning letter container class to variable
 var letterContainer = document.querySelector(".letter-container");

 function pickFrom(letters) {

   // if the length of the letter container is less than 8
   if (letterContainer.innerHTML.length < 8) {

     //add letters to the letter container
     letterContainer.innerHTML += rando(letters);



   }

   //once letter container length reaches 8
   if (letterContainer.innerHTML.length === 8) {
     play();
     $(".hand-static").hide();
     $(".hand-move").show();
     //show submission input and button
     $(".submission").show();
     //remove letter buttons after 8 letters have been chosen by user
     $(".letter-btn").hide();

     //assign given letters from letter container to a variable
     var givenLetters = letterContainer.innerHTML.split("");


     var inputWord = document.querySelector(".enter-word").value;



     document.querySelector(".submit-word").addEventListener("click", function() {
       var inputWord = document.querySelector(".enter-word").value.toUpperCase().split("");
       if (inputWord.length <= 8) {

         //
         var isValid;
         var searchTerm;

         for (var i = 0; i < inputWord.length; i++) {

           // console.log(inputWord[i]);


           // if givenLetters includes/contains index [i] of inputWord
           if (givenLetters.includes(inputWord[i])) {
             //declare variable indexPosition which shows the position of index[i] in givenLetters array
             var indexPosition = givenLetters.indexOf(inputWord[i]);
             givenLetters.splice(indexPosition, 1);
             searchTerm = inputWord.join("").toLowerCase();
             isValid = true;

           } else {


             isValid = false;

           }
         }


         if (isValid == true) {
           console.log(searchTerm);
           // console.log("This is a valid word");
           var containsSearchTerm;

           $.get("https://raw.githubusercontent.com/cpog19901/Countdown/master/text/english3.txt", function(contents) {
             var words = contents.split("\n");
             containsSearchTerm = words.indexOf(searchTerm) > -1;
             console.log("Contains it: " + containsSearchTerm);

             if (containsSearchTerm == true) {
               document.querySelector(".your-word").innerHTML += searchTerm.toUpperCase();
               $(".your-word").show();
             } else if (containsSearchTerm == false) {
               console.log("this does not pass");
               $(".error-text").text("This is not a valid word in the dictionary!");
               $(".error").show();
             }
           });
         }
         //
         else if (isValid == false) {
           $(".error").show();
         }

       }
     });

   }
 }

 function play() {
  var audio = new Audio("sounds/countdown.mp3");
  audio.play();
}
