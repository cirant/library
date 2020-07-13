import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { text, object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { InputDate } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';
import '../../dist/css/date.css';

const propsDescriptions = {
    format: {
        propType: 'string',
        description: 'This will show this value above the field'
    },
    minimumDate: {
      propType: 'string',
      description: 'Days before minimumDate'
    },
    maximumDate: {
      propType: 'string',
      description: 'Days after maximumDate'
    },
    onStartDateChange: {
      propType: 'function',
      description: 'this is a function which is triggered when the icon is clicked'
    },
    onEndDateChange: {
      propType: 'function',
      description: 'this is a function which is triggered when the icon is clicked'
    },
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

export const inputDate = () => <InputDate
  format={text('value', 'dd/MM/yyyy', 'text')}
  minimumDate={text('minimumDate', '', 'text')}
  maximumDate={text('maximumDate', '', 'text')}
  onStartDateChange={action('clicked')}
  onEndDateChange={action('clicked')}
/>;

export default {
  title: 'InputDate',
  decorators: [withKnobs, withInfo],
  component: InputDate,
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
        import { InputDate } from 'library';
        ~~~

        the basicest component form is: 

        ~~~js
        <InputDate value={someValue} onStartDateChange={()=>null} onEndDateChange={()=>null} />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};