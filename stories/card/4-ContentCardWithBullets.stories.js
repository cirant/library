import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Card, CardContent, CardHeader, CardImage } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'
import imageFile from '../static/photo_hight_resolution.jpg'
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
    description:
      'This function will be called when the card is pressed, this also add an elevation animation'
  },
  children: {
    propType: 'node',
    description:
      'Node who can be passed to the containers, can be own of the container or anything else'
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

export const CardContentWithTitleAndBullets = () => (
  <div className='container'>
    <div className='row' style={{ justifyContent: 'center' }}>
      <div className='col-lg-4 col-md-12 col-sm-12 d-flex align-items-start'>
        <Card
          onClick={
            select('function', [true, false], false, 'Card Config')
              ? () => action('action')
              : null
          }
          selected={boolean('selected', false, 'Card Config')}
          border={boolean('border', false, 'Card Config')}
        >
          <CardHeader>
            <CardImage imgUrl={imageFile} />
          </CardHeader>
          <CardContent
            title={text('Title', 'Some title', 'Card Content')}
            typeList={select(
              'typeList',
              ['unorder', 'order', 'icons'],
              'order',
              'Bullets config'
            )}
            bullets={[
              {
                text: text('text', 'Order Bullet text a', 'Bullet I'),
                prefixType: select(
                  'prefixType',
                  ['info', 'error', 'warning', 'success'],
                  '',
                  'Bullet I'
                ),
                contentType: select(
                  'contentType',
                  ['info', 'error', 'warning', 'success'],
                  '',
                  'Bullet I'
                ),
                icon: select('icon', list, 'line-check', 'Bullet I'),
                disabled: boolean('disabled', false, 'Bullet I'),
                type: select(
                  'type',
                  ['info', 'error', 'warning', 'success'],
                  '',
                  'Bullet I'
                )
              },
              {
                text: text('text', 'Order Bullet text b', 'Bullet II'),
                prefixType: select(
                  'prefixType',
                  ['info', 'error', 'warning', 'success'],
                  '',
                  'Bullet II'
                ),
                contentType: select(
                  'contentType',
                  ['info', 'error', 'warning', 'success'],
                  '',
                  'Bullet II'
                ),
                icon: select('icon', list, 'line-check', 'Bullet II'),
                disabled: boolean('disabled', false, 'Bullet II'),
                type: select(
                  'type',
                  ['info', 'error', 'warning', 'success'],
                  '',
                  'Bullet II'
                )
              },
              {
                text: text('text', 'Order Bullet text c', 'Bullet III'),
                prefixType: select(
                  'prefixType',
                  ['info', 'error', 'warning', 'success'],
                  '',
                  'Bullet III'
                ),
                contentType: select(
                  'contentType',
                  ['info', 'error', 'warning', 'success'],
                  '',
                  'Bullet III'
                ),
                icon: select('icon', list, 'line-check', 'Bullet III'),
                disabled: boolean('disabled', false, 'Bullet III'),
                type: select(
                  'type',
                  ['info', 'error', 'warning', 'success'],
                  '',
                  'Bullet III'
                )
              }
            ]}
          />
        </Card>
      </div>
    </div>
    <div className='row'>
      <div className='col-lg-8 col-md-12 col-sm-6 d-flex align-items-start' />
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
        import 'design-system-coopeuch/dist/index.css';
        import { Card, CardHeader, CardImage, CardContent } from 'design-system-coopeuch';
        ~~~

        a way to declare the component it is this (the cardHeader container it not mandatory) if you want to know how more about bullets please follow the next link [Bullet Componenet](/?path=/story/bullets--bullet-list)

        ~~~js
        <Card>
            <CardHeader>
                <CardImage imgUrl="someUrl"></CardImage>
            </CardHeader>
             <CardContent title={text('Title', 'Some title')} typeList='unorder' bullets={[
              {
                text: 'Tipografía / Estilos',
              },
              {
                text: 'Tipografía / Estilos',
              },
              {
                text: 'Tipografía / Estilos',
              }
            ]
            }>
            </CardContent>
        </Card>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
