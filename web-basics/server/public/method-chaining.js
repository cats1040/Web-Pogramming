// String.prototype.customConcat = function (stringToConcat) {
//   return this + " " + stringToConcat;
// };

function customString(initialValue) {
  this.value = initialValue;

  this.infiniteConcat = function (stringToConcat) {
    let newValue = this.value + stringToConcat;
    return new customString(newValue);
  };
}

var x = new customString("helloo");
x.infiniteConcat("byeee");
