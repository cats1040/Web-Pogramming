var arr1 = [1, 3, 4, 6, 8];
var arr2 = [2, 4, 7, 99, 3];

var arr3 = [...arr1, ...arr2];
console.log(arr3);

var stu1 = {
  name: "name1",
  age: "age1",
  fun: function () {
    console.log("stduent 1");
  },
};
var stu2 = {
  name2: "name2",
  age2: "age2",
};

var stuList = { ...stu1, ...stu2 };
console.log(stuList);

function customSum(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
  return sum;
}

function customObjectPrint(...details) {
  details.forEach((obj) => {
    for (let key in obj) {
      console.log(key + " " + obj[key]);
    }
  });
}

customObjectPrint(stu1, stu2);

// Class based approach
// Student is a function
class Student {
  constructor(fName, obtainedMarks) {
    this.fName = fName;
    this.obtainedMarks = obtainedMarks;
    this.maxMarks = 300;
  }

  // addd to prototype of Student
  checkResult() {
    let percentage = (this.obtainedMarks / maxMarks) * 100;
    if (percentage > 40) {
      return "pass";
    }
    return "fail";
  }
}

var stu3 = new Student("student 3", 100);
