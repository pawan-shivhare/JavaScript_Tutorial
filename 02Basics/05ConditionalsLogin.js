// Allow user to access course if he is
// logged in from email
// logged in from google
// logged in from Facebook

var loggedInFromEmail = false;
var loggedInFromGoogle =  false;
var loggedInFromFacebook = true;

if (loggedInFromEmail || loggedInFromGoogle || loggedInFromFacebook ) {
    console.log("Enjoy our free content");
    
} else {
    console.log("Please login first to enjoy our awesome content");   
}