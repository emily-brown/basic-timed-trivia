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
    $("#timer").html("<h2>Timer: 30 Seconds</h2>" + "<br>");

    // Show questions to answer 
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answer[0] + "</label>" + "<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answer[1] + "</label>" + "<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answer[2] + "</label>" + "<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answer[3] + "</label>");

    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[1].answer[0] + "</label>" + "<input type='radio' name='answer1' value='0'>" + "<label>" + questions[1].answer[1] + "</label>" + "<input type='radio' name='answer1' value='0'>" + "<label>" + questions[1].answer[2] + "</label>" + "<input type='radio' name='answer1' value='0'>" + "<label>" + questions[1].answer[3] + "</label>");
})
