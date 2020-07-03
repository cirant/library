import React, {Fragment, useState} from 'react';
import styles from './_range.scss';
import { Input } from '../../';

const InputRange = ({...props}) => {
    
    const [range, setRange] = useState(0);
    const change = (e) => {
        setRange(Number(e.target.value));
    }
    
    return (
        <Fragment>
            <div className="d-flex">
                <Input 
                    label={props.label} 
                    type="text" 
                    placeholder={props.placeholder}
                    value={range}
                />
            </div>
            <div className="d-flex">
                <Input 
                    type="range" 
                    min={props.min} 
                    max={props.max} 
                    step={props.step}
                    onChange={change}
                />
            </div>
        </Fragment>
     );
}
 
export default InputRange;