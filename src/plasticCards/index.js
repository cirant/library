import React, { useEffect, useState } from 'react'
import DBlackCard from './svgs/desktop/black'
import MBlackCard from './svgs/mobile/black'
import MRedCar from './svgs/mobile/red'
import DRedCar from './svgs/desktop/red'
import PropTypes from 'prop-types'

const PlasticCard = ({
  type,
  width,
  cardTitle,
  cardType,
  owner,
  state,
  cardNumber,
  forceDesktop
}) => {
  let bankCard

  const [component, setComponent] = useState(null)

  const getCard = () => {
    const myWidth = window.screen.width
    if (myWidth < 599 && !forceDesktop) {
      switch (type) {
        case 'debit':
          bankCard = (
            <MBlackCard
              role='role-plastic-mobile-debit'
              width={width}
              cardType={cardType}
              cardTitle={cardTitle}
              owner={owner}
              state={state}
              cardNumber={cardNumber}
            />
          )
          break
        case 'credit':
          bankCard = (
            <MRedCar
              role='role-plastic-mobile-credit'
              width={width}
              cardType={cardType}
              cardTitle={cardTitle}
              owner={owner}
              state={state}
              cardNumber={cardNumber}
            />
          )
          break
      }
    } else {
      switch (type) {
        case 'debit':
          bankCard = (
            <DBlackCard
              role='role-plastic-desktop-debit'
              width={width}
              cardType={cardType}
              cardTitle={cardTitle}
              owner={owner}
              state={state}
              cardNumber={cardNumber}
            />
          )
          break
        case 'credit':
          bankCard = (
            <DRedCar
              width={width}
              cardType={cardType}
              cardTitle={cardTitle}
              owner={owner}
              state={state}
              cardNumber={cardNumber}
            />
          )
          break
      }
    }
    setComponent(bankCard)
  }

  useEffect(() => {
    window.addEventListener('resize', getCard)
    return () => {
      window.removeEventListener('resize', getCard)
    }
  }, [window])

  useEffect(() => {
    getCard()
    return () => {}
  }, [])

  return <React.Fragment>{component}</React.Fragment>
}

PlasticCard.defaults = {
  type: 'debit',
  cardTitle: '',
  cardType: 'debit',
  owner: '',
  state: 'Active',
  cardNumber: '',
  forceDesktop: false
}

PlasticCard.propTypes = {
  width: PropTypes.string,
  cardTitle: PropTypes.string,
  type: PropTypes.string,
  cardType: PropTypes.string,
  owner: PropTypes.string,
  state: PropTypes.string,
  cardNumber: PropTypes.string,
  forceDesktop: PropTypes.bool
}

export default PlasticCard
