import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Grid } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';

const propsDescriptions = {
  variant: {
    propType: 'string',
    description: 'This Could be any html tag'
  },
  sm: {
    propType: 'number',
    description: 'column long'
  },
  md: {
    propType: 'number',
    description: 'column long'
  },
  lg: {
    propType: 'number',
    description: 'column long'
  },
  xl: {
    propType: 'number',
    description: 'column long'
  },
  row: {
    propType: 'bool',
    description: 'Show a variant of the input'
  },
  onClick: {
    propType: 'function',
    description: 'Any function that is going to be tregger'
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

export const Row = () => {
  return <Grid row>
    lorem
  </Grid>
};

export default {
  title: 'Grid',
  decorators: [withKnobs, withInfo],
  component: Grid,
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
        This component will fill as much screen as possible, it should containt into it the grid colums
        
        
        &nbsp;

        
        include into your project to be able to use the component styles
        ~~~js
        import 'design-system-coopeuch/dist/index.css';
        import { Grid }from 'design-system-coopeuch';
        ~~~

        the basicest component form is: 

        ~~~js
        <Grid row > content </Grid>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};