// Create question array

let questions = [{
    question: "Which of the following is the hottest planet in our solar system?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: 1
}, {
    question: "How many starts are there in space?",
    options: ["200 billion", "500 billion", "800 billion", "There's too many to count!"],
    answer: 3
}, {
    question: "According to scientists, which planet may be made out of diamonds?",
    options: ["55 Cancri e", "CAROT-7b", "Gliese 436b", "Kepler-62e"],
    answer: 0
}, {
    question: "The sun’s mass takes up ___ of our solar system?",
    options: ["92.36%", "97.25%", "99.86%", "99.77%"],
    answer: 2
}, {
    question: "Which planet has the largest known volcano?",
    options: ["Earth", "Mars", "Neptune", "Uranus"],
    answer: 1
}];

// Create start button function to begin answer questions

// function beginGame() {


$("#start").on("click", function() {
    // When start button is clicked to begin game, hide it
    $(this).hide();

    // Show timer 
    run();

    // Show questions to answer 
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].options[0] + "</label>" 
    + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].options[1] + "<label>" 
    + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].options[2] + "<label>" 
    + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].options[3] + "<label>");

    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].options[0] + "</label>" 
    + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].options[1] + "<label>" 
    + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].options[2] + "<label>" 
    + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].options[3] + "<label>");

    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].options[0] + "</label>" 
    + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].options[1] + "<label>" 
    + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].options[2] + "<label>" 
    + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].options[3] + "<label>");

    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].options[0] + "</label>" 
    + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].options[1] + "<label>" 
    + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].options[2] + "<label>" 
    + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].options[3] + "<label>");

    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].options[0] + "</label>" 
    + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].options[1] + "<label>" 
    + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].options[2] + "<label>" 
    + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].options[3] + "<label>");
// Create function for submit button 

    $("#submit").html("<button id='done'>Done!<button>");
;})

// }

// Create timer function
let number = 25;

let intervalID;

// Create function for timer to run
function run() {
  clearInterval(intervalID);
  intervalID = setInterval(decrement, 1000);
}

// Create function for time to decrease starting from 25seconds
function decrement() {
  number--;
  $("#timer").html("<h2>Time Remaining: " + number + "</h2>");
  if (number === 0) {
    stop();
  }
}

function stop() {
    clearInterval(intervalID);
    $("#timer").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#finished").html("Times Up!")
  }

$(".container-fluid").on("click", "#done", function(){
    score();

    results();

    reset();
    
    $("#message").show();
    $("#correct").show();
    $("#incorrct").show();
    $("#undefined").show();
    $("#retry").show();

})

let correctAnswer = 0;
let incorrectAnswer = 0;
let unansweredQuestions = 0;

function results() {
    $("#timer").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#submit").empty();
    $("#finished").hide();

    $("#message").html("<h2>Finished!</h2>");
    $("#correct").html("Correct Answers: " + correctAnswer);
    $("#incorrct").html("Incorrect Answers: " + incorrectAnswer);
    $("#undefined").html("Unanswered: " + unansweredQuestions);

}


// Create score funciton to check user answer 
function score() {
    
    let userAnswer1 = $("input[name='answer1']:checked").val();
    let userAnswer2 = $("input[name='answer2']:checked").val();
    let userAnswer3 = $("input[name='answer3']:checked").val();
    let userAnswer4 = $("input[name='answer4']:checked").val();
    let userAnswer5 = $("input[name='answer4']:checked").val();

    // Check question 1
    if (userAnswer1 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer1 == questions[0].answer) {
        correctAnswer++;
    }
    else {
        incorrectAnswer++;
    }

    // Check question 2
    if (userAnswer2 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer2 == questions[1].answer) {
        correctAnswer++;
    }
    else {
        incorrectAnswer++;
    }

    // Check question 3
    if (userAnswer3 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer3 == questions[2].answer) {
        correctAnswer++;
    }
    else {
        incorrectAnswer++;
    }

     // Check question 3
     if (userAnswer4 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer4 == questions[3].answer) {
        correctAnswer++;
    }
    else {
        incorrectAnswer++;
    }

     // Check question 3
     if (userAnswer5 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer5 == questions[4].answer) {
        correctAnswer++;
    }
    else {
        incorrectAnswer++;
    }
}

function reset() {
    $("#retry").html("<button id='reset'>Retry!<button>");

    $("#reset").on("click", function() {
        $("#message").hide();
        $("#correct").hide();
        $("#incorrct").hide();
        $("#undefined").hide();
        correctAnswer = 0;
        incorrectAnswer = 0;
        unansweredQuestions = 0;
    
        number = 25;
        run();

        $("#retry").hide();

        $("#timer").show();
        $("#question1").show();
        $("#answer1").show();
        $("#question2").show();
        $("#answer2").show();
        $("#question3").show();
        $("#answer3").show();
        $("#question4").show();
        $("#answer4").show();
        $("#question5").show();
        $("#answer5").show();

        $("#submit").html("<button id='done'>Done!<button>");
        
    })
    
}