import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Checkbox } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';

const propsDescriptions = {
  disabled: {
    propType: 'bool',
    description: 'If this value is true the input will be inactive'
  },
  variant: {
    propType: 'bool',
    description: 'Show a variant of the input'
  },
  checked: {
    propType: 'bool',
    description: 'This define the checkbox value, is not changed directly from the input'
  },
  onChange: {
    propType: 'function',
    description: 'This function recibe as parameter the input new value'
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

export const Main = () => {

  return <Checkbox
    onChange={action('changed', () => alert('hola'))}
    checked={boolean('checked', false)}
    variant={boolean('variant', false)}
    disabled={boolean('disabled', false)} />
};


export default {
  title: 'Checkbox',
  decorators: [withKnobs, withInfo],
  component: Checkbox,
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
        import { Checkbox } from 'library';
        ~~~

        the basicest component form is: 

        ~~~js
        <Checkbox checked={false} onChange={()=>null} />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};