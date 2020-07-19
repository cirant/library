import React, { useEffect, useState } from 'react'
import DBlackCard from './svgs/desktop/black'
import MBlackCard from './svgs/mobile/black'
import MRedCar from './svgs/mobile/red'
import DRedCar from './svgs/desktop/red'

const PlasticCard = ({ type, width, cardTitle, cardType, owner, state, cardNumber }) => {

  let bankCard

  const [component, setComponent] = useState(null)

  const getCard = () => {
    console.log('getCard')
    const myWidth = window.screen.width
    if (myWidth < 599) {
      console.log('mobile')
      switch (type) {
        case 'debit':
          bankCard = <MBlackCard
            type={type}
            width={width}
            cardType={cardType}
            cardTitle={cardTitle}
            owner={owner}
            state={state}
            cardNumber={cardNumber}/>
          break
        case 'credit':
          bankCard = <MRedCar
            type={type}
            width={width}
            cardType={cardType}
            cardTitle={cardTitle}
            owner={owner}
            state={state}
            cardNumber={cardNumber}/>
          break
      }
    } else {
      console.log('desktop')
      switch (type) {
        case 'debit':
          bankCard = <DBlackCard
            type={type}
            width={width}
            cardType={cardType}
            cardTitle={cardTitle}
            owner={owner}
            state={state}
            cardNumber={cardNumber}/>
          break
        case 'credit':
          bankCard = <DRedCar
            type={type}
            width={width}
            cardType={cardType}
            cardTitle={cardTitle}
            owner={owner}
            state={state}
            cardNumber={cardNumber}/>
          break
      }
    }
    setComponent(bankCard)
  }

  useEffect(() => {
    console.log('resize')
    window.addEventListener('resize', getCard)
    return () => {
      window.removeEventListener('resize', getCard)
    }
  }, [window])

  useEffect(() => {
    console.log('mount')
    getCard()
    return () => {
    }
  }, [])

  return (
    <React.Fragment>
      {component}
    </React.Fragment>
  )

}

export default PlasticCard
