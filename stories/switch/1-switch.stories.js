import React from 'react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';
import { Switch } from '../../dist';
import '../../dist/index.css';

const propsDescriptions = {
  onClick: {
    propType: 'function',
    description: 'this is a function which is triggered when the element is clicked'
  },
  status: {
    propType: 'bool',
    description: 'a boolean which control switch state'
  },
  disabled: {
    propType: 'bool',
    description: 'a boolean which control switch disabled state'
  }
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>;

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }));

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {
      console.log(defaultValue);

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

export default {
  title: 'Switch',
  decorators: [withInfo],
  component: Switch,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 40px 0px',
          textAlign: 'center'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'design-system-coopeuch/dist/index.css';
        import { Switch }from 'design-system-coopeuch';
        ~~~

        the basicest component form is: 

        ~~~js
        <Switch />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};

export const element = () => <Switch
  onClick={action('clicked')}
  status={boolean('status', true)}
  disabled={boolean('disabled', false)} />;

element.story = {
  name: 'Switch component',
};
