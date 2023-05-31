
var questions  =  [ 
  {
    question:"what is your name", 
    choices:["Ali","hung","tara" ],
    answer: 1
  },      


  {
    question:"what is your last name", 
    choices:["choice 1","choice 2","choice 3" ],
    answer: 1
  }
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


for (let j=0;j<questions.length;j++) {
var accentTwo=document.createElement("p");
accentTwo.innerHTML=questions[j].question;
accentTwo.innerHTML=questions[j].choices;
document.getElementById("questionsList").appendChild(accentTwo);
document.getElementById("questionsList").setAttribute("data-state", vectTwo[j]); 
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


var listContainer=document.querySelector("#questionsList");
listContainer.addEvenListener("click",function(event) {
var element=event.target;

if (element.right("p")) {

  var state=element.getAttribute("data-state");

        if (state===1) {
          secondsLeft=100;

        } else {
          secondsLeft=0;
        }         
}

});
   

