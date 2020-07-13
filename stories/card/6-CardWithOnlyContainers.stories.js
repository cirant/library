import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { Button, Card, CardActions, CardContent, CardHeader, CardImage } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'
import list from '../icons/list'

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


let background = 'https://www.w3schools.com/bootstrap4/img_avatar3.png';
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

export const CardWithOnlyContainers = () => (
  <div className="container">
    <div className="row" style={{ justifyContent: 'center' }}>
      <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-start">
        <Card>
          <CardHeader>
            <div style={{
              backgroundImage: `url(${background})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              paddingTop:'60%',
              width:'100%',
              height: 400,
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px'
            }}>

            </div>
          </CardHeader>
          <CardContent>
            <h6>Type someting</h6>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid cumque e.</p>
          </CardContent>
          <CardActions>
            <Button style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                    color='primary'>Button</Button>
          </CardActions>
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
        infoStory: {}
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { Card, CardHeader, CardImage, CardContent } from 'library';
        ~~~

        a way to declare the component it is this (container are not mandatory)

        ~~~js
        <CardHeader>
          <CardImage imgUrl='https://www.w3schools.com/bootstrap4/img_avatar3.png'/>
        </CardHeader>
        <CardContent>
          <h6>Type someting</h6>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid cumque e.</p>
        </CardContent>
        <CardActions>
          <Button style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                  color='primary'>Button</Button>
        </CardActions>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
