function submitAnswers() {
  var total = 5;
  var score = 0;

  //onSubmit (in html) we're catching the answers as they are being submitted to some server side location.
  //Because we have no server for this project we need to return false.

  //get user input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  var questions = [q1, q2, q3, q4, q5];

  //set correct answers
  var correctAnswers = ["b", "a", "d", "b", "d"];

  //validate answers
  for (var i = 0; i < questions.length; i++) {
    if(questions[i] == null || questions[i] == '') {
      alert("Please answer question " + eval(i + 1));
      return false;
    } else if (questions[i] == correctAnswers[i]) {
        score ++;
    }
  }

  //display results in id="results"
  var results= document.getElementById("results");
  results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
  return false;
}