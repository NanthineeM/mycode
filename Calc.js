function add(e){
  //  e.preventDefault();
 
  var fnum = parseInt(document.getElementById('firstNumber').value);
  var snum = parseInt(document.getElementById('secondNumber').value);
  
  var sum = fnum + snum;
    
  
document.getElementById("result").innerHTML = sum;

var sub = fnum - snum;

document.getElementById("answer").innerHTML = sub;


var mult = fnum*snum;

   document.getElementById('multiply').innerHTML = mult;

   var div = fnum/snum;
 
   document.getElementById('divide').innerHTML =div;

}