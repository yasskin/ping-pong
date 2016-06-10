// Ping-Pong Back End (Business) Logic
var arrayGenerator = function(pongInput) {

  var arrayPingPong = [ ];

  for (var index = 1; index <= pongInput; index += 1) {

    if (index % 15 === 0) {
      arrayPingPong.push("ping-pong");
    }
    else if (index % 5 === 0) {
      arrayPingPong.push("pong");
    }
    else if (index % 3 === 0) {
      arrayPingPong.push("ping");
    }
    else {
      arrayPingPong.push(index);
    }
  };
  return arrayPingPong;
};

// Ping-Pong Front End (User Interface) Logic
$(document).ready(function() {
  $("form#pong-form").submit(function(event) {
    event.preventDefault();
    $("ul#pong-results li").remove();
    var pongInput = parseInt($("input#pong-input").val());

    var pongResults = arrayGenerator(pongInput);

    $("#pong-output").show();
    console.log(pongInput);

    pongResults.forEach(function(result) {
      $("#pong-results").append("<li>" + result + "</li>");
    });
  });
});
