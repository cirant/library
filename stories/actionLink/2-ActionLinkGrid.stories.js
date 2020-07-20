import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { ActionLink,Grid } from '../../dist'
import '../codeStyles.css'
import '../../dist/index.css'

const propsDescriptions = {
  icon: {
    propType: 'string',
    description: 'Add an icon to the action link component'
  },
  label: {
    propType: 'string',
    description: 'Label of the action link component'
  },
  onClick: {
    propType: 'function',
    description:
      'This function will be called when the action component link is pressed'
  },
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
}

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
      console.log(defaultValue)

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

export const ActionLinkWithGrid = () => (
  <Grid row>
    <Grid col={6} sm={6} md={4} lg={4} xl={4}> <ActionLink icon='line-unlock' label='Lock'/> </Grid>
    <Grid col={6} sm={6} md={4} lg={4} xl={4}> <ActionLink icon='line-unlock' label='Lock'/></Grid>
    <Grid col={6} sm={6} md={4} lg={4} xl={4}> <ActionLink icon='line-unlock' label='Lock'/></Grid>
    <Grid col={6} sm={6} md={4} lg={4} xl={4}> <ActionLink icon='line-unlock' label='Lock'/> </Grid>
    <Grid col={6} sm={6} md={4} lg={4} xl={4}> <ActionLink icon='line-unlock' label='Lock'/> </Grid>
    <Grid col={6} sm={6} md={4} lg={4} xl={4}> <ActionLink icon='line-unlock' label='Lock'/> </Grid>
  </Grid>

)

export default {
  title: 'Action Link',
  decorators: [withKnobs, withInfo],
  component: [ActionLink,Grid],
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 40px 0px'
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'design-system-coopeuch/dist/index.css';
        import { ActionLink, Grid } from 'design-system-coopeuch';
        ~~~

        the basicest component form is:

        ~~~js
        <ActionLink />
        ~~~
        If you need more information about Action Link Component please go to the proper history [ActionLink](/?path=/story/action-link--action-link-with-grid).
        If you need more information about Grid Component please go to the proper history [Grid](/?path=/story/grid--to-storybook)
      `
    }
  }
}
