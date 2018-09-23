var add = function(answer1, answer2, answer3, answer4, answer5){
	return answer1 + answer2 + answer3 + answer4 + answer5;
};

$(document).ready(function() {
  $("#selector form").submit(function(event) {
		var answer1 = parseInt($("input:radio[name=first-input]:checked").val());
    var answer2 = parseInt($("input:radio[name=second-input]:checked").val());
    var answer3 = parseInt($("input:radio[name=third-input]:checked").val());
    var answer4 = parseInt($("input:radio[name=fourth-input]:checked").val());
    var answer5 = parseInt($("input:radio[name=fifth-input]:checked").val());

    var resultSum = add(answer1, answer2, answer3, answer4, answer5);
    // resultSum max 15, min 5.  5-7, 8-11, 12-15

    if (resultSum < 8) {
    $('#destination1').fadeIn();
  } else if (7 < resultSum&&resultSum < 12) {
    $('#destination2').fadeIn();
	} else if (answer5 === 1) {
		$('#destination2').fadeIn();
  } else {
    $('#destination3').fadeIn();
  }
    $('#selector').hide();
		event.preventDefault();
  });
});
