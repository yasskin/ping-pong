// Ping-Pong Back End (Business) Logic

var arrayGenerator = function(pongInput) {

  var arrayNumbers = [ ];

  for (var index = 1; index <= pongInput; index += 1) {
    arrayNumbers.push(index);
  };

//  arrayNumbers = arrayNumbers.join();
  return arrayNumbers;

};

// Ping-Pong Front End (User Interface) Logic

$(document).ready(function() {
  $("form#pong-form").submit(function(event) {
    event.preventDefault();
//    $("ul#ping-pong-results li").remove();
    var pongInput = parseInt($("input#pong-input").val());

    console.log(pongInput);

    var pongResults = arrayGenerator(pongInput);

    $("#pong-output").show();
    $("#pong-results").append("<li>" + pongResults + "</li>");

  });
});
