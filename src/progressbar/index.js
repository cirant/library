import React from 'react';
import PropTypes from 'prop-types';
import styles from './_progressbar.scss';

const ProgressBar = ({
  label,
  progress,
  assistText,
  percent,
  helperAlign,
  reverse
}) => {
  const alignment = (assistText && percent) ? styles.between : styles[helperAlign];
  const direction = reverse ? styles.reverse : null;
  const bellowClasses = [styles.bellowContent, alignment, direction];

  return <div className={styles.progressBar}>
    {
      !Array.isArray(label) ? <div className={styles.simpleLabel}>{label}</div> :
        <div className={styles.multiHeader}>
          {
            label.map((el, i) => <div key={i}>
              <label className={styles.multiHeaderLabel}>{el.label}</label>
              <div>{el.text}</div>
            </div>)
          }
        </div>
    }
    <div className={styles.barContainer}>
      <div className={styles.bar} data-progress={progress} style={{ width: `${progress}%` }}></div>
    </div>
    {
      assistText || percent ? <div className={bellowClasses.join(' ').trim()} role="helper" >
        {assistText}
        {percent && <div className={Number(progress) === 100 ? styles.full : null}>{`${progress}%`}</div>}
      </div> : null
    }
  </div>
}

ProgressBar.defaultProps = {
  label: '',
  assistText: '',
  progress: 0,
  percent: false,
  helperAlign: 'start',
  reverse: false
};

ProgressBar.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        text: PropTypes.string
      })
    )
  ]),
  assistText: PropTypes.string,
  progress: PropTypes.number,
  percent: PropTypes.bool,
  reverse: PropTypes.bool,
  helperAlign: PropTypes.oneOf(['start', 'between', 'end'])
};

export default ProgressBar;