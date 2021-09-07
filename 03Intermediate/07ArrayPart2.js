//simple way to write a fn
function isEven(element) {
    if (element % 2 === 0) {
        return true
    }
    return false
}

//var way to write fn
var isEven = function (element) {

    return element%2 ===0;
}

// arrow way of fn
var isEven = (element) => {
    return element%2 === 0
}

//call back functions

//this function takes refrence from above function
var result = [2,4,6,8,10].every(isEven);

//this call back function is written when "return" keyword is used
// () => {}
var result = [2,4,6,8,10].every((e) => {
    return e%2 === 0;
})

//this callback function is written without "return" keuword
// () => ()
var result = [2,4,6,8,10].every((e) => (e%2 ===0));