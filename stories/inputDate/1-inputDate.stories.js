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
  label: {
    propType: 'string',
    description: 'This will show this value above the field'
  },
  startDate: {
    propType: 'object',
    description: 'This will show this value above the field, (instance of new Date())'
  },
  endDate: {
    propType: 'object',
    description: 'This will show this value above the field (instance of new Date())'
  },
  format: {
    propType: 'string',
    description: 'This will show this value above the field (dd/MM/yyyy)'
  },
  minimumDate: {
    propType: 'string',
    description: 'Days before minimumDate will be disabled (2020/6/1)'
  },
  maximumDate: {
    propType: 'string',
    description: 'Days after maximumDate will be disabled (2020/6/31)'
  },
  onStartDateChange: {
    propType: 'function',
    description: 'This function will return a new value entered into the input'
  },
  onEndDateChange: {
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

export const inputDate = () => <InputDate
  label={text('label', '', 'text')}
  startDate={object('startDate', (new Date(2020, 6, 17)), 'object')}
  endDate={object('endDate', (new Date(2020, 6, 23)), 'object')}
  format={text('format', 'dd/MM/yyyy', 'text')}
  minimumDate={text('minimumDate', '', 'text')}
  maximumDate={text('maximumDate', '', 'text')}
  onStartDateChange={action('onStartDateChange action')}
  onEndDateChange={action('onEndDateChange action')}
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
        import 'design-system-coopeuch/dist/index.css';
        import { InputDate }from 'design-system-coopeuch';
        ~~~

        the basicest component form is: 

        ~~~js
        <InputDate onStartDateChange={()=>null} onEndDateChange={()=>null}/>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};