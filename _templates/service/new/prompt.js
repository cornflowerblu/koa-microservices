// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'service',
    message: "What is your service called?",
  },
  {
    type: 'multiselect',
    name: 'components',
    message: 'What additional components will you need?',
    initial: 0,
    choices: [
      {
        name: 'model',
      },
      {
        name: 'producer'
      },
      {
        name: 'consumer'
      }
    ],
    suggest(input, choices) {
      return choices.filter(choice => choice.message.toLowerCase().includes(input.toLowerCase()));
    }
  },
    {
      type: 'input',
      name: 'model',
      message: "Model name? (Usualy your service name capitalized)",
    },
]
