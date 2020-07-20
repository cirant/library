import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { PrivateFooter, Icon } from '../../dist';
import '../../dist/css/custom.css';
import iconList from '../icons/list';

const propsDescriptions = {
    icon: {
      propType: 'string / icon',
      description: 'icon to be shown in the left side of label'
    },
    items: {
      propType: 'array',
      description: 'An array of object to create the list'
    },
    label: {
      propType: 'text',
      description: 'This will show this value above the field'
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

export const privateFooter = () => (
    <div className="container my-4">
        <PrivateFooter
            items={[
              {
                link: text('link', 'http://www.google.cl', 'Item I'),
                text: text('text', 'Términos y condiciones', 'Item I')
              },
              {
                link: text('link', 'http://www.coopeuch.cl', 'Item II'),
                text: text('text', 'Políticas y condiciones', 'Item II')
              },
              {
                link: text('link', 'http://www.coopeuch.cl', 'Item III'),
                text: text('text', 'Otro Link', 'Item III')
              },
              {
                link: text('link', 'http://www.google.cl', 'Item IV'),
                text: text('text', 'Términos y condiciones', 'Item IV')
              }
            ]}
            icon={<Icon name={select('Icon', iconList, 'line-snooze')} />}
            label={text('text', 'Text Label', 'Label Text')}
        />
    </div>
)

export default {
    title: 'PrivateFooter',
    decorators: [withInfo],
    component: PrivateFooter,
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
            padding: '0px 40px 0px',
          }
        },
        text: `
          include into your project to be able to use the component styles
          ~~~js
          import 'library/dist/index.css';
          import { PrivateFooter, Icon } from 'library';
          import 'library/dist/css/custom.css';
          ~~~
  
          the basicest component form is:
  
          ~~~js
          <PrivateFooter
                items={[]}
                icon={<Icon name="line-snooze" size="4" />}
                label={'Label 1'}
          />
          ~~~

          the object into array 'items' should have look like the shown below
          ~~~js
          {[
            {
              link: 'url link',
              text: 'name'
            },
            {
              link: 'url link',
              text: 'name'
            },
            {
              link: 'url link',
              text: 'name'
            },
          ]}
  
          change the knobs properties and you'll be able to watch its component structure below at Story Source
        `
      }
    }
}