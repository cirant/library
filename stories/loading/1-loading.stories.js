import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';
import { Loading } from '../../dist';
import '../../dist/index.css';

const propsDescriptions = {
  dark: {
    propType: 'bool',
    description: 'define the loading theme'
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

export default {
  title: 'Loading',
  decorators: [withInfo],
  component: Loading,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          margin: '0px 40px 0px',
          textAlign: 'center',
          backgroundColor: '#e8e8e8'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { Loading } from 'library';
        ~~~

        the basicest component form is: 

        ~~~js
        <Loading />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};

export const element = () => <Loading dark={boolean('dark', false)} />;

element.story = {
  name: 'Loading component',
};
