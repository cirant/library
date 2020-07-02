import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { InputPhone } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';
import propsDescriptions from './_commonsProps';

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

export const Simple = () => <InputPhone
  assistText={text('assistText', '', 'optional')}
  success={boolean('success', false, 'status')}
  error={boolean('error', false, 'status')}
  disabled={boolean('disabled', false, 'status')}
  value={text('value', '', 'text')}
  code={text('code', '56', 'text')}
  placeholder={text('placeholder', '', 'optional')}
  label={text('label', '', 'optional')}
  onCodeChange={action('code changed')}
/>;

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
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import {InputPhone} from 'library';
        ~~~

        the basicest component form is: 

        ~~~js
        <InputPhone value={someValue} onChange={()=>null} />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};