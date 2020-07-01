import React from 'react';
import PropTypes from 'prop-types';
import styles from './_chips.scss';
import { Icon } from '../../';

const InputChip = ({ value, onClose, variant, disabled, ...props }) => {
  const mainRef = React.createRef(null);

  const onPress = () => {
    mainRef.current.className = classesComponent.concat(styles.pressed).join(' ');
  }

  const mouseUp = () => {
    mainRef.current.className = classesComponent.join(' ');
  }

  const classesComponent = [
    styles.chip,
    disabled ? styles.disabled : null,
    variant ? styles.variant : null
  ];

  return <React.Fragment>
    <div ref={mainRef} {...props} className={classesComponent.join(' ')}>
      {value}
      <Icon onMouseDown={onPress} onClick={onClose} onMouseUp={mouseUp} name="plus" size="2" role="closer" />
    </div>
  </React.Fragment>
}

InputChip.defaultProps = {
  variant: false,
  disabled: false
};

InputChip.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.bool,
  onClose: PropTypes.func.isRequired
}

export default InputChip;