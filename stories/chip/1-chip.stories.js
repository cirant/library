import React from 'react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';
import { InputChip } from '../../dist';
import '../../dist/index.css';

const propsDescriptions = {
  value: {
    propType: 'string',
    description: 'text will be shown'
  },
  onClose: {
    propType: 'function',
    description: 'this is a function which is triggered when the icon is clicked'
  },
  variant: {
    propType: 'bool',
    description: 'a boolean which control the InputChip variant'
  },
  disabled: {
    propType: 'bool',
    description: 'a boolean which control InputChip disabled state'
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
  title: 'InputChip',
  decorators: [withInfo],
  component: InputChip,
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
        import 'library/dist/index.css';
        import { InputChip } from 'library';
        ~~~

        the basicest component form is: 

        ~~~js
        <InputChip value="lorem" onClose={()=>null} />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};

export const element = () => <InputChip
  value="lorem"
  onClose={action('clicked')}
  disabled={boolean('disabled', false)}
  variant={boolean('variant', false)} />;

element.story = {
  name: 'InputChip component',
};
