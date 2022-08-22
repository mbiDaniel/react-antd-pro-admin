import AntAlert from 'antd/es/alert';
import classNames from 'classnames';
import styles from 'Alert.module.scss';

function Alert (props) {
    const className = classNames({
        [styles]: true
    })
    return <AntAlert className={className} {...props} />
}

export default Alert;