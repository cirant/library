import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { CardBank } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'
import { action } from '@storybook/addon-actions'

const propsDescriptions = {
  cardType: {
    propType: 'string',
    description: 'Add the type of card bank who will be render '
  },
  title: {
    propType: 'string',
    description: 'Add the title of the card'
  },
  cardNumber: {
    propType: 'string',
    description: 'Add the number of the card'
  },
  buttons: {
    propType: 'array',
    description:
      'Add an array who represent the button and the actions of the card'
  },
  children: {
    propType: 'node',
    description: 'Add everything that you want like a child'
  }
}

const Red = (props) => (
  <span style={{ color: 'red' }} {...props}>
    *
  </span>
)

export const CardBankComponent = () => (
  <CardBank
    title={text('title', 'MasterCard Gold', 'Card Bank Config')}
    cardNumber={text('card number', 'N°**** ***2345', 'Card Bank Config')}
    cardType={select(
      'card type',
      ['gold', 'international', 'default', 'debit'],
      'debit',
      'Card Bank Config'
    )}
    buttons={[
      {
        label: text('Label', 'Label Text Link', 'Button I'),
        prefix: !boolean('prefix Icon', false, 'Button I')
          ? null
          : 'arrow-left',
        onClick: action('onClick', null, 'Button I')
      },
      {
        label: text('Label', 'Label Text Link', 'Button II'),
        onClick: action('onClick', null, 'Button II')
      }
    ]}
  >
    <p>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa fuga
        illo laborum minima modi nesciunt obcaecati officia officiis quo sed
        sint sit soluta suscipit tempora, totam, vero voluptate voluptates,
        voluptatum.
      </span>
      <span>
        A accusantium consequatur dignissimos dolor earum eius, ex facere fugit
        illum laudantium, magni non praesentium qui quos, repudiandae rerum
        similique tenetur? Accusantium aut dignissimos iste quo ut voluptate.
        Excepturi, nemo?
      </span>
    </p>
  </CardBank>
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

export default {
  title: 'Card Bank',
  decorators: [withKnobs, withInfo],
  component: CardBank,
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
        import { CardBank } from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <CardBank> some text here </CardBank>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }
  }
}
