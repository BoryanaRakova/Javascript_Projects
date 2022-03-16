function Call_Loop(){
  var one = "";
  var two = 1;
  while(two < 21){
    one += "<br> This is number - " + two;
    two++;
  }
  document.getElementById("Loop").innerHTML = one;
}