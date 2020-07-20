import React from 'react'
import PropTypes from 'prop-types'

const DBlackCard = ({
  width,
  cardTitle,
  cardType,
  owner,
  state,
  cardNumber,
  ...props
}) => {
  const blackCardSvg = (
    <svg width={width} height='100%' viewBox='0 0 385 209' version='1.1'>
      <title>Atomo Tarjetas bancarias desktop black</title>
      <defs>
        <path
          d='M7,1.27329258e-12 L378,1.27329258e-12 C381.865993,1.27258241e-12 385,3.13400675 385,7 L385,201.140625 C385,205.006618 381.865993,208.140625 378,208.140625 L7,208.140625 C3.13400675,208.140625 4.73447626e-16,205.006618 0,201.140625 L0,7 C-4.73447626e-16,3.13400675 3.13400675,1.27400275e-12 7,1.27329258e-12 Z'
          id='path-1'
        />
        <filter
          x='-3.1%'
          y='-4.3%'
          width='106.2%'
          height='111.5%'
          filterUnits='objectBoundingBox'
          id='filter-3'
        >
          <feOffset
            dx='0'
            dy='3'
            in='SourceAlpha'
            result='shadowOffsetOuter1'
          />
          <feGaussianBlur
            stdDeviation='3.5'
            in='shadowOffsetOuter1'
            result='shadowBlurOuter1'
          />
          <feColorMatrix
            values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.27 0'
            type='matrix'
            in='shadowBlurOuter1'
          />
        </filter>
      </defs>
      <g
        id='01.Atomo/Tarjetas-bancarias/desktop/black'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
      >
        <g id='Tarjetas-bancarias'>
          <g id='Group-7'>
            <g id='Fill-110' transform='translate(0.000000, -0.000002)'>
              <mask id='mask-2' fill='white'>
                <use xlinkHref='#path-1' />
              </mask>
              <g id='Mask' fillRule='nonzero'>
                <use
                  fill='black'
                  fillOpacity='1'
                  filter='url(#filter-3)'
                  xlinkHref='#path-1'
                />
                <use fill='#384450' xlinkHref='#path-1' />
              </g>
            </g>
            <path
              d='M182.118192,104.264922 C171.091374,140.33202 168.155945,174.84825 173.211507,208.141997 L7,208.141626 C3.13400675,208.141626 4.73447626e-16,205.007619 0,201.141626 L0,7.00100093 C-4.73447626e-16,3.13500768 3.13400675,0.00100093141 7,0.00100093141 L246.062339,1.54543045e-13 C216.442303,26.958135 195.185785,61.5227514 182.118192,104.264922 Z M385.000429,51.8656192 L385,201.141626 C385,205.007619 381.865993,208.141626 378,208.141626 L284.517433,208.141843 C277.39631,185.482157 277.572763,161.204714 285.333355,135.820963 C300.689719,85.5925578 339.715166,54.7558951 385.000429,51.8656192 Z'
              id='Combined-Shape'
              fillOpacity='0.88'
              fill='#FFFFFF'
              fillRule='nonzero'
              opacity='0.0834495908'
            />
            <g id='Group-63' transform='translate(317.625000, 19.250000)'>
              <circle
                id='Oval'
                fill='#D33331'
                cx='14.7853916'
                cy='14.7853916'
                r='14.7853916'
              />
              <circle
                id='Oval'
                fill='#E9A03D'
                cx='33.3396084'
                cy='14.7853916'
                r='14.7853916'
              />
              <path
                d='M24.063615,3.27290269 C27.4223698,5.98322887 29.5707831,10.1334158 29.5707831,14.7853916 C29.5707831,19.4378285 27.4219438,23.5883771 24.0626161,26.2986865 C20.7026302,23.5875543 18.5542169,19.4373673 18.5542169,14.7853916 C18.5542169,10.1790732 20.6606655,6.06474217 23.962841,3.3531203 Z'
                id='Combined-Shape'
                fill='#D96035'
              />
            </g>
          </g>
          <rect
            id='Rectangle'
            fill='#F6F3F5'
            opacity='0.377092634'
            x='24'
            y='56'
            width='72'
            height='32'
            rx='5'
          />
          <text
            id='nombre-tarjeta'
            fontFamily='Ubuntu-Regular, Ubuntu'
            fontSize='16'
            fontWeight='normal'
            line-spacing='24'
            fill='#FFFFFF'
          >
            <tspan x='24' y='43'>
              {cardTitle}
            </tspan>
          </text>
          <text
            id='tipo'
            fontFamily='Ubuntu-Regular, Ubuntu'
            fontSize='16'
            fontWeight='normal'
            line-spacing='24'
            fill='#FFFFFF'
          >
            <tspan x='37' y='75'>
              {cardType}
            </tspan>
          </text>
          <text
            id='nombre'
            fontFamily='Ubuntu-Regular, Ubuntu'
            fontSize='16'
            fontWeight='normal'
            line-spacing='24'
            fill='#FFFFFF'
          >
            <tspan x='106' y='75'>
              {owner}
            </tspan>
          </text>
          <text
            id='numero-tarjeta'
            fontFamily='Ubuntu-Regular, Ubuntu'
            fontSize='16'
            fontWeight='normal'
            line-spacing='24'
            fill='#FFFFFF'
          >
            <tspan x='106' y='99'>
              {cardNumber}
            </tspan>
          </text>
          <text
            id='estado'
            fontFamily='Ubuntu-Regular, Ubuntu'
            fontSize='16'
            fontWeight='normal'
            line-spacing='24'
            fill='#FFFFFF'
          >
            <tspan x='106' y='123'>
              Estado: {state}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  )

  return <React.Fragment>{blackCardSvg}</React.Fragment>
}

export default DBlackCard

DBlackCard.defaultProps = {
  width: '385',
  cardTitle: '',
  cardType: 'debit',
  owner: '',
  state: 'Active',
  cardNumber: ''
}

DBlackCard.propTypes = {
  width: PropTypes.string,
  cardTitle: PropTypes.string,
  cardType: PropTypes.string,
  owner: PropTypes.string,
  state: PropTypes.string,
  cardNumber: PropTypes.string,
  forceDesktop: PropTypes.bool
}
