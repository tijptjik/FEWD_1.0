var timer_id = 0;
var time = 0;
var letters_small = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
var letters_medium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
var letters_large = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];
var squares;
var letters;
var small = 10;
var medium = 20;
var large = 40;
var columns = 5;
var rows;
var last_id = '';
var letters_matched = 0;

$(function(){



});

function randomizeArray(array)
{
  var i = array.length;
  if ( i == 0 ) return false;
  while ( --i )
  {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = array[i];
     var tempj = array[j];
     array[i] = tempj;
     array[j] = tempi;
  }

  return array;
}

