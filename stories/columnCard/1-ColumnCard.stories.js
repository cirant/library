import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { ColumnCard, ColumnCardContent, ColumnCardContentActions, ColumnCardImage } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'
import { action } from '@storybook/addon-actions'
import imageFile from '../static/photo_hight_resolution.jpg'

const propsDescriptions = {
  border: {
    propType: 'bool',
    description: 'Add a border to the card and remove the elevation'
  },
  children: {
    propType: 'node',
    description: 'Add a children to container columnCard'
  },
  title: {
    propType: 'string',
    description: 'Add a title to the content component'
  },
  content: {
    propType: 'string',
    description: 'Add a content to the component'
  },
  imgUrl: {
    propType: 'string',
    description: 'Add the path of the image'
  },
  buttons: {
    button: 'array',
    description: 'Add an array of button to the component'
  }
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>

const colors = ['primary', 'secondary']

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

export const Simple = () => (
  <ColumnCard>
    <ColumnCardContent
      title={text('Title', 'Type something', 'Column Card Config')}
      content={text('Content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit illum ipsum, nulla odit repellendus saepe sed vitae. Ad doloremque dolores enim, error esse id illo, magni praesentium suscipit tenetur ullam.', 'Column Card Config')}>
      <ColumnCardContentActions
        buttons={[
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
      ]
      }></ColumnCardContentActions>
    </ColumnCardContent>
    <ColumnCardImage imgUrl={imageFile}/>
  </ColumnCard>
)


export default {
  title: 'Column Card',
  decorators: [withKnobs, withInfo],
  component: [ColumnCard,ColumnCardImage,ColumnCardContent],
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 40px 0px'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { ColumnCard, ColumnCardContent, ColumnCardContentActions, ColumnCardImage } from 'library';
        ~~~

        way to declare the component it is this if you want to know how more about button component please follow the next link [Button Componenet](/?path=/story/button--normal)

        ~~~js
        <div className="container">
          <h1 className="mb-4">Column Card col-lg-6</h1>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-6">
              <ColumnCard>
                <ColumnCardContent title='Type something'
                                   content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit illum ipsum, nulla odit repellendus saepe sed vitae. Ad doloremque dolores enim, error esse id illo, magni praesentium suscipit tenetur ullam.'>
                  <ColumnCardContentActions buttons={[
                    {
                      color: 'primary',
                      label: 'Button',
                      onClick: () => {
                        console.log('test')
                      }
                    },
                    {
                      color: 'primary',
                      label: 'Button',
                      onClick: () => {
                        console.log('test')
                      }
                    }
                  ]
                  }></ColumnCardContentActions>
                </ColumnCardContent>
                <ColumnCardImage imgUrl={'/assets/images/photo_hight_resolution.jpg'}/>
              </ColumnCard>
            </div>
            <br/>
            <br/>
          </div>
        </div>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
