import AntCheckbox from 'antd/es/checkbox';
import classNames from 'classnames';
import styles from 'Checkbox.module.scss';

function Checkbox (props) {
    const className = classNames({
        [styles]: true
    })
    return <AntCheckbox className={className} {...props} />
}

export default Checkbox;