var users = ["vaan","ved","vish","vim","tim","ted"]

// 2 inclusive, 5 exclusive
console.log(users.slice(2,5));

// when only 1 value provided, return till last
console.log(users.slice(2));

//1 is start value, 3 is count, Hi replaces all from (1,3)
users.splice(1,3,"Hi")

//1 is start value, 3 is count, Hi and Be replaces all from (1,3)
users.splice(2,5,"He","BE")