$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();
     var inputStr = $("#userSentence").val();
     console.log(inputStr);
     for (var i = 0; i <= inputStr.length; i++) {
        inputStr = inputStr.replace("a","-");
        inputStr = inputStr.replace("e","-");
        inputStr = inputStr.replace("i","-");
        inputStr = inputStr.replace("o","-");
        inputStr = inputStr.replace("u","-");
        inputStr = inputStr.replace("y","-");
        };
        console.log(inputStr);

       //$("#newSentence").text(dashSentence);



  });
});
