import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from '../../interfaces';
import './main.container.less';

export const MainContainer = (props: Props) => {
    return <Layout style={{ minHeight: '100vh' }}>
        <Layout.Header>
            <div style={{ color: '#fff' }}>Moy</div>
        </Layout.Header>
        <Layout style={{ minHeight: '100%' }}>
            <Layout.Sider className="layout-sider">
                <Menu mode="inline" theme="light">
                    <Menu.Item>
                        <Link to="/users">账号</Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout.Content className="layout-content">
                {props.children}
            </Layout.Content>
        </Layout>
    </Layout>
}
