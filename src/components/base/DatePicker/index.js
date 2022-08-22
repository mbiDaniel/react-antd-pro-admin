import AntDatePicker from 'antd/es/date-picker';
import classNames from 'classnames';
import styles from 'DatePicker.module.scss';

function DatePicker (props) {
    const className = classNames({
        [styles]: true
    })
    return <AntDatePicker className={className} {...props} />
}

export default DatePicker;