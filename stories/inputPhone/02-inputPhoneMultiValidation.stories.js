import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { boolean, text, object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { InputPhone } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';
import _commonsProps from './_commonsProps';

const propsDescriptions = {
  ..._commonsProps,
  assistText: {
    propType: 'string / array',
    description: 'This will show this value below the field'
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

export const Multiple = () => {

  return <InputPhone
    assistText={[
      object('message-1', {
        type: 'error',
        text: 'example error text'
      }, 'assistText'),
      object('message-2', {
        type: 'success',
        text: 'example success text'
      }, 'assistText'),
      object('message-3', {
        type: 'success',
        text: 'example success text'
      }, 'assistText')
    ]}
    error={boolean('error', false, 'status')}
    success={boolean('success', false, 'status')}
    disabled={boolean('disabled', false, 'status')}
    value={text('value', '', 'text')}
    code={text('code', '', 'text')}
    placeholder={text('placeholder', '', 'text')}
    label={text('label', '', 'text')}
    code={text('code', '', 'text')}
    onCodeChange={action('code changed')}
  />
};

Multiple.story = {
  name: 'Multiple validations example',
};

export default {
  title: 'InputPhone',
  decorators: [withKnobs, withInfo],
  component: InputPhone,
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
      This is just and example about how to use the multiple validations.

      All configuration required by an input is required
      `,
    },

  },
};