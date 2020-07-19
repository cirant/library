import React from 'react';
import styles from './_privateFooter.scss';
import Icon from '../../icons';

const PrivateFooter = ({logo, itemsLeft, itemRight, ...props}) => {
    
    return (
        <React.Fragment>
            <div className={[styles.privateFooter, styles.footerDesktop].concat(props.className).join(' ')}>
                <div className={styles.footerLeftArea}>
                    <div className={styles.footerLogoContainer}>
                        {logo}
                    </div>
                    <div className={styles.items}>
                        {
                            itemsLeft && itemsLeft.map((item, index) => (
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
                        <Icon name={itemRight.icon_name} size="4" />
                    </div>
                    <div className={styles.textLabel}>
                        <span>{itemRight.label}</span>
                    </div>
                </div>
            </div>
            <div className={styles.footerMobile}>
                {logo}
            </div>
        </React.Fragment>
    );
}
 
export default PrivateFooter;