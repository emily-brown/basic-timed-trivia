// Create question array

let questions = [{
    question: "Space test question 1?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    answer: 0
}, {
    question: "Space test question 2?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    answer: 0
}, {
    question: "Space test question 3?",
    options: ["option 1", "option 2", "option 3", "option 4"],
    answer: 0
}];

// Create start button function to begin answer questions

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

// Create function for submit button 

    $("#submit").html("<button id='done'>Done!<button>");

    $("#done").on("click", function() {
        // Funtion to tally score
        score();
        // Function to show results
        results();

        reset();
    });
;})

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
    $("#finished").html("Times Up!")
  }


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

    // Check question 1
    if (userAnswer1 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer1 === questions[0].answer) {
        correctAnswer++;
    }
    else {
        incorrectAnswer++;
    }

    // Check question 2
    if (userAnswer2 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer2 === questions[1].answer) {
        correctAnswer++;
    }
    else {
        incorrectAnswer++;
    }

    // Check question 3
    if (userAnswer3 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer3 === questions[2].answer) {
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
        
    })
    
}