// const jsonFile = require("./customer.json");
// var customer = JSON.parse(jsonFile);

// console.log(customer['value']);

const arr = [
  { name: "aksht", age: 23, skill: "ruby" },
  { name: "nidhi", age: 35, skill: "java" },
  { name: "guddu", age: 30, skill: "python" },
 ]
 
 // here we pass one arrow function in forEach
 
 arr.forEach((object, index) => {
  
  // object is giving the one by one object
   console.log(index, object['name'], object.age, object.skill);
  
  // some logic based on your requirement
 });