const propsDescriptions = {
  type: {
    propType: "string",
    description: "one of 'error', 'success', 'info', 'warning'",
  },
  title: {
    propType: 'string',
    description: 'It\'s the main text shown into the component'
  },
  description: {
    propType: 'string',
    description: 'It\'s a secondary text shown into the component just bellow the title'
  },
  action: {
    propType: 'element',
    description: 'this should be a Button component like this <Button variant="text">action</Button>'
  }
}

export default propsDescriptions;