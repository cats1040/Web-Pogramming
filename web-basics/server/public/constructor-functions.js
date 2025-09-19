var studentList = [
  {
    name: "name1",
    age: 20,
    college: "college1",
  },
];

var maxMarks = 500;

// <---- Approach 1 ----->
var student1 = {
  fName: "name1",
  obtainedMarks: 100,
  checkResult: function () {
    let percentage = (this.obtainedMarks / maxMarks) * 100;

    if (percentage > 40) {
      return "pass";
    } else {
      return "fail";
    }
  },
};

console.log(student1.checkResult());

// <---- Approach 2: Using Function ---->
function createStudent(fName, obtainedMarks) {
  return {
    fName: fName,
    obtainedMarks: obtainedMarks,
    checkResult: function () {
      let percentage = (this.obtainedMarks / maxMarks) * 100;

      if (percentage > 40) {
        return "pass";
      } else {
        return "fail";
      }
    },
  };
}

/**
 * now the student2 do not have any relation with createStudent
 * if we update the createStduent function later, in object student2
 * changes will not be reflected. So this is not really blueprint.
 * Kinda disconnected.
 */
var student2 = createStudent("name2", 300);
console.log(student2.checkResult());

// <---- Approach 3: Constructor Function ---->
// <---- REAL BLUEPRINT ---->
// Can get the same class like behaviour like in C++, Java, etc.
var arr1 = new Array();
/**
 *  Whenever JS encounters new keyword, it creates a new
 * object and binds the this keyword to the oject (lhs of the
 * assignment operator)
 */

var temp;
function createStduent2(fName, obtainedMarks) {
  this.fName = fName;
  this.obtainedMarks = obtainedMarks;
  temp = this;

  // return { x: "1" };
  // overrides
}
var student3 = new createStduent2("name2", 430);
console.log(student3.__proto__ === createStduent2.prototype); // true
console.log(temp === student3); // true

var student4 = new createStduent2("name4", 400);
console.log(temp === student4); // true

/**
 * not assigning this keyword to student5
 * so it loooks for this in pa
 */
var student5 = createStduent2("name5", 390);
console.log(temp === student5); // false
console.log(temp); // Window

function student(fName, obtainedMarks) {
  this.fName = fName;
  this.obtainedMarks = obtainedMarks;
  this.checkResult = function () {
    console.log(this);

    let percentage = (this.obtainedMarks / maxMarks) * 100;
    if (percentage > 40) {
      return "pass";
    } else {
      return "fail";
    }
  };
}

var student6 = new student("student6", 100);
var student7 = new student("student7", 400);

console.log(student6.checkResult());

student.prototype.checkMarks = function () {
  return this.obtainedMarks;
};

/**
 * first checks in oject, then in
 * prototype.
 */
console.log(student6.checkMarks());

student.checkMarksOutside = function () {
  return this.obtainedMarks;
};

// console.log(student6.checkResultOutside()); // Error

// <---- Problem ---->
/**
 * Based on undesrtanding of prototypical
 * inheriatnce, constructor function, this
 * keyword inside constructor functions
 *
 * Implement define Array().customMap
 * like Array().map
 */

function fun(ele) {
  return ele * 3;
}

Array.prototype.customMap = function (fun) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    let ele = fun(this[i]);
    arr.push(ele);
  }

  return arr;
};

var arr = [1, 4, 6, 8, 9, 66, 2];

var customMapArr = arr.customMap(fun);
