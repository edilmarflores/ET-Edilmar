// Function Part 1


// function declaration
// function sum(){
//     console.log(2 + 2)
// }

// // function expression
// var mySumFunction = function(){
//     console.log(2 + 2)
// }

// function sum(num1, num2){
//     return num1 + num2
// }

// var result = sum(85, 35)
// console.log(result)

// function myFunc(data){
//     console.log(data)
// }

// myFunc(1)
// myFunc("hi")
// myFunc(true)
// myFunc(2, 4, 6, 8, 10)
// myFunc({name: "nami"})

function loopThroughArr(array){

    for(var i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

loopThroughArr([2, 4, 6, 8, 10])