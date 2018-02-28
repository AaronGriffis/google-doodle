$(document).ready(loaded);

function loaded() {
  var leaves = 40;
  
  for(var i = 0; i < leaves; i++) {
    $('<svg xmlns="http://www.w3.org/2000/svg" class="leaf" width="3" height="3" viewBox="-1 -1 6 6"><path d="M0 0 v 1 a 2 2 0 0 0 2 2 h 1 v -1 a 2 2 0 0 0 -2 -2 z M1 1 l 2.5 2.5 M2 1 v 1"/></svg>').appendTo('#leaves');
  }
}