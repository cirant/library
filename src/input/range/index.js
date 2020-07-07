import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../';
import { Bar } from '../../';

const InputRange = ({placeholder, label, min, max, step, onChange, value, ...props}) => {
    return (
        <Fragment>
            <Input 
                label={label} 
                type="text" 
                placeholder={placeholder}
                value={value}
            />
            <Bar
                type="range" 
                min={min} 
                max={max}
                step={step}
                value={value}
                onChange={onChange}
            />
        </Fragment>
     );
}

InputRange.defaultProps = {
    onChange: /* istanbul ignore next */ () => null,
};

InputRange.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};
 
export default InputRange;