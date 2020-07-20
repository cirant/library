import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { CardBranchOffice } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'

const propsDescriptions = {
  name: {
    propType: 'string',
    description: 'Add the of the branch office'
  },
  address: {
    propType: 'string',
    description: 'Add the address of the branch office'
  },
  attentionSchedule: {
    propType: 'array',
    description: 'Add a list of the schedules to the branch office'
  },
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

export const CardBranchOfficeComponent = () => (
  <CardBranchOffice
    name={text('name','Name of branch office')}
    address={text('address','Address branch office')}
    attentionSchedule={[
      {
        schedule: text('schedule 1 ','Lunes a Domigo: 09:00 Hrs a 16:00 Hrs')
      },
      {
        schedule: text('schedule 2','Sabado a Domigo: 09:00 Hrs a 12:00 Hrs')
      }
    ]}
  />
)

export default {
  title: 'Card Branch Office',
  decorators: [withKnobs, withInfo],
  component: CardBranchOffice,
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
        import 'design-system-coopeuch/dist/index.css';
        import { CardBranchOfficeComponent } from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <CardBranchOfficeComponent />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
