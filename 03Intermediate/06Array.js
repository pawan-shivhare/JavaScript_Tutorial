var countries = ["India","USA","Canada","UK"]

var stateCode = new Array("UP","MP","MH","RJ","PB","DL")

console.log(countries);

console.log(countries.length);

console.log(stateCode[1]);

console.log(stateCode);

//update a given index value
stateCode[0] = "TN"
console.log(stateCode);


var user = ["vaan","vaan@dev.in",3]

console.log(user);

// remove ele from last
user.pop()
console.log(user);

//add elemnt in 0th position, computationally expensive
user.unshift("New Var")
console.log(user);

//remove element from the 0th position but very expensive computationally
user.shift()
console.log(user);

//find index of element
console.log(user.indexOf("vaan"));

//convert string into array
console.log(Array.from("backend"));