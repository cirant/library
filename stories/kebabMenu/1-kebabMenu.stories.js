import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import '../codeStyles.css';
import '../../dist/index.css';
import { KebabMenu } from '../../dist';
import list from '../icons/list'

const propsDescriptions = {
  options: {
    propType: 'array',
    description: 'An array with the options to be shown'
  }
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>;

const TableComponent = ({ propDefinitions, ...propsx }) => {

  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }));

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {

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

export const StampComponent = () => (
  <KebabMenu
    options={[
      {
        icon: select('first Icon', list, 'line-search', 'icon'),
        text: text('first text', 'label one', 'text'),
        action: action('action one')
      },
      {
        icon: select('second Icon', list, 'line-search', 'icon'),
        text: text('second text', 'label two', 'text'),
        action: action('action two')
      }
    ]}
  />
)



export default {
  title: 'KebabMenu',
  decorators: [withKnobs, withInfo],
  component: KebabMenu,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          textAlign: 'end',
          padding: '0px 40px 0px',
          margin: '10px 0'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { KebabMenu } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <KebabMenu options={[]}> </Stamp>
        ~~~

        the object into array should have look like the shown below

        ~~~js
        {
          action: ()=>null, // should be a function that would be triggered on click element,
          icon: 'line-search',// should be a valid icon name,
          text: 'some text'// should be an string
        }
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};
