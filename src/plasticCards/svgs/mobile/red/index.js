import React from 'react'
import PropTypes from 'prop-types'

const MRedCard = ({
  width,
  height,
  cardTitle,
  cardType,
  owner,
  state,
  cardNumber,
  ...props
}) => {
  const redCardSvg = (
    <svg width='275px' height='149px' viewBox='0 0 275 149' version='1.1'>
      <title>Atomo Tarjetas bancarias mobile red</title>
      <defs>
        <path
          d='M5,9.09494702e-13 L270,9.09494702e-13 C272.761424,9.08987436e-13 275,2.23857625 275,5 L275,143.671875 C275,146.433299 272.761424,148.671875 270,148.671875 L5,148.671875 C2.23857625,148.671875 3.38176876e-16,146.433299 0,143.671875 L0,5 C-3.38176876e-16,2.23857625 2.23857625,9.10001967e-13 5,9.09494702e-13 Z'
          id='path-1'
        />
        <filter
          x='-3.1%'
          y='-4.4%'
          width='106.2%'
          height='111.4%'
          filterUnits='objectBoundingBox'
          id='filter-3'
        >
          <feOffset
            dx='0'
            dy='2'
            in='SourceAlpha'
            result='shadowOffsetOuter1'
          />
          <feGaussianBlur
            stdDeviation='2.5'
            in='shadowOffsetOuter1'
            result='shadowBlurOuter1'
          />
          <feComposite
            in='shadowBlurOuter1'
            in2='SourceAlpha'
            operator='out'
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
        id='01.Atomo/Tarjetas-bancarias/mobile/red'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
      >
        <g id='Tarjetas-bancarias'>
          <g id='Group-7'>
            <g id='Fill-110' transform='translate(0.000000, -0.000001)'>
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
                <use fillOpacity='0.88' fill='#F42534' xlinkHref='#path-1' />
              </g>
            </g>
            <path
              d='M130.084423,74.4742291 C122.208141,100.236387 120.111398,124.890787 123.722482,148.671988 L5,148.671875 C2.23857625,148.671875 3.38176876e-16,146.433299 0,143.671875 L0,5 C-3.38176876e-16,2.23857625 2.23857625,1.18000821e-12 5,1.17950094e-12 L175.759159,-0.00102936258 C154.60181,19.254827 139.418469,43.9439413 130.084423,74.4742291 Z M275.000472,37.0461454 L275,143.671875 C275,146.433299 272.761424,148.671875 270,148.671875 L203.226551,148.671436 C198.140225,132.486115 198.266327,115.145288 203.809539,97.0142589 C214.77839,61.1367651 242.653785,39.1105635 275.000472,37.0461454 Z'
              id='Combined-Shape'
              fillOpacity='0.88'
              fill='#FFFFFF'
              fillRule='nonzero'
              opacity='0.0834495908'
            />
            <g id='Group-63' transform='translate(226.875000, 13.750000)'>
              <circle
                id='Oval'
                fill='#D33331'
                cx='10.560994'
                cy='10.560994'
                r='10.560994'
              />
              <circle
                id='Oval'
                fill='#E9A03D'
                cx='23.814006'
                cy='10.560994'
                r='10.560994'
              />
              <path
                d='M17.1880686,2.33760381 C19.5873098,4.27354725 21.121988,7.23804898 21.121988,10.560994 C21.121988,13.883939 19.5873098,16.8484407 17.1880686,18.7843841 C14.7876902,16.8484407 13.253012,13.883939 13.253012,10.560994 C13.253012,7.30999429 14.7219547,4.40208454 17.0323156,2.46478921 Z'
                id='Combined-Shape'
                fill='#D96035'
              />
            </g>
          </g>
          <text
            id='nombre-tarjeta'
            fontFamily='Ubuntu-Regular, Ubuntu'
            fontSize='14'
            fontWeight='normal'
            line-spacing='20'
            fill='#FFFFFF'
          >
            <tspan x='16' y='31'>
              {cardTitle}
            </tspan>
          </text>
          <rect
            id='Rectangle'
            fill='#F6F3F5'
            opacity='0.32421875'
            x='16'
            y='44'
            width='75'
            height='24'
            rx='5'
          />
          <text
            id='tipo'
            fontFamily='Ubuntu-Regular, Ubuntu'
            fontSize='14'
            fontWeight='normal'
            line-spacing='20'
            fill='#FFFFFF'
          >
            <tspan x='24' y='59'>
              {cardType}
            </tspan>
          </text>
          <text
            id='nombre'
            fontFamily='Ubuntu-Regular, Ubuntu'
            fontSize='14'
            fontWeight='normal'
            line-spacing='20'
            fill='#FFFFFF'
          >
            <tspan x='101' y='59'>
              {owner}
            </tspan>
          </text>
          <text
            id='numero-tarjeta'
            fontFamily='Ubuntu-Regular, Ubuntu'
            fontSize='14'
            fontWeight='normal'
            line-spacing='20'
            fill='#FFFFFF'
          >
            <tspan x='101' y='79'>
              {cardNumber}
            </tspan>
          </text>
          <text
            id='estado'
            fontFamily='Ubuntu-Regular, Ubuntu'
            fontSize='14'
            fontWeight='normal'
            line-spacing='20'
            fill='#FFFFFF'
          >
            <tspan x='101' y='99'>
              Estado: {state}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  )

  return <React.Fragment>{redCardSvg}</React.Fragment>
}

export default MRedCard

MRedCard.defaultProps = {
  width: '275',
  cardTitle: '',
  cardType: 'debit',
  owner: '',
  state: 'Active',
  cardNumber: ''
}

MRedCard.propTypes = {
  width: PropTypes.string,
  cardTitle: PropTypes.string,
  cardType: PropTypes.string,
  owner: PropTypes.string,
  state: PropTypes.string,
  cardNumber: PropTypes.string,
  forceDesktop: PropTypes.bool
}
