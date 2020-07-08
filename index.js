#!/usr/bin/env node

const si = require('systeminformation')

setInterval(() => {
    si.cpuTemperature((data) => {
        var string = `Main: ${data.main} C° - Max: ${data.max}`
        console.log(string)
    })
}, 1000)