import React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Header, HeaderItem, Logo, Icon } from '../../dist'
import '../../dist/css/custom.css'

const propsDescriptions = {
  logo: {
    propType: 'Element',
    description: 'it could be an img or logo to be shown in the left side'
  },
  logOut: {
    propType: 'HeaderItem',
    description: 'a element will be shown in the right side'
  },
  userData: {
    propType: 'object',
    description: 'an object structure described below'
  },
  mobile: {
    propType: 'object',
    description:
      'an object structure described below, this options controlling the mobile version'
  },
  icon: {
    propType: 'string',
    description: 'this value should be a valid icon name'
  },
  bold: {
    propType: 'bool',
    description: 'set the element font weight as bold'
  }
}

const Red = (props) => (
  <span style={{ color: 'red' }} {...props}>
    *
  </span>
)

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({
    ...el,
    ...propsDescriptions[el.property]
  }))

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {
      console.log(defaultValue)

      return (
        <tr key={property}>
          <td>
            {property}
            {required && <Red />}
          </td>
          <td>{propType}</td>
          <td>{defaultValue !== undefined ? `${defaultValue}` : ' - '}</td>
          <td>{description}</td>
        </tr>
      )
    }
  )

  return (
    <table
      style={{
        width: '100%'
      }}
      {...propsx}
    >
      <thead>
        <tr style={{ textAlign: 'left' }}>
          <th>name</th>
          <th>type</th>
          <th>default</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  )
}

export const BulletList = () => (
  <div className='bg-primary w-100'>
    <div className='container'>
      <Header
        logo={<Logo className='w-100' />}
        userData={{
          name: text('username', 'Some name'),
          onClick: action('onClick')
        }}
        mobile={{
          onClickBack: action('onClickBack'),
          burgerClick: action('burgerClick'),
          section: text('mobile text', 'Label text'),
          leftElement: (
            <Icon name='line-logout' onClick={action('leftElement')} />
          )
        }}
        logOut={
          <HeaderItem icon='line-logout' bold>
            {' '}
            label{' '}
          </HeaderItem>
        }
      >
        <HeaderItem icon='home'>label</HeaderItem>
        <HeaderItem icon='line-cloud'>label</HeaderItem>
      </Header>
    </div>
  </div>
)

export default {
  title: 'Header',
  decorators: [withInfo],
  component: Header,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          alignSelf: 'start',
          padding: '0px 40px 0px'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { Header, Logo } from 'library';
        import 'library/dist/css/custom.css';
        ~~~

        the basicest component form is:

        ~~~js
        <Header logo={<Logo />}></Header>
        ~~~

        the "userData" value should be an object like the shown below

        ~~~js
        {
          name: 'some text',
          date: new Date(),
          onClick: () => null // a function will be triggered when the user clicked profile box
        }
        ~~~

        the "mobile" options should be an object like the shown below

        ~~~js
        {
          section: 'Label text', 
          burgerClick: () => null, // a function will be triggered when the user clicked profile box
          leftElement: <Icon />, //could be a React component,
          onClickBack: () => null, // a function will be triggered when the user clicked back button into header,
        }
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
