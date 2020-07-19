import React from 'react';
import PropTypes from 'prop-types';
import styles from './_publicFooterColumn.scss';

const PublicFooterColumn = ({children, title, ...props}) => {
    return (
        <div className={[styles.column].concat(props.className).join(' ')}>
           <p className={styles.titleColumn}>{title}</p>
           <div className={styles.items}>
               {children}
           </div>
       </div>
     );
}

PublicFooterColumn.defaultProps = {}

PublicFooterColumn.propTypes = {
    title: PropTypes.string
}
 
export default PublicFooterColumn;