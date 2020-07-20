import React from 'react';
import PropTypes from 'prop-types';
import styles from './_privateFooter.scss';
import logo from './assets/coopeuch-gris.svg';

const PrivateFooter = ({items, icon, label, ...props}) => {
    
    return (
        <React.Fragment>
            <div className={[styles.privateFooter, styles.footerDesktop].concat(props.className).join(' ')}>
                <div className={styles.footerLeftArea}>
                    <div className={styles.footerLogoContainer}>
                        <img src={logo} alt="imagen doesn't found" />
                    </div>
                    <div className={styles.items}>
                        {
                            items && items.map((item, index) => (
                                (
                                    <p key={`${item.text}-${index}`}>
                                        <a 
                                            className={styles.link} 
                                            href={item.link}
                                        >
                                            {item.text}
                                        </a>
                                    </p>
                                )
                            ))
                        }
                    </div>
                </div>
                <div className={styles.end}>
                    <div className={styles.icon}>
                        {icon}
                    </div>
                    <div className={styles.textLabel}>
                        <span>{label}</span>
                    </div>
                </div>
            </div>
            <div className={styles.footerMobile}>
                {logo}
            </div>
        </React.Fragment>
    );
}

PrivateFooter.defaultProps = {}

PrivateFooter.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
                link: PropTypes.string
            })
        ),
        PropTypes.string
    ]),
    label: PropTypes.string,
    icon: PropTypes.element
}
 
export default PrivateFooter;