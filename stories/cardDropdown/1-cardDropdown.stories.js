import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { CardDropdown } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';

const propsDescriptions = {
  title: {
    propType: 'string',
    description: 'main text to be shown'
  },
  description: {
    propType: 'string',
    description: 'text to be shown into secondary secton'
  },
  opened: {
    propType: 'bool',
    description: 'dropdown controller'
  },
  disabled: {
    propType: 'bool',
    description: 'disabled attribute'
  },
  dark: {
    propType: 'string',
    description: 'if it is true the background will have color'
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

export const Simple = () => <CardDropdown
  opened={boolean('opened', false, 'props')}
  onClick={action('clicked', 'props')}
  title={text('title', 'Label content', 'props')}
  description={text('description', 'Pago realizado: 30 oct 2020', 'props')}
  border={boolean('border', false, 'card attribute')}
  dark={boolean('dark', false, 'card attribute')}
  selected={boolean('selected', false, 'card attribute')}
  disabled={boolean('disabled', false, 'card attribute')}
>
  some content
</CardDropdown>;

export default {
  title: 'CardDropdown',
  decorators: [withKnobs, withInfo],
  component: CardDropdown,
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
        import 'design-system-coopeuch/dist/index.css';
        import { CardDropdown }from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <CardDropdown> some content </CardDropdown>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};
