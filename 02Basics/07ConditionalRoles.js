// Create an application with following roles:
// admin - gets full access
// subadmin - gets acesss to create/delete courses
// testprep - gets access to creae/delete tests
// user - gets access to consure content


var user = "user"

switch (user) {
    case "admin":
        console.log("You gets the full access");   
        break;
    case "subadmin":
        console.log("You gets to create/delete courses");   
        break;
    case "testprep":
        console.log("You gets to create/delete tests");   
        break;
    case "user":
        console.log("You gets to consume content");   
        break;

    default:
        console.log("Roam around freely");
        break;
}