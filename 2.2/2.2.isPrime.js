
function isPrime() { // check if prime or no
  var t=form.text.value
  if (t=="")
  alert('Looks like you forgot to insert a Number {[--.--]}');
  else {
    var num=parseInt(t);  //The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
    var i;
    for (i=2;i<num;i++) {
      var n;
      n=num%i; // Modulus (Division Remainder)
      if (n==0) {
        alert("Number is Not Prime! {[-.-]}")
        break;
      }
    }
      if (i==num) {
        alert ('Number is Prime {[-.+]}');
      }
  }
}

function onlyNumbers() { // only numbers please {[-.-]}
  var i;
  string = q.toString(q);
  for(i=0;i<q.length;i++) {
    var ch=q.charAt(i);
  if(isNan(ch)) { // isNaN (is Not a Number)
      form.text.value="";
           return false;
    }
  }
  return true;
}
