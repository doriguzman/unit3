const forEach= (arr,log)=> 
    arr.forEach(num=> log(num))


var arr= [1,2,3,4,5]

const log=(val)=>
    console.log(val)

forEach(arr,log)


// function add(number){
//     return number+1
// }

// console.log(forEach(arr,add))