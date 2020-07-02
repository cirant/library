export default {
  label: {
    propType: 'string',
    description: 'This will show this value above the field'
  },
  assistText: {
    propType: 'string',
    description: 'This will show this value below the field'
  },
  code: {
    propType: 'number',
    description: 'Define an area code'
  },
  value: {
    propType: 'number',
    description: 'Input value'
  },
  error: {
    propType: 'bool',
    description: 'input status, if it\'s true the input border will be green'
  },
  success: {
    propType: 'bool',
    description: 'input status, if it\'s true the input border will be green'
  },
  disabled: {
    propType: 'bool',
    description: 'Define if the input will be disabled'
  },
  onChange: {
    propType: 'function',
    description: 'This function will return a new value entered into the input'
  },
  onCodeChange: {
    propType: 'function',
    description: 'This function will return the code value selected'
  }
}