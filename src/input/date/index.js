import React from 'react';
import { es } from 'date-fns/locale';
import PropTypes from 'prop-types';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import Label  from '../_commons/label';
import icons from '../../scss/_coopeuch-icon.scss';

const InputDate = ({
    label,
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
    format,  
    minimumDate, 
    maximumDate,
    ...props
}) => { 

    const getObjDate = (strDate) => {
        if(!strDate) return null;
        const arrayNewDate = strDate.split('/');
        return new Date(Number(arrayNewDate[0]), Number(arrayNewDate[1]), Number(arrayNewDate[2]));
    }

    return ( 
        <div className="containerDateRange"> 
            <Label label={label} />
            <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={onStartDateChange}
                onEndDateChange={onEndDateChange}
                minimumDate={getObjDate(minimumDate)}
                maximumDate={getObjDate(maximumDate)}
                format={format}
                locale={es}
                {...props}
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
                                <i className={icons['icon-calendar']}></i>
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
                                <i className={icons['icon-calendar']}></i>
                            </div>
                        </div>  
                    </div>
                )}
            </DateRangePicker>
        </div>
    );
}

InputDate.defaultProps = {
    format: 'dd/MM/yyyy'
};

InputDate.propTypes = {
    label: PropTypes.string,
    startDate: PropTypes.object,
    endDate: PropTypes.object,
    format: PropTypes.string.isRequired,
    minimumDate: PropTypes.string,
    maximumDate: PropTypes.string,
    onStartDateChange: PropTypes.func,
    onEndDateChange: PropTypes.func,
};
 
export default InputDate;