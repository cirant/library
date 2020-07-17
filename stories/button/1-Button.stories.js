import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../../dist';
import '../../dist/index.css';

const propsDescriptions = {
  prefix: {
    propType: 'string',
    description: 'Must be a valid icon name'
  },
  suffix: {
    propType: 'string',
    description: 'Must be a valid icon name'
  },
  color: {
    propType: 'string',
    description: 'Define the button color. It could be either "primary" or "secondary"'
  },
  variant: {
    propType: 'string',
    description: 'Define the button variant. It could be either "outline" or "text"'
  },
  onClick: {
    propType: 'function',
    description: 'This function will be called when the button is pressed'
  },
  disabled: {
    propType: 'bool',
    description: 'Controle the button state, if it\'s true the button won\'t be no available'
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

const colors = ['primary', 'secondary'];

export const Normal = () => <Button
  color={select('color', colors, 'primary')}
  disabled={boolean('disabled', false)}
  prefix={!boolean('prefix Icon', false) ? null : 'home'}
  suffix={!boolean('suffix Icon', false) ? null : 'cloud'}
  onClick={action('clicked')} >
  {text("children", "lorem")}
</Button>;

export const Outline = () => <Button
  variant="outline"
  color={select('color', colors, 'primary')}
  disabled={boolean('disabled', false)}
  prefix={!boolean('prefix Icon', false) ? null : 'home'}
  suffix={!boolean('suffix Icon', false) ? null : 'cloud'}
  onClick={action('clicked')}
> {text("children", "lorem")}
</Button>;

export const Text = () => <Button
  variant="text"
  color={select('color', colors, 'primary')}
  disabled={boolean('disabled', false)}
  prefix={!boolean('prefix Icon', false) ? null : 'arrow-left'}
  suffix={!boolean('suffix Icon', false) ? null : 'arrow-right'}
  onClick={action('clicked')} >
  {text("children", "lorem")}
</Button>;


export default {
  title: 'Button',
  decorators: [withKnobs, withInfo],
  component: Button,
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
        import { Button } from 'design-system-coopeuch';
        ~~~

        the basicest component form is: 

        ~~~js
        <Button color="primary"> some text </Button>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};