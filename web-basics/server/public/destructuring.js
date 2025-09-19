var arr1 = [1, "Hello", { name: "name1", age: "age1" }];
var [count, greet, details] = arr1;
// console.log(count + " " + details["name"]) // 1 name1

var obj1 = {
  fName: "name2",
  lName: "",
  details: { age: 20, college: "college1" },
};

var { lName, fName } = obj1;
console.log(fName); // name2
