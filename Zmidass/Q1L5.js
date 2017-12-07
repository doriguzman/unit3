const express= require('express')
const app= express()
const port= 3000


const laureates = require('./laureates.json')


const laureatesByFirstName= (firstname) => {
    var filteredLaureates= laureates.filter((laureate)=> {
         return laureate.firstName===firstname
    })
    return filteredLaureates
}
    

const laureatesByLastName= (lastname)=>{
   var lastNames= laureates.filter((laureate)=>{
        return laureate.lastName = lastname
    })
    return lastNames
}


app.get('/firstname/:firstName', (req,res)=>{
    var laureatesArray= laureatesByFirstName(req.params.firstName)
    res.send(laureatesArray)
})

app.get('/lastname/:lastName', (req,res)=>{
    var laureatesArray= laureatesByLastName(req.params.lastName)
    res.send(laureatesArray)
})


app.listen(port, ()=>{
    console.log('listening')
}
)

