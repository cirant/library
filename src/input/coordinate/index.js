import React from 'react';
import PropTypes from 'prop-types';
import styles from './_coordinate.scss';
import Icon from '../../icons';

const InputCoordinate = ({children, assistText, ...props}) => {

    const getHelperText = (icon) => {
        switch (icon.type) {
            case 'success':
            return (
                <div className={styles.successText}>
                    <Icon data-testid='successIcon' name='check' size={1} />
                    <span>{icon.text}</span>
                </div>
            )
            case 'error':
            return (
                <div className={styles.errorText}>
                    <Icon data-testid='errorIcon' name='cross' size={1} />
                    <span>{icon.text}</span>
                </div>
            )
            default:
            return (
                <div className={styles.assistText}>
                    <i className={styles.empty} /> <span>{icon.text}</span>
                </div>
            )
        }
    }

    return ( 
        <div>
            <div className={[styles.container, styles.coordinate].join(' ')} {...props}>
                {children}
            </div>
            <div className={[styles.containerIcon].join(' ')}>
                {Array.isArray(assistText) && assistText.length > 0
                ? assistText.map((el, i) => (
                    <div key={`${el.text}-${i}`}>{getHelperText(el)}</div>
                ))
                : assistText}
            </div>
        </div>
    );
}

InputCoordinate.defaultProps = {
    onChange: /* istanbul ignore next */ () => null
}

InputCoordinate.propTypes = {
    assistText: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          type: PropTypes.oneOf(['success', 'assist', 'error'])
        })
      ),
      PropTypes.string
    ])
}
 
export default InputCoordinate;