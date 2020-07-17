import React from 'react'
import { DefaultCard, Mastercard } from './assets'

const IconCard = ({ variant, ...props }) => {
  switch (variant) {
    case 'mastercard':
      return <Mastercard {...props} />

    default:
      return <DefaultCard {...props} />
  }
}

IconCard.defaultProps = {}

export default IconCard
