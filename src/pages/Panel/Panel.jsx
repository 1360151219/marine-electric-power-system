import React, { useEffect, useState } from "react";
import panel1 from "../../assets/panel1.png"
import panel2 from "../../assets/panel2.png"
import panel3 from "../../assets/panel3.png"
import { Container, LeftList } from "./style"
import { Input, Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
export default function Panel() {

    const items = [
        {
            label: '主配电板',
            key: '1',
            icon: <AppstoreOutlined />,
        },
        {
            label: '应急配电板',
            key: '2',
            icon: <AppstoreOutlined />,
        },
        {
            label: '同步屏',
            key: '3',
            icon: <AppstoreOutlined />,
        },
    ];
    const [current, setCurrent] = useState('1');
    const onClick = (e) => {
        setCurrent(e.key);
    };

    const renderTab = () => {
        switch (current) {
            case '1':
                return (
                    <img src={panel2} height="500px" />
                )
            case '2':
                return (<img src={panel3} height="500px" />)

            case '3':
                return (<img src={panel1} height="600px" />)
            default:
                return null
        }

    }
    return (
        <Container>
            <LeftList>
                <Menu onClick={onClick} selectedKeys={[current]} style={{ width: 256 }} mode="vertical" items={items} />
            </LeftList>
            {renderTab()}
        </Container>
    )
}
