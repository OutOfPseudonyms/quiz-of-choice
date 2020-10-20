$(document).ready(function () {
  $("form#stress_test").submit(function (event) {
    event.preventDefault();
    const stress = parseInt($("input:checkbox[name=stress]").val());
    const deStress = parseInt($("input:checkbox[name=deStress]").val());
    let result = (stress + deStress);
    let answer;
    if (result <= 0) {
      answer = "You appear to be doing great.";
    } else if (result > 0 && result <= 3) {
      answer = "You could be doing better. Please try using more of the relaxation techniques.";
    } else if (result < 3) {
      answer = "Your stress seems to be abnormally high. Please seek advice from a psychiatrist.";
    }
    $("#advice").text(answer);
    $("#output").show();
    console.log("answer", answer, "result", result)
  })
})