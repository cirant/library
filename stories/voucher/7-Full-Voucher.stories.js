import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import '../codeStyles.css'
import '../../dist/index.css'
import { Voucher } from '../../dist'
import { VoucherTitle } from '../../dist'
import { VoucherData } from '../../dist'
import { VoucherColumnData } from '../../dist'
import { VoucherResumeContainer } from '../../dist'
import { VoucherFooter } from '../../dist'
import propsDescriptionsVoucher from './_commonsPropsVoucher';

const propsDescriptions = {
  ...propsDescriptionsVoucher
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>

const TableComponent = ({ propDefinitions, ...propsx }) => {

  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }))

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {

      return (
        <tr key={property}>
          <td>{property}
            {required && <Red/>}
          </td>
          <td>{propType}</td>
          <td>{defaultValue !== undefined ? `${defaultValue}` : ' - '}</td>
          <td>{description}</td>
        </tr>
      )
    }
  )

  return (
    <table style={{
      width: '100%'
    }} {...propsx} >
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

export const voucherFullComponent = () => (
  <Voucher stampdirection="bottom">
    <VoucherTitle title={"Type some text"}
                  items={[
                    [
                      {
                        label:'Plazo',
                        icon:'line-write',
                        action: ()=> console.log('plazo'),
                        flex:1
                      },
                      {
                        label:'Descargar',
                        icon:'line-download',
                        action: ()=> console.log('descargar')
                      },

                    ],
                  ]}

    />
    <VoucherResumeContainer items={[
      [
        {
          label:'Plazo',
          content:'36 meses',
          flex:1
        },
        {
          label:'Valor cuota',
          number:45000,
          currency: true,
          flex:1
        },
      ],
      [
        {
          label:'Otros costos',
          number:15000,
          currency: true,
          flex:1
        },
        {
          label:'Saldo anterior',
          number:400000,
          currency: true,
          flex:1
        },


      ],
    ]} />
    <VoucherData items={[
      {
        title:'Label titulo de sección',
        items: [
          {
            label:'Deudas:',
            content: '300.000'
          },
          {
            label:'Label Titulo:',
            content: 'Label Contenido'
          },
          {
            label:'Label Titulo:',
            content: 'Label Contenido'
          },
        ]
      },
      {
        title:'Label titulo de sección 2',
        items: [
          {
            label:'Deudas:',
            content: '300.000'
          },
          {
            label:'Label Titulo:',
            content: 'Label Contenido'
          },
          {
            label:'Label Titulo:',
            content: 'Label Contenido'
          },
        ]
      }
    ]} />
    <VoucherColumnData items={[
      {
        title:'Label title',
        content:'Label content'
      },
      {
        title:'Label title',
        content:'Label content'
      },
      {
        title:'Label title',
        content:'Label content'
      },
      {
        title:'Label title',
        content:'Label content'
      },
      {
        title:'Label title',
        content:'Label content'
      },
      {
        title:'Label title',
        content:'Label content'
      },
      {
        title:'Label title',
        content:'Label content'
      },
    ]}>
    </VoucherColumnData>
    <VoucherFooter breakColumn={5} items={{
      title:'Label titulo de sección',
      typeList: 'unorder',
      bullets: [
        {
          text: 'Order Bullet text a',
          prefixType: 'info',
          contentType: 'success'
        },
        {
          text: 'Order Bullet text a',
          prefixType: 'info',
          contentType: 'success'
        },
        {
          text: 'Order Bullet text a',
          prefixType: 'info',
          contentType: 'success'
        },
        {
          text: 'Order Bullet text a',
          prefixType: 'info',
          contentType: 'success'
        },
        {
          text: 'Order Bullet text a',
          prefixType: 'info',
          contentType: 'success'
        },
        {
          text: 'Order Bullet text a',
          prefixType: 'info',
          contentType: 'success'
        },
        {
          text: 'Order Bullet text a',
          prefixType: 'info',
          contentType: 'success'
        },
        {
          text: 'Order Bullet text a',
          prefixType: 'info',
          contentType: 'success'
        },
        {
          text: 'Order Bullet text a',
          prefixType: 'info',
          contentType: 'success'
        },
        {
          text: 'Order Bullet text a',
          prefixType: 'info',
          contentType: 'success'
        }
      ]
    }} />
  </Voucher>)

export default {
  title: 'Voucher',
  decorators: [withKnobs, withInfo],
  component: Voucher,
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
        import { Voucher } from 'library';
        ~~~

        the basicest component form is:

        ~~~js
        <Voucher> </Voucher>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
