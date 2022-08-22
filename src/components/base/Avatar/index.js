import AntAvatar from 'antd/es/avatar';
import classNames from 'classnames';
import styles from 'Avatar.module.scss';

function Avatar (props) {
    const className = classNames({
        [styles]: true
    })
    return <AntAvatar className={className} {...props} />
}

export default Avatar;