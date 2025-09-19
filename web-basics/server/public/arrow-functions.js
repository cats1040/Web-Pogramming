function studentFunction(fName, obtainedMarks) {
  console.log(this);
  this.fNameObj = fName;
  this.obtMarksObject = obtainedMarks;

  // Normal Function
  this.checkResultsNormal = function () {
    console.log(this);
    function innerFunction() {
      console.log("Normal Inner function: ", this);
    }
    innerFunction();
  };
}
var stu1 = new studentFunction("fname5", 100);
stu1.checkResultsNormal();

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

function studentArrowFunction(fName, obtainedMarks) {
  console.log(this);
  this.fNameObj = fName;
  this.obtMarksObject = obtainedMarks;

  // Normal Function
  this.checkResultsNormal = function () {
    console.log(this);
    function innerFunction() {
      console.log("Normal Inner function: ", this);
    }
    innerFunction();
  };

  // Arrow Function
  this.checkResultsArrow = () => {
    console.log(this);
    innerFunction = () => {
      console.log("Arrow Inner function: ", this);
    };
    innerFunction();
  };
}
var stu2 = new studentArrowFunction("fname5", 100);
