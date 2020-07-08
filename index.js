#!/usr/bin/env node

const si = require('systeminformation')
const colors = require('colors')

const interval = parseInt(process.argv.slice(2)[0] || 1) // time

console.log('')
console.log((`pitemp`.brightRed + ` is reporting every ${interval} seconds.`).bold)

setInterval(() => {
    si.cpuTemperature((data) => {
        var string = `Main`.blue.bold + `: ${data.main}° C     ` + `Max`.yellow.bold + `: ${data.max}° C`
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
        process.stdout.write(string)
    })
}, (interval) * 1000)