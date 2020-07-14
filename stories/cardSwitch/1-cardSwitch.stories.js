import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { CardSwitch } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';

const propsDescriptions = {
  title: {
    propType: 'string',
    description: 'main text to be shown'
  },
  footerTitle: {
    propType: 'string',
    description: 'Strong text to be shown into secondary secton'
  },
  footerText: {
    propType: 'string',
    description: 'text to be shown into secondary secton'
  },
  status: {
    propType: 'bool',
    description: 'switch value'
  },
  cardname: {
    propType: 'string',
    description: 'it could be just "mastercard", any different text is going to be shown as a default card'
  },
  onClick: {
    propType: 'function',
    description: 'This function will be called when the card is pressed'
  }
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>;

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }));

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {

      return (
        <tr key={property}>
          <td>{property}
            {required && <Red />}
          </td>
          <td>{propType}</td>
          <td>{defaultValue !== undefined ? `${defaultValue}` : ' - '}</td>
          <td>{description}</td>
        </tr>
      );
    }
  );

  return (
    <table style={{
      width: "100%"
    }} {...propsx} >
      <thead>
        <tr style={{ textAlign: "left" }}>
          <th>name</th>
          <th>type</th>
          <th>default</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

export const Simple = () => <CardSwitch
  status={boolean('status', false, 'props')}
  onClick={action('clicked', 'props')}
  cardname={select('cardname', ['', 'default', 'mastercard'], '', 'props')}
  title={text('title', 'Label content', 'props')}
  footerTitle={text('footerTitle', 'Titular', 'props')}
  footerText={text('footerText', 'Nº **************2345', 'props')}
  border={boolean('border', false, 'card attribute')}
  selected={boolean('selected', false, 'card attribute')}
/>;




export default {
  title: 'CardSwitch',
  decorators: [withKnobs, withInfo],
  component: CardSwitch,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 40px 0px',
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { CardSwitch } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <CardSwitch />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};
