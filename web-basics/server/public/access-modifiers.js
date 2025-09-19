// Class based approach
// Student is a function
class Student {
  #fName;
  #maxMarks = 300;

  constructor(fName, obtainedMarks) {
    this.fName = fName;
    this.obtainedMarks = obtainedMarks;
  }

  // addd to prototype of Student
  checkResult() {
    let percentage = (this.obtainedMarks / this.#maxMarks) * 100;
    if (percentage > 40) {
      return "pass";
    }
    return "fail";
  }
}

var stu3 = new Student("student 3", 100);
