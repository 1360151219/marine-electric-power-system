import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HomeHeader, HomeContainer } from "../Home/style.js"
import { PageHeader, Menu } from 'antd';
import { AreaChartOutlined, AppstoreOutlined } from '@ant-design/icons';
const items = [
    {
        label: '舰船电力系统',
        key: '/',
        icon: <AreaChartOutlined />,
    },
    {
        label: '舰船电站',
        key: '/2',
        icon: <AppstoreOutlined />,
    },
    {
        label: '柴油发电机组',
        key: '/3',
        icon: <AppstoreOutlined />,
    }, {
        label: '主配电板',
        key: '/4',
        icon: <AppstoreOutlined />,
    },
];
export default function Home() {
    const navigate = useNavigate()
    const location = useLocation()
    const [current, setCurrent] = useState(location.pathname);

    const onClick = (e) => {
        setCurrent(e.key);
        navigate(e.key)
    };
    return (
        <>
            <HomeHeader>
                <PageHeader
                    className="site-page-header"
                    title="船舶电力系统--课程设计"
                    subTitle="基于React等技术栈的一个前端项目"
                />
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
            </HomeHeader>
            <HomeContainer><Outlet></Outlet></HomeContainer>

        </>
    )
}
