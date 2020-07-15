import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Card, CardContent, CardHeader, CardImage } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'
import imageFile from '../static/photo_hight_resolution.jpg'
import imageFile2 from '../static/pencilsphoto.jpg'

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
    description: 'Node who can be passed to the header container, can be a CardImage or anything else'
  },
  imgUrl: {
    propType: 'string',
    description: 'Path of the image, can be an Object or a url'
  },
  alt: {
    propType: 'string',
    description: 'Text that will appear if the image does not exist '
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

export const CardWithHeaderAndImage = () => (
  <div className="container">
    <div className="row" style={{ justifyContent: 'center' }}>
      <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-start">
        <Card
          onClick={select('function', [true, false], false) ? () => alert('action') : null}
          selected={boolean('selected', false)}
          border={boolean('border', false)}>
          <CardHeader>
            <CardImage imgUrl={select('Image Url', [imageFile, imageFile2], imageFile)} />
          </CardHeader>
          <CardContent title={text('Title', 'Some title')}
            content={text('Content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam at commodi consequatur')}>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
)


export default {
  title: 'Card',
  decorators: [withKnobs, withInfo],
  component: [Card, CardHeader, CardImage, CardContent],
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
        import 'design-system-coopeuch/dist/index.css';
        import { Card, CardHeader, CardImage, CardContent } from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <Card>
            <CardHeader>
                <CardImage imgUrl="someUrl"></CardImage>
            </CardHeader>
        </Card>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
