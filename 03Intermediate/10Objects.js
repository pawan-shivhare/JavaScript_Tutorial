//An object is a key value pair
var users = {
    firstName: "vaan",
    lastName: "dev",
    role: "admin",
    loginCount: 30,
    googleSignedIn: true
};

console.log(users.loginCount);


users.loginCount = 44;
console.log(users.loginCount);

//return object in form of "beautiful" table
console.table(users)