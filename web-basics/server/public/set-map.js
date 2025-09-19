// compared based on integer
var set1 = new Set([55, 6, 7, 7, 8]);
// console.log(set1);

for (let i of set1) {
  console.log(i);
}

set1.entries(); // return SetIterator

console.log(set1.has(9));

var arr1 = new Array(1, 3, 4, 5);
var arr2 = new Array(1, 3, 4, 5);

// compared by reference
var set2 = new Set([[1, 2, 3], [3, 2, 1], [1, 2, 2], [1, 2, 3], arr1, arr2]);

set1.forEach(function (v1, v2m, set) {
  console.log(v1, v2);
});

// type of key can be anything (null too) unlike in
// objects where it can be string only
var map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
  [null, "nullvalue"],
]);

// CANNOT USE BREAK IN FOREACH LOOP
// map.forEach(function(val) {
//     if (val == "key1") {
//         break;
//     }
// })
