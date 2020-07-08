#!/usr/bin/env node

const si = require('systeminformation')
const colors = require('colors')
const watch = require('watch-bash')

const args = process.argv.slice(2) // time

setInterval(() => {
    si.cpuTemperature((data) => {
        var string = `Main`.blue + `: ${data.main}° C - ` + `Max`.yellow + `: ${data.max}° C`
        watch(string)
    })
}, (args[0] || 1) * 1000)