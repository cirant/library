import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { select, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Card } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';

const propsDescriptions = {
  border: {
    propType: 'bool',
    description: 'Add a border to the card and remove the elevation'
  },
  selected: {
    propType: 'bool',
    description: 'This stand out the element if you want make it more visible'
  },
  onClick: {
    propType: 'function',
    description: 'This function will be called when the card is pressed, this also add an elevation animation'
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

export const Simple = () => <Card
  onClick={select('function', [true, false], false) ? () => alert('action') : null}
  selected={boolean('selected', false)}
  border={boolean('border', false)}
>
  lorem
</Card>;


export default {
  title: 'Card',
  decorators: [withKnobs, withInfo],
  component: Card,
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
        import { Card } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <Card> some text </Card>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};
