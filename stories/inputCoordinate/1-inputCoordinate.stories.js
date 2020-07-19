import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { text, object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { InputCoordinate, Input } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css'

const propsDescriptions = {
    assistText: {
      propType: 'string / array',
      description: 'This will show this value below the field'
    },
    label: {
      propType: 'string',
      description: 'This will show this value above the field'
    },
    assistText: {
      propType: 'string',
      description: 'This will show this value below the field'
    },
    maxLength: {
      propType: 'string',
      description:
        'This will defined the input max length and will show a counter below the field'
    },
    type: {
      propType: 'string',
      description: 'accept just to values either text or password'
    },
    error: {
      propType: 'bool',
      description: "input status, if it's true the input border will be green"
    },
    success: {
      propType: 'bool',
      description: "input status, if it's true the input border will be green"
    },
    prefix: {
      propType: 'string / jsx',
      description:
        'This element goes before text, it could be an string or an element like a icon but with a max-width of 16px'
    },
    suffix: {
      propType: 'string / jsx',
      description:
        'This element goes after text, it could be an string or an element like a icon but with a max-width of 20px'
    },
    variant: {
      propType: 'string',
      description: 'This accept text or textarea as a value'
    },
    disabled: {
      propType: 'bool',
      description: ''
    },
    onChange: {
      propType: 'function',
      description: 'This function will return a new value entered into the input'
    }
};

const Red = (props) => (
    <span style={{ color: 'red' }} {...props}>
      *
    </span>
)

const TableComponent = ({ propDefinitions, ...propsx }) => {
    const propsMixeds = propDefinitions.map((el) => ({
      ...el,
      ...propsDescriptions[el.property]
    }))
  
    const props = propsMixeds.map(
      ({ property, required, propType, defaultValue, description }) => {
        return (
          <tr key={property}>
            <td>
              {property}
              {required && <Red />}
            </td>
            <td>{propType}</td>
            <td>{defaultValue !== undefined ? `${defaultValue}` : ' - '}</td>
            <td>{description}</td>
          </tr>
        )
      }
    )
  
    return (
      <table
        style={{
          width: '100%'
        }}
        {...propsx}
      >
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>{props}</tbody>
      </table>
    )
}

export const inputCoordinate = () => (
<div className="d-flex">
    <div className="col-lg-4 col-md-9 col-sm-4">
      <InputCoordinate 
          assistText={[
            object(
              'message-1',
              {type: 'assist', text: 'Texto de asistencia'},
              'assistText'
            ),
            object(
              'message-2',
              {type: 'success', text: 'Texto éxito'},
              'assistText'
            ),
            object(
              'message-3',
              {type: 'error', text: 'Texto error'},
              'assistText'
            )
          ]}
      >
          <Input 
              placeholder={text('placeholder', '**', 'Input 1')}
              type={'password'} 
              label={text('label', 'A1', 'Input 1')}
              value={text('value', '', 'Input 1')}
              onChange={action('onChange action')}
          />
          <Input
              placeholder={text('placeholder', '**', 'Input 2')}
              type={'password'} 
              label={text('label', 'B2', 'Input 2')} 
              value={text('value', '', 'Input 2')}
              onChange={action('onChange action')}
          />
          <Input 
              placeholder={text('placeholder', '**', 'Input 3')}
              type={'password'} 
              label={text('label', 'C3', 'Input 3')}
              value={text('value', '', 'Input 3')}
              onChange={action('onChange action')}
          />
      </InputCoordinate>
    </div>
</div>
)

export default {
    title: 'Input Coordinate',
    decorators: [withKnobs, withInfo],
    component: InputCoordinate,
    parameters: {
      info: {
        inline: true,
        TableComponent,
        styles: {
          infoStory: {
            padding: '0px 45px',
            margin: '10px 0'
          }
        },
        text: `
          include into your project to be able to use the component styles
          ~~~js
          import 'design-system-coopeuch/dist/index.css';
          import { InputCoordinate, Input  } from 'design-system-coopeuch';
          ~~~
  
          the basicest component form is:
  
          ~~~js
          <InputCoordinate assistText={[]}>
            <Input maxLength={'2'} type={'password'} />
            <Input maxLength={'2'} type={'password'} />
            <Input maxLength={'2'} type={'password'} />
          </InputCoordinate>
          ~~~
  
         the object into array should have look like the shown below
          ~~~js
          [
                {
                  type:'Some title',
                  text:'Some content'
                },
                {
                  type:'Some title',
                  text:'Some content'
                }
          ]
          ~~~
  
          change the knobs properties and you'll be able to watch its component structure below at Story Source
        `
      }
    }
}