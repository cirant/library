import React from 'react';
import {withKnobs} from '@storybook/addon-knobs/react';
import { number } from '@storybook/addon-knobs'
import {withInfo} from '@storybook/addon-info';
import '../codeStyles.css';
import '../../dist/index.css';
import {NotificationBadge} from '../../dist';

const propsDescriptions = {
  content: {
    propType: 'number',
    description: 'Number of the notification'
  },
}

const Red = props => <span style={{color: 'red'}} {...props} >*</span>;

const TableComponent = ({propDefinitions, ...propsx}) => {

  const propsMixeds = propDefinitions.map((el) => ({...el, ...propsDescriptions[el.property]}));

  const props = propsMixeds.map(
    ({property, required, propType, defaultValue, description}) => {

      return (
        <tr key={property}>
          <td>{property}
            {required && <Red/>}
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
      <tr style={{textAlign: "left"}}>
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

export const NotificationBadgeComponent = () =>
    <NotificationBadge
      content={number('Content', 999,)}/>


export default {
  title: 'Notification Badge',
  decorators: [withKnobs, withInfo],
  component: NotificationBadge,
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
        import 'library/dist/index.css';
        import { NotificationBadge } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <NotificationBadge /> </NotificationBadge>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};
