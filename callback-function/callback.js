// it is dry principle to avoid it use callback
// let bal =5000

// function withdraw(amount){
//     bal = bal-amount
// }

// let deposit = function(amount){
//       bal = bal+amount
// }


// let updateBal = (amout,typeOfOperation) =>{
//     if(typeOfOperation == "withdraw"){
//         return withdraw(amout)
//     }else if(typeOfOperation=="deposit"){
//       return deposit(amout)
//     }
// }


// updateBal(1500,"withdraw")
// updateBal(500,"deposit")
// console.log(bal)



//// callbaack


let bal =5000

function withdraw(amount){
    bal = bal-amount
}

let deposit = function(amount){
      bal = bal+amount
}

let updateBal = (amout,typeOfOperation)=> typeOfOperation(amout)


updateBal(1500,withdraw)
updateBal(500,deposit)
console.log(bal)