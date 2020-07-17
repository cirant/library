import React, {Link} from 'react';
import PropTypes from 'prop-types';
import styles from './_benefitCard.scss';
import Card from '../card'

const BenefitCard = ({children, className, urlImage, link, target, ...props}) => {

    return ( 
        <a 
            className={styles.link} 
            href={link} 
            target={target}
        >
            <Card
                border
                style={{ backgroundImage: `url(${urlImage})` }}
                className={[styles.benefitCard, className].join(' ').trim()}
                {...props}
            >
                {children}
            </Card>
        </a>
    );
}

BenefitCard.propTypes = {
    urlImage: PropTypes.string,
}
 
export default BenefitCard;