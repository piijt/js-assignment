
  var countries =  ["Afghanistan", "Russia", "Turkey"];

  var showResults = function (countries) {
      var arr = document.getElementsById(countries);

      console.log("Array has " + arr.length + " " + countries);

      console.log("The countries in the array is: ");
      for (var i = 0; i < arr.length; i++) {
          console.log(typeof arr[i]);
      }
  }

console.log(countries)

window.alert(countries)
