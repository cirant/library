import React from 'react';
import styles from './_benefitCardLogo.scss'
import PropTypes from 'prop-types'

const BenefitCardLogo = ({children, ...props}) => {
    return ( 
        <div className={styles.benefitCardLogoContainer} {...props}>
            { children }
        </div>
     );
}
 
export default BenefitCardLogo;