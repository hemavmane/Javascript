function destrucring(userObj){
const {id,hobbies} = userObj
console.log({id,hobbies})
}

let res =destrucring({id:3,name:"hema",hobbies:"read"})
// console.log(res())
console.log(res.id)