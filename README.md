# `pitemp`

A quick and easy way to get the temperature of your Raspberry Pi with a single command. Built in [NodeJS](https://nodejs.org/en/).

![pitemp screenshot](https://i.imgur.com/gqvKva0.png)

## Usage

Requires [NodeJS](https://nodejs.org/en/).

### 1. Using `pitemp` with `npx`

The suggested usage is `npx`, because you'll always be running the latest version of `pitemp`. It is installed by default with `npm`. You can get `npm` by installing [NodeJS](https://nodejs.org/en/).

```
npx pitemp
npx pitemp [interval in seconds]
npx pitemp 3
npx pitemp 10

// pitemp is reporting every X seconds.
// Main: 62.322° C - Max: 62.322° C
```

### 2. Installing globally and running

You can install `pitemp` globally with your favorite package manager.

```
npm install -g pitemp
yarn global add pitemp
```

Then simply run `pitemp` with the command.

```
pitemp
pitemp [interval in seconds]
pitemp 3
pitemp 10

// pitemp is reporting every X seconds.
// Main: 61.323° C - Max: 62.826° C
```

## Compatibility

| Device                   | Operating System | Working |
| ------------------------ | ---------------- | ------- |
| Raspberry Pi 4 (4GB RAM) | Ubuntu 20.04     | ✔️      |
