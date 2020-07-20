import React from 'react';
import { object, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { PublicFooter, PublicFooterColumn, PublicFooterItem, Logo } from '../../dist';
import '../../dist/css/custom.css';

const propsDescriptions = {
    logo: {
      propType: 'Element',
      description: 'it could be an img or logo to be shown in the left side'
    }
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }))

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

export const publicFooter = () => (
<div className="bg-primary w-100">
    <div className="container my-4">
    <PublicFooter logo={<Logo className="w-100" />}>
        <PublicFooterColumn title={text('Column title', 'Productos', 'Column menu 1')}>
            <PublicFooterItem link={text('Url link 1', 'http://www.coopeuch.cl', 'Column menu 1')}>{text('Text link 1', 'Cuenta Coopeuch', 'Column menu 1')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 2', 'http://www.coopeuch.cl', 'Column menu 1')}>{text('Text link 2', 'Monedero Digital Coopeuch', 'Column menu 1')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 3', 'http://www.coopeuch.cl', 'Column menu 1')}>{text('Text link 3', 'Cuentas de Ahorro', 'Column menu 1')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 4', 'http://www.coopeuch.cl', 'Column menu 1')}>{text('Text link 4', 'Créditos', 'Column menu 1')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 5', 'http://www.coopeuch.cl', 'Column menu 1')}>{text('Text link 5', 'Crédito Hipotecario', 'Column menu 1')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 6', '', 'Column menu 1')}>{text('Text link 6', 'Tarjeta Mastercard', 'Column menu 1')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 7', 'http://www.coopeuch.cl', 'Column menu 1')}>{text('Text link 7', 'Cuota de Participación', 'Column menu 1')}</PublicFooterItem>
        </PublicFooterColumn>   
        <PublicFooterColumn title={text('title', 'Beneficios', 'Column menu 2')}>
            <PublicFooterItem link={text('Url link 1', 'http://www.coopeuch.cl', 'Column menu 2')}>{text('Text link 1', 'Becas Fundación Coopeuch', 'Column menu 2')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 2', 'http://www.coopeuch.cl', 'Column menu 2')}>{text('Text link 2', 'Bonos de Estudio', 'Column menu 2')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 3', 'http://www.coopeuch.cl', 'Column menu 2')}>{text('Text link 3', 'Club +60', 'Column menu 2')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 4', 'http://www.coopeuch.cl', 'Column menu 2')}>{text('Text link 4', 'Sembrando Cultura', 'Column menu 2')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 5', 'http://www.coopeuch.cl', 'Column menu 2')}>{text('Text link 5', 'Remanente', 'Column menu 2')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 6', 'http://www.coopeuch.cl', 'Column menu 2')}>{text('Text link 6', 'Descuento de Comercio', 'Column menu 2')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 7', 'http://www.coopeuch.cl', 'Column menu 2')}>{text('Text link 7', 'Cátalogo de productos SUMA', 'Column menu 2')}</PublicFooterItem>
        </PublicFooterColumn>
        <PublicFooterColumn title={text('title', 'Institucional', 'Column menu 3')}>
            <PublicFooterItem link={text('Url link 1', '', 'Column menu 3')}>{text('Text link 1', 'Memoria 2019', 'Column menu 3')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 2', '', 'Column menu 3')}>{text('Text link 2', 'Qué es ser socio', 'Column menu 3')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 3', '', 'Column menu 3')}>{text('Text link 3', 'Quienes Somos', 'Column menu 3')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 4', '', 'Column menu 3')}>{text('Text link 4', 'Hazte Socio', 'Column menu 3')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 5', '', 'Column menu 3')}>{text('Text link 5', 'Estados financieros', 'Column menu 3')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 6', '', 'Column menu 3')}>{text('Text link 6', 'Investor Relations', 'Column menu 3')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 7', '', 'Column menu 3')}>{text('Text link 7', 'Fundación Coopeuch', 'Column menu 3')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 8', '', 'Column menu 3')}>{text('Text link 8', 'Noticias', 'Column menu 3')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 9', '', 'Column menu 3')}>{text('Text link 9', 'Revista Conversemos', 'Column menu 3')}</PublicFooterItem>
        </PublicFooterColumn>
        <PublicFooterColumn title={text('title', 'Tarifas', 'Column menu 4')}>
            <PublicFooterItem link={text('Url link 1', '', 'Column menu 4')}>{text('Text link 1', 'Garantía Estatal de Depósitos CMF', 'Column menu 4')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 2', '', 'Column menu 4')}>{text('Text link 2', 'Tasas y Comisiones 2020', 'Column menu 4')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 3', '', 'Column menu 4')}>{text('Text link 3', 'Políticas De Privacidad', 'Column menu 4')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 4', '', 'Column menu 4')}>{text('Text link 4', 'Terminos de Uso', 'Column menu 4')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 5', '', 'Column menu 4')}>{text('Text link 5', 'Gastos de Cobranza 2020', 'Column menu 4')}</PublicFooterItem>
            <PublicFooterItem link={text('Url link 6', '', 'Column menu 4')}>{text('Text link 6', 'Tasas de interés anual Cuentas de Ahorro', 'Column menu 4')}</PublicFooterItem>
        </PublicFooterColumn>
    </PublicFooter>
    </div>
</div>
)

export default {
    title: 'PublicFooter',
    decorators: [withInfo],
    component: PublicFooter,
    parameters: {
      info: {
        inline: true,
        TableComponent,
        styles: {
          infoStory: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            alignSelf: 'start',
            padding: '0px 40px 0px',
          }
        },
        text: `
          include into your project to be able to use the component styles
          ~~~js
          import 'library/dist/index.css';
          import { PublicFooter, PublicFooterColumn, PublicFooterItem, Logo } from 'library';
          import 'library/dist/css/custom.css';
          ~~~
  
          the basicest component form is:
  
          ~~~js
            <PublicFooter logo={<Logo className="w-100" />}>
                  <PublicFooterColumn title={'Productos'}>
                      <PublicFooterItem link={'http://www.coopeuch.cl'} subItems={[
                          {
                            text: 'condiciones generales de contratación',
                            link: 'url'
                          }
                      ]}>Cuenta Coopeuch</PublicFooterItem>
                  </PublicFooterColumn>
            </<PublicFooter>
          ~~~

          the object into array 'subItems' should have look like the shown below
          ~~~js
          {[
            {
              text: 'condiciones generales de contratación',
              link: 'url'
            },
            {
              text: 'condiciones generales de contratación',
              link: 'url'
            }
          ]}
          ~~~
  
          change the knobs properties and you'll be able to watch its component structure below at Story Source
        `
      }
    }
}