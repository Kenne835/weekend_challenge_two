console.log('js sourced');
//Starting the document and adding button functionality here:
$(document).ready(function(){
  $('.equation').on('click', result);
  $('.reset').on('click', reset);
});

//Turning input into an object to send here:
var result = function(){
  var postedEquation = {
    x: $('#x').val(),
    y: $('#y').val(),
    type: this.id
  };
  console.log(postedEquation);
//Using ajax to send the object and append the result to the DOM here:
  $.ajax ({
    type: 'POST',
    url: '/findResult',
    data: postedEquation,
    success: function (response){
      $('#result').append('<p>' + response.correctAnswer + '</p>');
    }
  });
};
//Here is the function to reset the field:
var reset = function(){
  $('#result').empty();
  $('#x, #y').val('');
};
