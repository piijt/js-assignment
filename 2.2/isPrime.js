function isPrime() { //check if it is prime
  var a=form.text.value;
  if(a=="")
  alert("Enter the value");
  else {
    var num=parseInt(a);
    var i;
    for(i=2;i<num;i++) {
var n;
n=num%i;
if(n==0) {
alert("Not a Prime Number");
break;
  }
}
  if(i==num) {
    alert("Prime Number");
    }
  }
}

function isInt(s) { // check if entered value is an integer
  var i;
  string = s.toString(s);
  for(i=0;i<s.length;i++) {
    var c=s.charAt(i);
  if(isNaN(c)) {
      alert("Given value is not a number");
      form.text.value="";
           return false;
  }
}
return true;
}
