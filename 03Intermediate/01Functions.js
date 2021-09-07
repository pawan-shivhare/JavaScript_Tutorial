/* 
Define a function that can answer the role of a user.
A user can be on following roles:
admin: with all access
subadmin: with access to create/delete courses
testprep: with access to create/delete tests
user : consumes all content
*/ 



function userRole(role){

    switch (role) {
        case "admin":  // in cases we define a value to be evaluated so datatype must be kept in mind
            return "All access";
        case "subadmin":
            return "Access to create/delete courses";
        case "testprep":
            return "Access to create/delete courses";
        case "user":
            return "Consumes all content";
    
        default:
            return "Please Login";
    }

}

console.log(userRole("admin"));


// In Js it is fairly common to declare funtion insie a variable

var getUserRole = function userRole(role){

    switch (role) {
        case "admin":  // in cases we define a value to be evaluated so datatype must be kept in mind
            return "All access";
        case "subadmin":
            return "Access to create/delete courses";
        case "testprep":
            return "Access to create/delete courses";
        case "user":
            return "Consumes all content";
    
        default:
            return "Please Login";
    }

}

// It is a function
console.log(typeof(getUserRole));

// It is context
console.log(getUserRole("user"));