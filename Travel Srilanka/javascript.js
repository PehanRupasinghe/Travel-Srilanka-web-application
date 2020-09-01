window.onload = timeCheck; 

// Setting the timer and getting the total seconds as 100 and then converting it to minutes

var allSeconds = 100;  
var minutes= parseInt(allSeconds/60); 
var seconds = parseInt(allSeconds%60); 
var timer; 
 
// Setting a function to calculate the time 

function timeCheck(){ 
document.getElementById("timer").innerHTML = minutes + ' min : ' + seconds + ' secs ' ; 

// Setting the process when the time is over 

if(allSeconds <= 0){ 
setTimeout('findScore()',1); 
alert("Your time is up!"); 
window.location.reload(); 
document.getElementById("timer").innerHTML = "Time is Up!" ; 
}  
 
// Setting the process when the time is not over

else { 
allSeconds = allSeconds -1; 
minutes = parseInt(allSeconds /60); 
seconds = parseInt(allSeconds%60); 
timer = setTimeout("timeCheck()",1000);
    
}   
}

// Setting variables 
 
var noOfQuestions  =  10; 
var choices =  4; 
 
// Creating an array to stote the correct answers 
var answers  = new Array(10); 
  
    answers[0] = "4 February 1948"; 
    answers[1] = "Ceylon"; 
    answers[2] = "Sri Jayawardenepura Kotte"; 
    answers[3] = "Rupee"  ; 
    answers[4] = "Mahaweli"; 
    answers[5] = "Pidurutalagala"; 
    answers[6] = "25"; 
    answers[7] = "Sir C.W.W Cannangara"; 
    answers[8] = "Volleyball"; 
    answers[9] = "9"; 
  
// Creating a function to calculate the user's score
function findScore(form) { 

// Setting variables  
  var marks = 0; 
  var scenario; 
  var currentChoice; 
  var wrongAnswers = 0; 
  var noOfCorrectAnswers = 0; 
  var display = ""; 
   
// Creating a for loop to check if the answers for each question matches the relevant answer in the 'answers' array 
 
  for (i=0; i < noOfQuestions ; i++) { 
    scenario = i*choices; 
    for (j=0; j <choices; j++) { 
      currentChoice = form.elements[scenario + j]; 
      if (currentChoice.checked) { 
        if (currentChoice.value == answers[i]) { 
 
// Increasing the value of 'noOfCorrectAnswers' variable by 1 each time when the user's answer is correct 
           noOfCorrectAnswers++; 

// Displaying the message		   
     display += "Your answer " +"  " +  "  "  + currentChoice.value +"  "+" is Correct." + "<br>"+ "<br>" ; 
          break;} 
 
        else{
			
// Increasing the value of 'wrongAnswers' variable by 1 each time when the user's answer is wrong
		
   wrongAnswers++; 
   
// Displaying the message
   display += "Your answer " +"  " +  "  "  + currentChoice.value +"  "+" is Wrong." + "<br>"+ "<br>" ; 
        } 
         
        } 
      } 
    } 

// Calculating the final total marks	
  totalMarks = (noOfCorrectAnswers*2) - wrongAnswers ; 
 
 if (totalMarks >= 0){ 
 
totalMarks = totalMarks;} 

else{

totalMarks=0;
 
} 

// Changing the screen colour according to the marks of the user    
    if (totalMarks < 10) { 
        document.body.style.background = "Tomato"; 
         
    }
    else { 
    document.body.style.background = "#3cb371"; 
} 

// Creating a string variable and displaying the correct answers 

  var correctAnswers = ""; 
  
  for (i=1; i <= noOfQuestions; i++) { 
    correctAnswers += i + ". " + answers[i-1] + "\r\n" + "<br/>" + "<br/>"; 
  } 
   
 document.getElementById("results").innerHTML += "Your Results:" + "<br>" + "<br>" + "<br>" + display + "<br>" + "<br>" ; 
 document.getElementById("results").innerHTML += "Correct Answers: " + "<br>" + "<br>" + correctAnswers + "<br>" + "<br>"; 
 document.getElementById("results").innerHTML += "Marks You Got : " +  totalMarks + "<br>" +"Your Time : " + minutes + ' minute and ' + (seconds + 1) + ' seconds. ';

 
}