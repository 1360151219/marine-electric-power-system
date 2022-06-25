import React, { useState } from "react";
import png1 from "../../assets/route1.png"
import png2 from "../../assets/route2.png"
import png3 from "../../assets/route3.png"
import { useNavigate } from "react-router-dom";
import { LeftList, ElectronicContainer, ElectronicImg } from "./style"
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
export default function Electronic() {
    function getImg() {
        switch (current) {
            case '1':
                return (<img src={png1} width="105%" />)
            case '2':
                return (<img src={png2} width="105%" />)

            case '3':
                return (<img src={png3} width="105%" />)
            default:
                return null
        }
    }
    const items = [
        {
            label: '电路1',
            key: '1',
            icon: <AppstoreOutlined />,
        },
        {
            label: '电路2',
            key: '2',
            icon: <AppstoreOutlined />,
        },
        {
            label: '电路3',
            key: '3',
            icon: <AppstoreOutlined />,
        }
    ];
    const navigate = useNavigate()
    const [current, setCurrent] = useState('1');

    const onClick = (e) => {
        setCurrent(e.key);
        // navigate(e.key)
    };
    return (
        <>
            <ElectronicContainer>
                <LeftList>
                    <Menu onClick={onClick} selectedKeys={[current]} style={{ width: 256 }} mode="vertical" items={items} />
                </LeftList>
                <ElectronicImg>
                    {getImg()}
                </ElectronicImg>
            </ElectronicContainer>

        </>
    )
}
