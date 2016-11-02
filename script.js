$(document).ready(function(){
  //sets variable for ease of reference when appending
  $el = $('#container').children().last();

//appends 4 colors to the dom
var array = ['yellow', 'red', 'blue', 'green'];
for (var i = 0; i < array.length; i++) {
  $('#container').append('<div class="' + array[i] + '"></div>');
  $('.' + array[i]).data('color', array[i]);
}

  //sets the first random color and appends it to the dom so the user
  //can see what color to click
  var initialColor = pickColor();
  $('#color-namer').append('<p>Please click on '+ initialColor + '.</p>');

    //all buttons
    $('#container').on('click', 'div', function(){
      //checks to see if this button was the one that the game is
      //asking to be clicked
      if (initialColor == $(this).data('color') ){
        //if it was the button to be clicked, randomly finds another
        //button and replaces the change in the dom
        initialColor = pickColor();
        $('#color-namer > p').replaceWith('<p>The new color to click is ' +
        initialColor + '.</p>');
      } else {
        //corrects the user on a misclick
        $('#color-namer > p').replaceWith('<p>Nope! Click ' +
        initialColor + '.</p>');
      }
    });

  //chooses random number between 1 and 4
  function randomNum(){
    return Math.floor(Math.random() * (1 + 4 - 1) + 1);
  }

  //uses the random number to choose the next color
  function pickColor(){
    var newNum = randomNum();
    switch(newNum){
      case 1:
      var color = "yellow";
      break;
      case 2:
      var color = "green";
      break;
      case 3:
      var color = "red";
      break;
      case 4:
      var color = "blue";
      break;
    }
    console.log("the pickColor choice is " + color);
    return color;
  }

});
