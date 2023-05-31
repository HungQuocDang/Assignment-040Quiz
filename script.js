

let numChoices=4;


var questions = [
  {   
      questionP: "Commonly used data types DO NOT include:",
      choices: ["1. alerts", "2. strings", "3. booleans", "4. numbers"],
      answer: "1. alerts",
  },
  {
      questionP: "The condition in an if / else statement is enclosed within ____.",
      choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
      answer: "3. parentheses",
  },
  {
      questionP: "Which of the following is not a primitive data set?",
      choices: ["1. boolean", "2. object", "3. number", "4. string"],
      answer: "2. object",
  },
  {
      questionP: "Which of the following is used when invoking a function?",
      choices: ["1. quotes", "2. curly brackets", "3. square brackets", "4. parentheses"],
      answer: "4. parentheses",
  },
  {
      questionP: "Complex data types include:",
      choices: ["1. arrays", "2. strings", "3. booleans", "4. numbers"],
      answer: "1. arrays",
  },
];


var vectOne= [  "Commonly used data types Do Not include: ", 
                "1. strings  ", 
                "2. booleans ",
                "3. Alerts  * ",
                "4. Numbers  ",
                "The condition in an if / else statement is enclosed with --------",
                "1. Quotes",
                "2. Curly brackets*",
                "3. Parenthesis",
                "4. Square brackets",
                "Array  in Javascript can be used to store",
                "1. Numbers and strings",
                "2. Other arrays",
                "3. Booleans",
                "4. All of the above*",
                "String values must be enclosed within _______when being assigned to variables.",
                "1. Commas",
                "2. Curly brackets",
                "3. Quotes*",
                "4. Parenthesis",
                "A very useful tool used during development and debugging for printing content to the debugger is:",
                "1. JavaScript",
                "2. Terminal/bash",
                "3. for loops",
                "4. Console.log*"  ];
              
var vectTwo= ["n","n","n","y","n",  "n","n","y","n","n",  
              "n","n","n","n","y",  "n","n","n","y","n",  "n","n","n","n","y" ];             


//xOne=vectTwo[0]+vectTwo[2];
//console.log(vectOne);
//console.log(vectTwo);
//console.log(questions);
//console.log(xOne);
//var accent=document.createElement("ol");
//accent.innerHTML = questions[{} ];
//document.getElementById("questionsList").appendChild(accent);


//for (let j=0;j<questions.length;j++) {
//var accentTwo=document.createElement("p");
//accentTwo.innerHTML=[questions[j].question.choices];
//accentTwo.innerHTML=questions[0].choices;
//accentTwo.innerHTML=questions[j].answer;
//document.getElementById("questionsList").appendChild(accentTwo);
//document.getElementById("questionsList").setAttribute("data-state", vectTwo[j]); 
//}



for (let j=0;j<1;j++) {
    for (i=0;i<numChoices;i++) {
      var accentTwo=document.createElement("p");
      
      accentTwo.innerHTML=questions[j].choices[i];
      //accentTwo.innerHTML=questions[j].questionP;
      document.getElementById("questionsList").appendChild(accentTwo);
      document.getElementById("questionsList").setAttribute("data-state", vectTwo[j]); 
    }
}








var secondsLeft =7;
var timeEl = document.querySelector("#timer2");

function setTime() {


  var timerInterval = setInterval(function() {
    secondsLeft--;
    secondsLeft=secondsLeft-0;
    
    if(secondsLeft <= 0) {
      // Stops execution of action at set interval"
      clearInterval(timerInterval);
      secondsLeft=0;
    }
    timeEl.textContent = "Timer: "+ secondsLeft ;


  }, 1000);
}
setTime();

var listContainer=document.querySelector(" #questionsList ");
listContainer.addEventListener("click",function(event) {
var element=event.target;

    if (element.right("p")) {

    var state=element.getAttribute("data-state");
         


        if (state===1) {
          document.getElementById("demo").textContent = "I have changed!";

        } else {
          window.document.getElementById("demo").textContent = "I have tttttc!";
        }         
    }

});
   

