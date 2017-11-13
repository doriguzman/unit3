const reduceMin= (arr) =>
    arr.reduce((acc,curr)=> {
        if(acc<curr){
            return acc
        }else{
            return curr
    }
    })



    console.log(reduceMin([1,2,3,4, -100]))


