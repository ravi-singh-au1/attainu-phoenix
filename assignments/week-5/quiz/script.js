'use strict';

var questionArray = [];

var currentQuestionIndex;

var counter = 20;

var timer;

//Load data from JSON file.

var loadData = function() {
        
     var request = new XMLHttpRequest();
    
      request.open("get", "quiz.json");
  
      request.send();
        
      request.onreadystatechange = function(data) {
          if(request.readyState == 4 && request.status == 200) {
            
           questionArray = JSON.parse(request.responseText);
           showQuestion();
           //console.log(questionArray);
          }
      }
      return;
  };

  // timer function

  var timer = function() {
    if(counter != 0) {
      var counterElement = document.getElementById("counter");
      counterElement.innerHTML = counter;
      counter = counter - 1;
    } else {
      alert(" time out!!");
      clearInterval(timer);
    }
    
  };
 // show question
  var showQuestion = function() {
    currentQuestionIndex = Math.floor(Math.random() *10 );
    var questionElement = document.getElementById("question");
    questionElement.innerHTML = questionArray[currentQuestionIndex].question;
    
    timer = setInterval(timer, 2000);
    
  };
  
  var button = document.getElementById("button");
  
  var answerSubmitted = function() {
    var answer = document.getElementById("input").value;
 
   
   
    if(answer == "") {
      alert(" type  answer hear!!");
      return;
    }  
    if(answer == questionArray[currentQuestionIndex].answer) {
   
      alert("hii you answer is correct");
      alert("go to the neext question"); 
    } else {
      alert("Wrong answer");
    }
      
  };
  
  button.addEventListener("click" , answerSubmitted);

  
  loadData();