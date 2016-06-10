// Ping-Pong Back End (Business) Logic

var arrayGenerator = function(pongInput) {

  var arrayNumbers = [ ];

// creates the array with every number from 1 to the User Input
  for (var index = 1; index <= pongInput; index += 1) {
    arrayNumbers.push(index);
    // var modulo = index % 3;
    //    if (modulo = 0) { };
    
  };

// Rule: A number is divisible by 3 if the sum of its digits is divisible by 3.

//  for (var index = 1; index <= pongInput; index += 1) {
//    if (index % 3 = 0) {
//      arrayNumbers.push[index] = "ping";
//    };
//  };

//  Rule: A number is divisible by 5 if the its last digit is a 0 or 5.

  return arrayNumbers;

};

// Ping-Pong Front End (User Interface) Logic

$(document).ready(function() {
  $("form#pong-form").submit(function(event) {
    event.preventDefault();
//    $("ul#ping-pong-results li").remove();
    var pongInput = parseInt($("input#pong-input").val());


    var pongResults = arrayGenerator(pongInput);

    $("#pong-output").show();
    console.log(pongInput);

    pongResults.push("ping");

    pongResults.forEach(function(result) {
      $("#pong-results").append("<li>" + result + "</li>");
    });

  });
});
