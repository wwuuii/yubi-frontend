import Footer from '@/components/Footer';
import {userRegisterUsingPOST} from '@/services/yubi/userController';
import {Link} from '@@/exports';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {LoginForm, ProFormText} from '@ant-design/pro-components';
import {useEmotionCss} from '@ant-design/use-emotion-css';
import {FormattedMessage, Helmet, history, SelectLang, useIntl} from '@umijs/max';
import {message, Tabs} from 'antd';
import React, {useState} from 'react';
import Settings from '../../../../config/defaultSettings';

const Lang = () => {
  const langClassName = useEmotionCss(({token}) => {
    return {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });

  return (
    <div className={langClassName} data-lang>
      {SelectLang && <SelectLang/>}
    </div>
  );
};

const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const intl = useIntl();


  const handleSubmit = async (values: API.UserRegisterRequest) => {
    // 登录
    try {
      const res = await userRegisterUsingPOST({...values});
      if (res.code === 0) {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '注册成功！',
        });
        message.success(defaultLoginSuccessMessage);
        history.push('/user/login');
        return;
      } else {
        message.error(res.message);
      }
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '注册失败，请重试！',
      });
      message.error(defaultLoginFailureMessage);
    }
  }


return (
  <div className={containerClassName}>
    <Helmet>
      <title>
        {intl.formatMessage({
          id: 'menu.login',
          defaultMessage: '注册页',
        })}
        - {Settings.title}
      </title>
    </Helmet>
    <Lang/>
    <div
      style={{
        flex: '1',
        padding: '32px 0',
      }}
    >
      <LoginForm
        contentStyle={{
          minWidth: 280,
          maxWidth: '75vw',
        }}
        logo={<img alt="logo" src="/logo.svg"/>}
        title="智能 BI"
        subTitle={intl.formatMessage({id: '智能BI 帮助您自动分析图表信息！'})}
        initialValues={{
          autoLogin: true,
        }}
        onFinish={async (values) => {
          await handleSubmit(values as API.UserRegisterRequest);
        }}
      >
        <Tabs
          activeKey={type}
          onChange={setType}
          centered
          items={[
            {
              key: 'account',
              label: intl.formatMessage({
                id: 'pages.login.accountLogin.tab',
                defaultMessage: '账户密码注册',
              }),
            },
          ]}
        />

        {type === 'account' && (
          <>
            <ProFormText
              name="userAccount"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined/>,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.username.placeholder',
                defaultMessage: '请输入账号',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="账号格式不正确!"
                    />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="userPassword"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined/>,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: '请输入密码',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="密码格式不正确！"
                    />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="checkPassword"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined/>,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: '请输入确认密码',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="确认密码格式不正确！"
                    />
                  ),
                },
              ]}
            />
          </>
        )}

        <div
          style={{
            marginBottom: 24,
          }}
        >
          <Link
            style={{
              marginLeft: '293px'
            }}
            to={'/user/login'}
          >
            登录
          </Link>
        </div>
      </LoginForm>
    </div>
    <Footer/>
  </div>
);
}
;

export default Login;
