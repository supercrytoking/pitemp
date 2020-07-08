#!/usr/bin/env node

const si = require('systeminformation')
const colors = require('colors')
const watch = require('watch-bash')

const interval = parseInt(process.argv.slice(2)[0] || 1) // time

console.log((`pitemp`.brightRed + ` is reporting every ${interval} seconds.`).bold)

setInterval(() => {
    si.cpuTemperature((data) => {
        var string = `Main`.blue.bold + `: ${data.main}° C - ` + `Max`.yellow.bold + `: ${data.max}° C`
        watch(string)
    })
}, (interval) * 1000)