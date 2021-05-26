const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'file',
    message:
      'Which functions and files would you like to create? Please seperate by commas.',
  },
]

inquirer.prompt(questions).then(answers => {
  // answers is an object: { file: 'header, footer'}
  const files = answers['file'].split(',').map(el => el.trim())
  files.forEach(file => writeFile(file))
  console.log(files)
})

// rl.question(
//   'Hello, which functions and files would you like to create? Please seperate by comma.',
//   answer => {
//     answer
//       .split(',')
//       .map(wurst => wurst.trim())
//       .forEach(wurst => writeFile(wurst))
//     // Lene's Weg: answer.split(',').map(name => writeFile(name.trim()))
//     rl.close()
//   }
// )
