import React, { useState } from 'react';
import { es } from 'date-fns/locale';
import PropTypes from 'prop-types';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import icons from '../../scss/_coopeuch-icon.scss';

const InputDate = ({
    startDate, 
    endDate, 
    format,  
    minimumDate, 
    maximumDate,
    onStartDateChange,
    onEndDateChange,
    valueStartDate, 
    valueEndDate,
    ...props
}) => {

    const minDate = minimumDate.split(',');
    const maxDate = maximumDate.split(',');
    
    return ( 
        <div className="containerDateRange">   
            <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={onStartDateChange}
                onEndDateChange={onEndDateChange}
                minimumDate={minDate ? new Date(minDate[0], minDate[1], minDate[2]) : new Date()}
                maximumDate={maxDate ? new Date(maxDate[0], maxDate[1], maxDate[2]) : null}
                format={format}
                locale={es}
                >
                {({ startDateInputProps, endDateInputProps, focus }) => (
                    <div className="date-range">
                        <div>
                            <input
                                className={'input' + (focus === START_DATE ? ' -focused' : '')}
                                {...startDateInputProps}
                                placeholder='DD/MM/AAAA'
                            />
                            <div className="container-icon">
                                <i className={icons['icon-bug']}></i>
                            </div>
                        </div>
                        <span className="date-range_arrow"></span>
                        <div>
                            <input
                                className={'input' + (focus === END_DATE ? ' -focused' : '')}
                                {...endDateInputProps}
                                placeholder='DD/MM/AAAA'
                            />
                            <div className="container-icon">
                                <i className={icons['icon-bug']}></i>
                            </div>
                        </div>  
                    </div>
                )}
            </DateRangePicker>
        </div>
    );
}

InputDate.defaultProps = {
    format: 'dd-MM-yyyy'
};

InputDate.propTypes = {
    format: PropTypes.string.isRequired,
    minimumDate: PropTypes.string.isRequired,
    maximumDate: PropTypes.string,
    onStartDateChange: PropTypes.func,
    onEndDateChange: PropTypes.func
};
 
export default InputDate;