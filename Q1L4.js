let testCommands= (array)=>{
    return array.filter((elem)=> 
        !commands.includes(elem)
    )
        
}


const repeat= (string)=> string 

const exclaim= (string)=> string + "!"

const commands = ['repeat', 'exclaim', 'reverse']
const express = require('express')
const port = 3000
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))


app.get('/:word/:cmd1/:cmd2', (req, res) => {
    const {word, cmd1, cmd2}= req.params
    let serverArray= [] 
    const userWord= `${word}`
    const userCommand1= `${cmd1}`
    const userCommand2= `${cmd2}`
     serverArray.push(userCommand1)
     serverArray.push(userCommand2)

     const commands= {
        repeat: repeat(userWord),
        exclaim:exclaim(userWord),  
    }
    var firstRequest= commands[userCommand1]
    var secondRequest= commands[userCommand2]
    
    if (testCommands(serverArray).length>=1){
        let invalidCommands= testCommands(serverArray).join(' ')
       
        return res.send( 'invalid commands: ' + invalidCommands )
    }else{
       
        console.log(testCommands(serverArray))
        return res.send( firstRequest+ secondRequest);
        }

    })
app.listen(port, () => {
    console.log(`the server is at http://localhost:${port}`)
})