import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { InputSelect } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';
import { action } from '@storybook/addon-actions';

const propsDescriptions = {
  label: {
    propType: 'string',
    description: 'This will show this value above the field'
  },
  current: {
    propType: 'string',
    description: 'Option value witch will be shown as a selected'
  },
  assistText: {
    propType: 'string',
    description: 'This will show this value below the field'
  },
  disabled: {
    propType: 'bool',
    description: 'Control the disabled property'
  },
  onSelected: {
    propType: 'function',
    description: 'This function will return a new value entered into the input'
  },
  options: {
    propType: 'array',
    description: 'Array with option that will be shown when the user clicked the input'
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

export const Select = () => <InputSelect
  assistText={text('assist text', '')}
  label={text('label', '')}
  current={select('current', [
    '',
    'option 1',
    'option 2'
  ])}
  disabled={boolean('disabled', false)}
  onSelected={action('selected')}
  options={
    [
      {
        prefix: text('prefix', 'line-user', 'placeholder'),
        text: text('text', 'placeholder', 'placeholder'),
        value: '',
        disabled: true
      },
      {
        prefix: text('prefix', 'line-user', 'option 1'),
        text: text('text', 'option 1', 'option 1'),
        value: 'option 1'
      }
    ]
  } />

export default {
  title: 'InputSelect',
  decorators: [withKnobs, withInfo],
  component: InputSelect,
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
        ~~~

        the basicest component form is: 

        ~~~js
        <InputSelect current="" onSelected={} options=[] />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};