export default {
  title: {
    propType: 'string',
    description: 'main text to be shown'
  },
  routes: {
    propType: 'arry',
    description: 'String array to show the element location'
  },
  description: {
    propType: 'string',
    description: 'text to be shown in bottom section'
  },
  onClick: {
    propType: 'function',
    description: 'An action to be triggered on card click'
  }
}