import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Logo from './images/logo.png'
import './less/login.less'
import { userLogin } from '../../api/index'
export default class Login extends Component {
    callBackSubmit = async (values) => {
        let result = await userLogin(values)
        console.log(result)
    };
    render() {
        return (
            <div className='login'>
                <header>
                    <img src={Logo} alt="logo" />
                    <h1>商品管理系统</h1>
                </header>
                <section>
                    <span>用户登录</span>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.callBackSubmit}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: '用户名为必填项' },
                                { max: 12, message: '用户名不得超过12位' },
                                { min: 4, message: '用户名必须大于四位' },
                                { pattern: (/^\w+$/), message: '用户名不能为数字、字母、下划线之外的字符' }
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{
                                // 给value设置形参默认值
                                validator: (_, value = '') => {
                                    console.log("-----------")
                                    let errMassageArr = []
                                    if (!value.trim()) {
                                        errMassageArr.push('密码为必填项不能为空')
                                    }
                                    if (value.length < 4) {
                                        errMassageArr.push('密码长度必须大于四位')
                                    }
                                    if (value.length > 12) {
                                        errMassageArr.push('密码长度不能大于十二位')
                                    }
                                    if (!(/^\w+$/).test(value)) {
                                        errMassageArr.push('用户名不能为数字、字母、下划线之外的字符')
                                    }
                                    if (errMassageArr.length !== 0) {
                                        return Promise.reject(errMassageArr)
                                    }
                                    else {
                                        return Promise.resolve()
                                    }

                                }
                            }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
