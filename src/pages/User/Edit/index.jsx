import React, { useState } from 'react'
import './style.css'

import { Layout, Menu } from 'antd';

import {
    BellOutlined,
    QuestionCircleOutlined,
    LockOutlined,
    SettingOutlined,
    SlidersOutlined,
    LeftOutlined
} from '@ant-design/icons';

// React Router
import { Link, useParams } from 'react-router-dom';

// Components
import General from './components/General'

const { Header, Content, Sider } = Layout;

const Edit = () => {

    const [currentNav, setCurrentNav] = useState('1');
    const [collapsed, setCollapsed] = useState(false);


    const handleClick = e => {
        setCurrentNav(e.key);
    }

    const { id } = useParams();

    const getNavContent = (current) => {
        switch (current) {
            case "1":
                return <General />;
            default:
                return 'Not configured yet';
        }
    }


    return (
        <Layout style={{ minHeight: '100vh' }} className="font-techpot" >

            <Sider breakpoint="lg" collapsedWidth="0" 
                    style={{  height: '100vh', position: 'fixed', left: 0 }} 
                    onCollapse={(collapsed, type) => {
                        setCollapsed(collapsed);
                    }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClick}>
                    <Menu.Item key="1" icon={<SettingOutlined />}>
                        Geral
                    </Menu.Item>
                    <Menu.Item key="2" icon={<LockOutlined />}>
                        Privacidade
                    </Menu.Item>
                    <Menu.Item key="3" icon={<BellOutlined />}>
                        Notificação
                    </Menu.Item>

                    <Menu.Item key="4" icon={<SlidersOutlined />}>
                        Preferencias
                    </Menu.Item>
                    <Menu.Item key="5" icon={<QuestionCircleOutlined />}>
                        Ajuda
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout style={!collapsed ? { marginLeft: '200px' } : null }>
                <Header className="site-layout-sub-header-background" style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
                    <div style={{paddingLeft: "15px", textDecoration: 'none', color: '#000'}}>
                        <Link to={`/usuario/perfil/${id}`} className="voltar-editeuserBtt"><LeftOutlined /> Voltar</Link>
                    </div>
                </Header>
                <Content style={{ margin: '85px 16px 24px 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {getNavContent(currentNav)}
                    </div>
                </Content>
            </Layout>

        </Layout>
    );
}


export default Edit;