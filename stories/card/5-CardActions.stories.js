import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Card, CardActions, CardContent, CardHeader, CardImage } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'
import imageFile from '../static/photo_hight_resolution.jpg'
import { action } from '@storybook/addon-actions'

const propsDescriptions = {
  border: {
    propType: 'bool',
    description: 'Add a border to the card and remove the elevation'
  },
  selected: {
    propType: 'bool',
    description: 'This stand out the element if you want make it more visible'
  },
  onClick: {
    propType: 'function',
    description: 'This function will be called when the card is pressed, this also add an elevation animation'
  },
  children: {
    propType: 'node',
    description: 'Node who can be passed to the containers, can be own of the container or anything else'
  },
  imgUrl: {
    propType: 'string',
    description: 'Path of the image, can be an Object or a url'
  },
  alt: {
    propType: 'string',
    description: 'Text that will appear if the image does not exist '
  },
  title: {
    propType: 'string',
    description: 'Title of the section'
  },
  typeList: {
    propType: 'string',
    description: 'type of bullet list'
  },
  content: {
    propType: 'string',
    description: 'content of the card'
  },
  bullets: {
    propType: 'string',
    description: 'An array of object to create the list'
  }


}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }))

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {
      console.log(defaultValue)

      return (
        <tr key={property}>
          <td>{property}
            {required && <Red/>}
          </td>
          <td>{propType}</td>
          <td>{defaultValue !== undefined ? `${defaultValue}` : ' - '}</td>
          <td>{description}</td>
        </tr>
      )
    }
  )

  return (
    <table style={{
      width: '100%'
    }} {...propsx} >
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

const colors = ['primary', 'secondary']

export const CardWithActions = () => (
  <div className="container">
    <div className="row" style={{ justifyContent: 'center' }}>
      <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-start">
        <Card
          onClick={select('function', [true, false], false, 'Card Config') ? () => alert('action') : null}
          selected={boolean('selected', false, 'Card Config')}
          border={boolean('border', false, 'Card Config')}>
          <CardHeader>
            <CardImage imgUrl={imageFile}/>
          </CardHeader>
          <CardContent title={text('Title', 'Some title', 'Card Content')}
                       content={text('Content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquid at consequuntur ea eum facere ipsa', 'Card Content')}>
          </CardContent>
          <CardActions buttons={[
            {
              color: select('color', colors, 'primary', 'Button I'),
              disabled: boolean('disabled', false, 'Button I'),
              prefix: !boolean('prefix Icon', false, 'Button I') ? null : 'home',
              suffix: !boolean('suffix Icon', false, 'Button I') ? null : 'cloud',
              onClick: action('clicked', null, 'Button I'),
              label: text('Label', 'Button', 'Button I')
            },
            {
              color: select('color', colors, 'primary', 'Button II'),
              disabled: boolean('disabled', false, 'Button II'),
              prefix: !boolean('prefix Icon', false, 'Button II') ? null : 'home',
              suffix: !boolean('suffix Icon', false, 'Button II') ? null : 'cloud',
              onClick: action('clicked', null, 'Button II'),
              label: text('Label', 'Button', 'Button II')
            }
          ]}>
          </CardActions>
        </Card>
      </div>
    </div>
  </div>
)


export default {
  title: 'Card',
  decorators: [withKnobs, withInfo],
  component: [Card, CardHeader, CardImage, CardContent, CardActions],
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { Card, CardHeader, CardImage, CardContent } from 'library';
        ~~~

        a way to declare the component it is this (the cardHeader and cardContent containers it not mandatory) if you want to know how more about button component please follow the next link [Button Componenet](/?path=/story/button--normal)

        ~~~js
        <Card>
            <CardHeader>
                <CardImage imgUrl="someUrl"></CardImage>
            </CardHeader>
             <CardContent title="Some title" content="some content">
            </CardContent>
            <CardActions buttons={[
               {
                color: 'primary',
                label: 'Button',
                onClick: () => { console.log('test')}
               },
               {
                color: 'primary',
                label: 'Button',
                onClick: () => { console.log('test')}
               }
               ]}>
            </CardActions>
        </Card>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}