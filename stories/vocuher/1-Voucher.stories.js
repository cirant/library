import React from 'react'
import { withInfo } from '@storybook/addon-info'
import '../../dist/index.css'
import Voucher from '../../dist'
import VoucherData from '../../dist'
import VoucherColumnData from '../../dist'
import VoucherFooter from '../../dist'
import VoucherResumeContainer from '../../dist'
import VoucherTitle from '../../dist'

const propsDescriptions = {
  stampdirection: {
    propType: 'string',
    description: 'position of the stamp in the card'
  },
  children: {
    propType: 'node',
    description: 'many nodes who are part of the voucher componenet'
  }
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }))

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {
      console.log(defaultValue)

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

const colors = ['primary', 'secondary']

export const VoucherComponent = () => (
  <Voucher stampdirection="bottom">
    <VoucherTitle title={'Type some text'}
                  items={[
                    [
                      {
                        label: 'Plazo',
                        icon: 'line-write',
                        action: () => console.log('plazo'),
                        flex: 1
                      },
                      {
                        label: 'Descargar',
                        icon: 'line-download',
                        action: () => console.log('descargar')
                      }

                    ]
                  ]}

    ></VoucherTitle>
    <VoucherResumeContainer items={[
      [
        {
          label: 'Plazo',
          content: '36 meses',
          flex: 1
        },
        {
          label: 'Valor cuota',
          number: 45000,
          currency: true,
          flex: 1
        }
      ],
      [
        {
          label: 'Otros costos',
          number: 15000,
          currency: true,
          flex: 1
        },
        {
          label: 'Saldo anterior',
          number: 400000,
          currency: true,
          flex: 1
        }


      ]
    ]}
    >
    </VoucherResumeContainer>
    <VoucherData items={[
      {
        title: 'Label titulo de sección',
        items: [
          {
            label: 'Deudas:',
            content: '300.000'
          },
          {
            label: 'Label Titulo:',
            content: 'Label Contenido'
          },
          {
            label: 'Label Titulo:',
            content: 'Label Contenido'
          }
        ]
      },
      {
        title: 'Label titulo de sección 2',
        items: [
          {
            label: 'Deudas:',
            content: '300.000'
          },
          {
            label: 'Label Titulo:',
            content: 'Label Contenido'
          },
          {
            label: 'Label Titulo:',
            content: 'Label Contenido'
          }
        ]
      }
    ]}>
    </VoucherData>
    <VoucherColumnData items={[
      {
        title: 'Label title',
        content: 'Label content'
      },
      {
        title: 'Label title',
        content: 'Label content'
      },
      {
        title: 'Label title',
        content: 'Label content'
      },
      {
        title: 'Label title',
        content: 'Label content'
      },
      {
        title: 'Label title',
        content: 'Label content'
      },
      {
        title: 'Label title',
        content: 'Label content'
      },
      {
        title: 'Label title',
        content: 'Label content'
      }
    ]}>
    </VoucherColumnData>
    <VoucherFooter breakColumn={3} items={{
      title: 'Label titulo de sección',
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
    }}>

    </VoucherFooter>
  </Voucher>
)

export default {
  title: 'Voucher',
  decorators: [withInfo],
  component: [Voucher,VoucherColumnData,VoucherData,VoucherResumeContainer,VoucherFooter,VoucherTitle],
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
        import 'library/dist/index.css';
        import { Voucher, VoucherTitle, VoucherResumeContainer, VoucherData, VoucherColumnData, VoucherFooter } from 'library';
        ~~~

        A way to generate this component is:

        ~~~js
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

            ></VoucherTitle>
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
            ]}
            >
            </VoucherResumeContainer>
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
            ]}>
            </VoucherData>
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
            <VoucherFooter breakColumn={3} items={{
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
            }}>

            </VoucherFooter>
          </Voucher>
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `
    }

  }
}
