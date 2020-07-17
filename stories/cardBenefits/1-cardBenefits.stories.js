import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { CardBenefits, Icon } from '../../dist';
import iconList from '../icons/list';
import '../../dist/index.css';

const propsDescriptions = {
  title: {
    propType: 'string',
    description: 'main text to be shown'
  },
  topText: {
    propType: 'string',
    description: 'text to be shown in top section'
  },
  description: {
    propType: 'string',
    description: 'text to be shown in bottom section'
  },
  image: {
    propType: 'string',
    description: 'image to be shown as background'
  },
  logo: {
    propType: 'string / icon',
    description: 'should be a text or a valid Icon'
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

export const simple = () => <CardBenefits
  topText={text('topText', 'Top content')}
  title={text('title', 'Title content')}
  description={text('title', 'Description content')}
  image={text('footerTitle', 'https://www.bizneo.com/blog/wp-content/uploads/2019/12/global-benefits-810x455.jpg')}
  logo={<Icon name={select('logo', iconList, 'line-home')} />}
/>;


export default {
  title: 'CardBenefits',
  decorators: [withKnobs, withInfo],
  component: CardBenefits,
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
        import { CardBenefits }from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <CardBenefits />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};
