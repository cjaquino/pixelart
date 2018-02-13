// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  //assign variables
  let input_width = $('#input_width').val();
  let input_height = $('#input_height').val();

  //creates the 2d grid
  for(let i = 1; i <= input_height; i++) {
    $('#pixelCanvas').append('<tr class="row"></tr>');
    for(let j = 1; j <= input_width; j++){
      $('#pixelCanvas tr:nth-child(' + i + ')').append('<td class="tile"></td>');
    }
  }
}

//refreshes page
// $('#refresh_btn').click(function(e) {});

//Call make grid function when submitting
//Still executes when I press return from one of the input fields
$('#sizePicker').submit(function(e){
  e.preventDefault();
  $('#pixelCanvas').empty();
  makeGrid();
});

$('table').on('click',function(e){
  e.preventDefault();
  let color = $('#colorPicker').val();
  if($(e.target).attr('class')=='tile') {
    $(e.target).css("background-color",color);
  }
  
});
