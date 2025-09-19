/**
 * Arithemetic operators
 * Logical
 * Comparison
 * Assignment
 * typeof
 * delete
 * in
 * instanceof
 * bitwise
 * spread
 * rest
 * comma
 * unary
 * binary
 *
 * ------------------------------------
 * Conditional (ternary) operator
 * optional chaining operator
 * nullish coalescing operator
 * ------------------------------------
 */

// nullish coalescing operator, checks for null or undefined values
var firstName = null;
var lastName = "lastName";
var displayName = firstName ?? lastName ?? userName ?? "Guest User";
// if firstName exists, return firstName
// else if lastName exists, return lastName
// else if userName exists, return userName
// else default value, Guest user
