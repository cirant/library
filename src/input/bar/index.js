import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './_bar.scss';

const Bar = ({min, max, step, value, onChange, ...props}) => {
    const [styleInLine, setStyleInLine] = useState({});
    const [bubbleVisible, setBubbleVisible] = useState(false);

    useEffect(() => {
        handleInput();
    }, [min, max, value, bubbleVisible]);

    const handleInput = () => {
        const percentage = Number((value - min) * 100 / (max - min));
        const newPosition = 10 - (percentage * 0.2); 
          
        setStyleInLine({
            left: `calc(${percentage}% + (${newPosition}px))`,
            display: bubbleVisible ? 'block' : 'none'
        });
    };

    return ( 
        <div className={styles.rangeWrap}>
            <div className={styles.rangeValue} style={styleInLine}>
                <div className={styles.bubbleContainer}>
                    <span className={styles.bubble}>
                        <span className={styles.value}>{value}</span>
                    </span>
                </div>
            </div>
            <input
                type="range" 
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                onInput={handleInput}
                onMouseEnter={() => setBubbleVisible(true)}
                onMouseLeave={() => setBubbleVisible(false)}
                {...props}
            />
        </div>
    );
}

Bar.defaultProps = {
    onChange: /* istanbul ignore next */ () => null,
};

Bar.propTypes = {
    min: PropTypes.string,
    max: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};
 
export default Bar;