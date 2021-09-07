var user = {
    firstName: "vaan",
    lastName: "dev",
    role: "admin",
    loginCount: 30,
    googleSignedIn: true,
    courseList: [],
    //defining a method inside object
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },
    courseCount: function () {
        return `${this.firstName} is resgistered in ${this.courseList.length} courses.`
    },
    userInfo: function () {
        return `User fullname is: ${this.firstName} ${this.lastName} and in role
         ${this.role} also logged in: ${this.loginCount} times from google: ${this.googleSignedIn}
         and registered into: ${this.courseList.length} courses`
    }
        
};

// use paranthesis because method is being called
console.log(user.courseCount());

user.buyCourse("JavaScript Tutorial");
console.log(user.courseCount());

user.buyCourse("MERN stack");

console.log(user.userInfo());
