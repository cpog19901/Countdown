 $(".submission").hide();
 $(".hand-move").hide();
$(".message-time").hide();


 var letterContainer = [];
 var letterContainerLimit = 8;
 var allGivenLetters;
 var searchTerm = [];
 var allLettersPass;
 var showIndexNumber;
 var words;
 var containsSearchTerm;
 var userWordLetter;
 var testArray;
 var indexPosition;
 var trueArray = [];
 var falseArray = [];
 var indexLetter;
 var musicStop;
var submitWord;


 function play() {
   var audio = new Audio("sounds/countdown.mp3");
   audio.play();
   audio.addEventListener("ended", function(){
        $(".message-time").slideDown();
        $(".submit-word").attr("disabled", "disabled");
        $(".enter-word").attr("disabled", "disabled");

   });
 }

 function pickFrom(letters) {
   if (letterContainer.length < letterContainerLimit) {
     letterContainer.push(rando(letters));
     for (i = 0; i < letterContainer.length; i++) {
       letterBox = document.querySelector(".lb-" + i);
       letterBox.innerHTML = letterContainer[i];
     }
   }
   if (letterContainer.length == letterContainerLimit) {
     play();
     $(".hand-move").show();
     $(".hand-static").hide();
     allGivenLetters = letterContainer;
     $(".submission").fadeIn(500);
     $(".letter-buttons").hide();
     submitWord = document.querySelector(".submit-word").addEventListener("click", function() {
       var userWordArray = document.querySelector(".enter-word").value.toUpperCase().split("");
       for (var i = 0; i < userWordArray.length; i++) {
         if (allGivenLetters.includes(userWordArray[i]) == true) {
           indexPosition = allGivenLetters.indexOf(userWordArray[i]);
           indexLetter = allGivenLetters.splice(indexPosition, 1);
           trueArray.push(indexLetter.toString(""));
           allLettersPass = true;
         } else {

           allLettersPass = false;
         }
       }

       if (allLettersPass == true && trueArray.join("") === userWordArray.join("")) {
         for (i = 0; i < userWordArray.length; i++) {
           document.querySelector(".letter-" + i).innerHTML = userWordArray[i];
         }
         $.get("https://raw.githubusercontent.com/cpog19901/Countdown/master/text/english3.txt", function(contents) {
           words = contents.split("\n");
           containsSearchTerm = words.indexOf((trueArray.join("")).toLowerCase()) > 1;
           if (containsSearchTerm == true) {
             $("<div/>").attr("class", "result").appendTo("body");
             $("<i/>").attr("class", "tick fas fa-check-square fa-2x").appendTo(".result");
             $(".result").append("<p>This is a valid word! You scored <p>" + userWordArray.length + "<p> points<p>");
           } else {
             $("<div/>").attr("class", "error").appendTo("body");
             $("<i/>").attr("class", "warning fas fa-exclamation-triangle fa-2x").appendTo(".error");
             $(".error").append("<p>This is not a valid word in the dictionary!<p>");
           }

         });

       } else {
         $("<div/>").one().attr("class", "error").appendTo("body");
         $("<i/>").attr("class", "warning fas fa-exclamation-triangle fa-2x").appendTo(".error");
         $(".error").append("<p>Some of your letters are not in your given letters!<p>");


       }
     });
   }
 }
