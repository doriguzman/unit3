const chalk= require('chalk');


const helloBlue= ()=>{
   console.log(chalk.blue('Hello world!'));
}

helloBlue()


const helloRed=()=>{
    console.log(chalk.red('Hello world'))
}

helloRed()


const stringToColor= (string, color)=>{
    console.log(chalk[color](string))
}

stringToColor('helloooo', 'blue')


const evensBlueOddsYellow=(string)=>{
    let splitter= string.split(' ')
    let newString= ''
    splitter.map((elem)=>{
        if(elem.length % 2 ===0){
           newString+= chalk.blue(elem) + " "
        }else{
           newString+=chalk.yellow(elem) + " "
        }   
    })
    console.log( newString)

}

evensBlueOddsYellow('hi bye hello')


const angryText= (string)=> {
    console.log(chalk.red.underline.bold(string))
}

angryText('hi')

const backgroundCyan= (string)=> {
    console.log(chalk.white.bgCyan(string))
}

backgroundCyan('hello')




const boldFirstUnerlineLast=(string)=>{
    let splitter= string.split(' ')
    console.log(splitter)
    splitter.map((elem)=>{
        if(elem[0]){
            console.log(chalk.bold(elem))
        }else{
            console.log(chalk.underline(elem))
        }
    })
}

boldFirstUnerlineLast('hello there')

const commandLineChalk=(string, color, bgColor)=>{
    console.log(chalk[color][bgColor](string))
}
commandLineChalk('hiya', 'white', 'bgMagenta')

// log(chalk.blue.bgRed.bold('Hello world!'))