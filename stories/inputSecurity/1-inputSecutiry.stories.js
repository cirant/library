import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { InputSecurity } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';

const propsDescriptions = {
  label: {
    propType: 'string',
    description: 'This will show this value above the field'
  },
  strength: {
    propType: 'string',
    description: 'This will define bar value. it could be one of none,low,middle or high'
  },
  value: {
    propType: 'string',
    description: 'This will show this into input'
  },
  security: {
    propType: 'bool',
    description: 'Show or hide the input value'
  },
  onChange: {
    propType: 'function',
    description: 'This function will return a new value of the input'
  },
  onSecurityClick: {
    propType: 'function',
    description: 'This function will be trigger when the right icon is clicked'
  }
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>;

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }));

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {

      return (
        <tr key={property}>
          <td className="p-1">{property}
            {required && <Red />}
          </td>
          <td className="p-1" style={{ whiteSpace: "nowrap" }}>{propType}</td>
          <td className="p-1">{defaultValue !== undefined ? `${defaultValue}` : ' - '}</td>
          <td className="p-1">{description}</td>
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


export const inputSecurity = () => <InputSecurity
  disabled={boolean('disabled', false, 'status')}
  security={boolean('security', true, 'status')}
  strength={select('strength', ['none', 'low', 'middle', 'high'], 'none', 'bar')}
  value={text('value', '', 'text')}
  onSecurityClick={action('onSecurityClick action')}
  onChange={action('onChange action')}
  placeholder={text('placeholder', 'password', 'text')}
  label={text('label', '', 'text')}
/>;

export default {
  title: 'InputSecurity',
  decorators: [withKnobs, withInfo],
  component: InputSecurity,
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
        import { InputSecurity }from 'design-system-coopeuch';
        ~~~

        the basicest component form is: 

        ~~~js
        <InputSecurity value={someValue} onChange={()=>null} />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};