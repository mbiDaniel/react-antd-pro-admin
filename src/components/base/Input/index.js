import AntInput from 'antd/es/input';
import { createRef } from 'react';
import styles from './Input.module.scss';

export default function Input (props) {
    return <AntInput {...props} />
}

Input.Password = () => {
    return <AntInput.Password />
}