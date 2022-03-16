const chalk = require('chalk')
const yargs = require('yargs')

//const cmd = process.argv[2]

//console.log(process.argv) // gives 2 elemets (atleast) - path of "nodejs exec on mach" & "current file" 
//console.log(y.argv) // Command line argument parser

/* if(cmd === 'add'){
    console.log(chalk.bgGreen.black('Adding note!'))
}else if(cmd === 'rem'){
    console.log(chalk.bgYellow.black('Removing note!'))
}else{
    console.log(chalk.bgRed('ERROR'), '- Invalid argument given as input')
} */

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the list',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log(chalk.bgYellow.black('Adding note!'), chalk.yellow(argv.title))
        console.log(argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log(chalk.bgYellow.black('Removing a note! '))
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: function(){
        console.log(chalk.bgYellow.black('Listing all notes! '))
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function(){
        console.log(chalk.bgYellow.black('Reading a note! '))
    }
})

//Following both statements are needed for yargs to work!
yargs.parse()
//console.log(yargs.argv)