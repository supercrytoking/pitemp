#!/usr/bin/env node
const { program } = require('commander')
const si = require('systeminformation')
const colors = require('colors')

console.log('')

program
    .option('-v, --verbose', 'output extra data!')
    .option('-t, --time <number>', 'output extra data!')

program.parse(process.argv);

if (program.time && isNaN(program.time)) {
    console.log('Error: '.brightRed + 'Usage: -t [interval in seconds]')
    program.time = 1
}

const interval = program.time || 1

console.log((`pitemp`.brightRed + ` is reporting every ${interval} seconds.`).bold)

setInterval(() => {
    si.cpuTemperature((data) => {
        var string = `Main`.blue.bold + `: ${data.main}° C   ` + `Max`.yellow.bold + `: ${data.max}° C`

        if (!program.verbose) {
            process.stdout.clearLine()
            process.stdout.cursorTo(0)
            process.stdout.write(string)
        } else {
            var date = new Date()
            console.log(`${(date.getHours() % 12 || 12).toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}   ${string}`)
        }
    })
}, (interval) * 1000)