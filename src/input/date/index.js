import React, { useState } from 'react'; 
import PropTypes from 'prop-types';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import icons from '../../scss/_coopeuch-icon.scss';

const InputDate = ({format, placeholderLeft, placeholderRight, minimumDate, maximumDate, locale}) => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    
    return (  
        <div className="containerDateRange">   
            <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                format={format}
                locale={locale}
                >
                {({ startDateInputProps, endDateInputProps, focus }) => (
                    <div className="date-range">
                        <div>
                            <input
                                className={'input' + (focus === START_DATE ? ' -focused' : '')}
                                {...startDateInputProps}
                                placeholder={placeholderLeft}
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
                                placeholder={placeholderRight}
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
    format: PropTypes.string,
    placeholderLeft: PropTypes.string,
    placeholderRight: PropTypes.string,
    minimumDate: PropTypes.object,
    maximumDate: PropTypes.object,
    locale: PropTypes.object
};
 
export default InputDate;