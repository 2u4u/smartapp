import React from 'react';
import { Link } from "react-router-dom";
import {
  Layout
} from 'antd';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
const { Title } = Typography;
const { Content, Sider } = Layout;

function Login() {
  return (
    <Layout style={{ height: '100%' }}>
      <Content>Content</Content>
      <Sider
        theme="light"
        width="400"
        style={{ padding: 24 }}
      >
        <Title level={3}>Вход</Title>
        <Form className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Ваш email"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            <Checkbox>Запомнить меня</Checkbox>
            {/* <a className="login-form-forgot" href="">
              Забыли пароль?
              </a> */}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Войти
              </Button>
          </Form.Item>
          <Form.Item>
            или <Link to="/register">зарегистрируйтесь!</Link>
          </Form.Item>
        </Form>
      </Sider>
    </Layout>
  )
}

export default Login;