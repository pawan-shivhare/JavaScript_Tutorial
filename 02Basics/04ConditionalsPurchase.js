// An purchase page inside our application

/* 
1.Check if the user is logged in
2. Check if the Email is verified
3. Check if payment method is valid
4. If all true allow to make a purchase.
*/

var isLoggedIn = true;

var isEmailVerified = true;

var paymentValid = true;

// if (isLoggedIn) {
//     console.log("You are logged in");
//     if (isEmailVerified) {
//         console.log("Email verified");
//         if (paymentValid) {
//             console.log("Make a purchase");
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && paymentValid) {
    console.log("You're allowed to make a purchase");
    
} else {
    console.log("Please check your credentials");
}