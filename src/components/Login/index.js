import React from 'react';
import img1 from '../../images/sticker.jpg';
import {AiOutlineUser} from 'react-icons/ai';
import { Form} from "antd";
import Button from "@components/base/Button";
import styles from'./Login.module.scss';
import Input from '@components/base/Input';

const Login = () =>(
    <div>
    
        <div className={styles.container}>
            {/* image side */}
            <div className={styles.imageSide}> 
                <div className={styles.overlayImg}>
                    <img src={img1} alt="log in"/>
                </div>
            </div>
            {/* Form side */}
            <div className={styles.loginSide}>
                <h3> Login as a Admin User</h3>
                <Form>
                    <Form.Item> <Input placeholder="johndoe@xyz.com" suffix={<AiOutlineUser/>}/></Form.Item>
                    <Form.Item> <Input.Password placeholder="xxxxxxxxx"  required/> </Form.Item>
                    <Form.Item>
                        <Button className={styles.button} type='primary'  htmlType="submit">
                        LOGIN
                        </Button>
                    </Form.Item>
                    <div className={styles.pwd}><Button style={{color:'gray'}} type="link" htmlType="button">
                        Forget your password?
                    </Button></div>
                    <div className={styles.help}><Button style={{color:'#2aade0'}} type="link" htmlType="button">
                        <b>Get help signed in.</b>
                    </Button>
                    </div>
                    <div className={styles.terms}><Button style={{color:'gray'}} type="link" htmlType="button">
                        Terms of use. Privacy policy
                    </Button></div>
                </Form>
            </div>
        </div>
    </div>
);

export default Login;
