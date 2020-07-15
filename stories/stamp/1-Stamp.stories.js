import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { number } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';
import '../codeStyles.css';
import '../../dist/index.css';
import { Stamp } from '../../dist';

const propsDescriptions = {
  width: {
    propType: 'string',
    description: 'Add width to the svg'
  },
  height: {
    propType: 'string',
    description: 'Add height to the svg'
  },
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
  <Stamp
    width={number('width', '170')}
    height={number('height', '168')}
  >

  </Stamp>
)



export default {
  title: 'Stamp',
  decorators: [withKnobs, withInfo],
  component: Stamp,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 40px 0px',
          margin: '10px 0'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'design-system-coopeuch/dist/index.css';
        import { Stamp }from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <Stamp> </Stamp>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};
