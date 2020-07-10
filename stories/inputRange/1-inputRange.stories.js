import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo} from '@storybook/addon-info';
import { InputRange } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';
import { text } from '@storybook/addon-knobs';

const propsDescriptions = {
    label: {
        propType: 'string',
        description: 'This will show this value above the field'
    },
    value: {
        propType: 'string',
        description: 'This will show this into input'
    },
    onChange: {
        propType: 'function',
        description: 'This function will return a new value entered into the input'
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

export const inputRange = () => <InputRange
    value={text('value', '0', 'text')}
    placeholder={text('placeholder', '', 'text')}
    label={text('label', '', 'text')}
    min={text('min', '', 'text')}
    max={text('max', '', 'text')}
    step={text('step', '', 'text')}
    onChange={action('clearAction action')}
/>; 

export default {
    title: 'InputRange',
    decorators: [withKnobs, withInfo],
    component: InputRange,
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
          import { InputRange } from 'library';
          ~~~
  
          the basicest component form is: 
  
          ~~~js
          <InputRange value={someValue} onChange={()=>null} />
          ~~~
  
          change the knobs properties and you'll be able to watch its component structure below at Story Source
        `,
      },
  
    },
  };