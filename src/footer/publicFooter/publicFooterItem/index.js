import React from 'react';
import PropTypes from 'prop-types';
import styles from './_publicFooterItem.scss';

const PublicFooterItem = ({children, link, subItems, ...props}) => {
    return ( 
        <React.Fragment>
            <p className={[styles.item].concat(props.className).join(' ')}>
                <a href={link}>{children}</a>
            </p> 
            <div className={styles.subItems}>
                {
                    subItems && subItems.map((item, index) => (
                        <p key={`${item.text}-${index}`} className={styles.subItem}>
                            <a title={item.text} href={item.link}>{item.text}</a>
                        </p>
                    ))
                }
            </div>
        </React.Fragment>
    );
}

PublicFooterItem.defaultProps = {}

PublicFooterItem.propTypes = {
    link: PropTypes.string,
    subItems: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
                link: PropTypes.string
            })
        ),
        PropTypes.string
    ])
}
 
 
export default PublicFooterItem;