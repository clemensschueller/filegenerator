const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'file',
    message:
      'Which functions and files would you like to create? Please seperate by comma.',
  },
  {
    type: 'checkbox',
    message: 'Please select a file type',
    name: 'fileTypes',
    choices: [{ name: 'Component' }, { name: 'Spec' }, { name: 'Stories' }],
    validate(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one file type.'
      }
      return true
    },
  },
]

inquirer.prompt(questions).then(answers => {
  // answers is an object: { file: 'header, footer'}
  const files = answers['file'].split(',').map(el => el.trim())
  files.forEach(file => writeFile(file))
  console.log(answers)
})
