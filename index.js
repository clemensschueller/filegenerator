const writeFile = require('./writeFile')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Hello, which functions and files would you like to create? Please seperate by comma.',
  answer => {
    answer
      .split(',')
      .map(wurst => wurst.trim())
      .forEach(wurst => writeFile(wurst))
    // Lene's Weg: answer.split(',').map(name => writeFile(name.trim()))
    rl.close()
  }
)
