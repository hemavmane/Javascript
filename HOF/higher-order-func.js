function outerfunc(){
    return innerfunc
}

function innerfunc(){
    return "i invoked from outerfunc"
}

let result = outerfunc()
console.log(result())