import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { defineMessages, FormattedDate, FormattedMessage, FormattedNumber, useIntl } from 'react-intl';
import getMessage from './getMessage';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const messsages = defineMessages({
  username: {
    id: "username",
    defaultMessage: '用户名'
  },
  password: {
    id: "password"
  },
  rememberMe: {
    id: 'rememberMe'
  },
  submit: {
    id: 'submit'
  },
  inputYourUsername: {
    id: 'inputYourUsername'
  },
  inputYourPassword: {
    id: 'inputYourPassword'
  }
})

const App: React.FC = () => {
  const intl = useIntl();
  useEffect(() => {
    setTimeout(() => {
      alert(getMessage());
    }, 2000)
  }, [])
  
  return <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label={intl.formatMessage(messsages.username)}
      name="username"
      rules={[{ required: true, message: intl.formatMessage(messsages.inputYourUsername) }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label={intl.formatMessage(messsages.password)}
      name="password"
      rules={[{ required: true, message: intl.formatMessage(messsages.inputYourPassword) }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>{intl.formatMessage(messsages.rememberMe)}</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        {intl.formatMessage(messsages.submit)}
      </Button>
    </Form.Item>
    <div style={{ display: 'flex' }}>
      <Card title="日期" style={{ width: 300 }}>
        <div>{intl.formatDate(new Date(), { weekday: 'long' })}</div>
        <div>{intl.formatDate(new Date(), { weekday: 'short' })}</div>
        <div>{intl.formatDate(new Date(), { weekday: 'narrow' })}</div>
        <div>{intl.formatDate(new Date(), { dateStyle: 'full' })}</div>
        <div>{intl.formatDate(new Date(), { dateStyle: 'long' })}</div>
      </Card>
      <Card title="相对时间" style={{ width: 300 }}>
        <div>{intl.formatRelativeTime(200, 'hour')}</div>
        <div>{intl.formatRelativeTime(-10, 'minute')}</div>
      </Card>
      <Card title="数字" style={{ width: 300 }}>
        <div>{intl.formatNumber(200000, {
          style: 'currency',
          currency: intl.locale.includes('en') ? 'USD' : 'CNY'
        })}</div>
        <div>
          {
            intl.formatNumber(10000, {
              style: 'unit',
              unit: 'meter'
            })
          }
        </div>
      </Card>
      <Card title="组件版本" style={{ width: 300 }}>
        <div><FormattedDate value={new Date} dateStyle='full'></FormattedDate></div>
        <div><FormattedMessage id={messsages.rememberMe.id}></FormattedMessage></div>
        <div><FormattedNumber style='unit' unit='meter' value={2000}></FormattedNumber></div>
      </Card>
    </div>
  </Form>
}

export default App;