import {  Button, Checkbox, Form, Input, Radio  } from 'antd';
import {useState} from "react";
import {CircleImg} from "@UI/UserInfo/UserInfo.styles";
import * as S from "./Signup.styles";
import { useAuth } from "@API/auth";

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Signup = () => {
    const { signIn, signOut } = useAuth()
    const [userGender, setUserGender] = useState('male');
    const onFinish = (values) => {
        console.log('Success:', values);
        signIn(values.username, values.password)
    };

    return (
        <S.Wrapper>
            <h2>Create User</h2>
            <S.Form
                style={{ width: '100%' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout={'vertical'}
            >
                <Form.Item label="Choose your gender" name="gender" rules={[
                    {
                        required: true,
                        message: 'Please select your gender!',
                    },
                ]}>
                    <S.RadioGroup value={userGender}>
                        <S.RadioItem value="Male">
                            <CircleImg
                                src={'https://i.pinimg.com/564x/3c/b4/49/3cb4497b856d718c06d5d9575779a4e3.jpg'}
                                style={{margin: 'auto', width: '70px', height: '70px'}}
                            />
                            Male
                        </S.RadioItem>
                        <S.RadioItem value="Female">
                            <CircleImg
                                src={'https://i.pinimg.com/564x/65/56/08/6556085337184f56dab477ebfcbf67a7.jpg'}
                                style={{margin: 'auto', width: '70px', height: '70px'}}
                            />
                            Female
                        </S.RadioItem>
                    </S.RadioGroup>
                </Form.Item>

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </S.Form>
        </S.Wrapper>
    )
};

export default Signup;