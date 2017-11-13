const implement=(arr,func)=>
arr.map(number=> double(number))

const double=(num)=> {
    return num*2
}


console.log(implement([0,1,2,3], double))