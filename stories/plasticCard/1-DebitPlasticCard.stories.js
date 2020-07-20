import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { PlasticCard } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'

const propsDescriptions = {
  width: {
    propType: 'string',
    description: 'Add a defined width to the plastic card'
  },
  cardTitle: {
    propType: 'string',
    description: 'Add a title to the plastic card'
  },
  cardType: {
    propType: 'string',
    description: 'Add a type of the plastic card'
  },
  owner: {
    propType: 'string',
    description: 'Add the owner of the plastic card'
  },
  state: {
    propType: 'string',
    description: 'Add the state of the plastic card'
  },
  cardNumber: {
    propType: 'string',
    description: 'Add the number of the plastic card'
  },
  forceDesktop: {
    propType: 'bool',
    description: 'force the card always to be desktop size'
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

export const DebitPlasticCardComponent = () => (
  <PlasticCard
    type='debit'
    cardNumber='N° *** *** 6520'
    cardTitle='Master Card Debit'
    cardType='titular'
    owner='Ricardo Olivares'
    state='Activa'
  />
)

export default {
  title: 'Plastic Card',
  decorators: [withInfo],
  component: PlasticCard,
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
        import { PlasticCard } from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <PlasticCard />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
