import AntButton from "antd/es/button";
import classNames from "classnames";

import styles from "./Button.module.scss";

export default function Button (props) {
    const className = classNames({
    [styles]: true
    })
    return  <AntButton className={className} {...props} />
}