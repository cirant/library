import React from 'react';
import PropTypes from 'prop-types';
import styles from './_loading.scss';

const Loading = ({ dark }) => {
  const styleArr = [styles.loadingContainer, dark ? styles.dark : null];
  const theme = dark ? 'dark' : 'light';

  return <div className={styleArr.join(' ')} data-theme={theme}>
    <div className={styles.circleMain}></div>
    <div className={styles.circlesContainer}>
      {
        [styles.circle_1, styles.circle_2].map((el, i) => <div key={i} className={[styles.circle, el].join(' ')}></div>)
      }
    </div>
  </div>
}

Loading.defaultProps = {
  dark: false
};

Loading.propTypes = {
  dark: PropTypes.bool,
};

export default Loading;


