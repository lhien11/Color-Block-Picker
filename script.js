$(document).ready(function(){
  //sets variable for ease of reference when appending
  $el = $('#container').children().last();

  //appends 4 colors to the dom
  var array = ['yellow', 'red', 'blue', 'green'];
  shuffle(array);
  var min = 1;
  var max = array.length;
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

  function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  }

  //chooses random number between 1 and 4
  function randomNum(){
    return Math.floor(Math.random() * (1 + max - 1) + 1);
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
    //console.log("the pickColor choice is " + color);
    return color;
  }

});
