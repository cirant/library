import React from 'react';
import PropTypes from 'prop-types';
import styles from './_benefitCardContent.scss';

const BenefitCardContent = ({topText, middleText, bottomText, ...props}) => {

    return ( 
        <div 
            className={[styles.benefitCardContent].join(' ').trim()}
            {...props}
        >
            { 
                topText && (
                    <div className={styles.benefitCardTopText}>
                        <span>{topText}</span>
                    </div>
                ) 
            }
            { 
                middleText && (
                    <div className={styles.benefitCardMiddleText}>
                        <h4>
                            {middleText}
                        </h4>
                    </div> 
                )
            }
            { 
                bottomText && (
                    <div className={styles.benefitCardBottomText}>
                        <span>{bottomText}</span>
                    </div>
                ) 
            }
        </div>
    );
}
 
export default BenefitCardContent;