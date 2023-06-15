let orginal = {
   name: "huzaifa",
   prof: "developer",
   age: 19 
  };
  console.log(orginal)

// ShallowCopy
let copy = Object.assign({ }, orginal)
copy.name = "mustufa"
console.log(copy)

//Another way using Spread Operator
const check = { ...orginal };
check.name = "taha"
console.log(check);
