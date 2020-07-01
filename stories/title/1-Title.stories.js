import React from 'react';
import {withKnobs} from '@storybook/addon-knobs/react';
import {select, text} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import '../codeStyles.css';
import '../../dist/index.css';
import {TitleSection} from '../../dist';
import list from "../icons/list";

const propsDescriptions = {
  label: {
    propType: 'string',
    description: 'Add a text to the title section'
  },
  prefix: {
    propType: 'string',
    description: 'Add an icon to the title section'
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

export const TitleSectionComponent = () =>
    <TitleSection
      label={text('label', 'Title Section')}
      prefix={select('selected', list)}>
    </TitleSection>;


export default {
  title: 'Title Section',
  decorators: [withKnobs, withInfo],
  component: TitleSection,
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
        import { Title } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <TitleSection> </TitleSection>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};
