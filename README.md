# `pitemp`

A quick and easy way to get the temperature of your Raspberry Pi with a single command. Built in [NodeJS](https://nodejs.org/en/).

![pitemp screenshot](/screenshot.png)

## Usage

### Using `pitemp` with `npx`

The suggested usage is `npx`. It is installed by default with `npm`. You can get `npm` by installing [NodeJS](https://nodejs.org/en/).

```
npx pitemp
npx pitemp [interval in seconds]
npx pitemp 3
npx pitemp 10

// pitemp is reporting every X seconds.
// Main: 62.322° C - Max: 62.322° C
```

## Compatibility

| Device                   | Operating System | Working |
| ------------------------ | ---------------- | ------- |
| Raspberry Pi 4 (4GB RAM) | Ubuntu 20.04     | ✔️      |
