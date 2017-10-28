import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import Home from '../home'
import Profile from '../profile'

import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

export const App = () => (
    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/profile">Profile</Link>
                </Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <div style={{ margin: '16px 0' }}>
            </div>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <main>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/profile" component={Profile} />
                 </main>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            Krokvik ©2017
        </Footer>
    </Layout>
)