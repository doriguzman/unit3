const forEachSum=arr=>{
    let sum=0;
     arr.forEach(number=> sum+=number)
     return sum
}

console.log(forEachSum([1,1,1,1,6]))