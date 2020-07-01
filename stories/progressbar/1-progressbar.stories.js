import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { boolean, text } from '@storybook/addon-knobs';
import { ProgressBar } from '../../dist';
import '../../dist/index.css';

const propsDescriptions = {
  label: {
    propType: 'string',
    description: 'This will show this value above the progress bar'
  },
  assistText: {
    propType: 'string',
    description: 'This will show this value below the progress bar'
  },
  progress: {
    propType: 'string',
    description: 'This will set the percentage of the progress bar'
  },
  percent: {
    propType: 'bool',
    description: 'This will show the actual percentage below the progress bar'
  },
  reverse: {
    propType: 'bool',
    description: 'This will switch the position of the percentage and assistText'
  },
  helperAlign: {
    propType: 'bool',
    description: 'Define the loading theme'
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
  title: 'ProgressBar',
  decorators: [withInfo],
  component: ProgressBar,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          margin: '0px 40px 0px',
          textAlign: 'center',
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        import { ProgressBar } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <ProgressBar progress={25} />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};

export const element = () => <ProgressBar
  assistText={text('assistText', '')}
  label={text('label', '')}
  percent={boolean('show percent', false)}
  reverse={boolean('reverse', false)}
  progress={text('progress', 25)}
/>;

export const multiple = () => <ProgressBar
  assistText={text('assistText', '', 'commons')}
  label={[
    {
      label: text('label', 'label', 'label 1'),
      text: text('text ', '$10.000.000', 'label 1')
    },
    {
      label: text('label', 'monto', 'label 2'),
      text: text('text', '$20.000.000', 'label 2')
    }
  ]}
  percent={boolean('show percent', false, 'commons')}
  reverse={boolean('reverse', false, 'commons')}
  progress={text('progress', 25, 'commons')}
/>;

multiple.story = {
  name: 'ProgressBar component multiple label',
}

element.story = {
  name: 'ProgressBar component',
};
