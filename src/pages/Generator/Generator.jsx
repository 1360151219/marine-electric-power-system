import React, { useEffect, useState } from "react";
import generator1 from "../../assets/generator1.png"
import generator2 from "../../assets/generator2.png"
import generator3 from "../../assets/generator3.png"
import { useNavigate } from "react-router-dom";
import { ItemContainer, Container, LeftList } from "./style"
import { Input, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
export default function Generator() {

    const items = [
        {
            label: '发电机控制',
            key: '1',
            icon: <AppstoreOutlined />,
        },
        {
            label: '同步发电机',
            key: '2',
            icon: <AppstoreOutlined />,
        },
        {
            label: '轴带发电机',
            key: '3',
            icon: <AppstoreOutlined />,
        },
    ];
    const [current, setCurrent] = useState('1');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    const renderItem = (title) => {
        return (
            <ItemContainer>
                <div className="title">{title}</div>
                <img src={generator1} alt="" />
                <div className="btn-warpper">
                    <div className="disconnect">断开</div>
                    <div className="connect">连接</div>
                </div>
                <div className="btn-warpper">
                    <div className="stop">停止</div>
                    <div className="start">运行</div>
                </div>
                <Input prefix="电压：" suffix=" V" />
                <Input prefix="电流：" suffix=" A" />
                <Input prefix="功率：" suffix=" W" />
                <Input prefix="频率：" suffix=" Hz" />
                <Input prefix="相位：" suffix="" />
            </ItemContainer>
        )
    }
    const renderTab = () => {
        switch (current) {
            case '1':
                return (
                    <>
                        {renderItem('柴油发电机1')}
                        {renderItem('柴油发电机2')}
                        {renderItem('轴带发电机')}
                    </>
                )
            case '2':
                return (<img src={generator2} />)

            case '3':
                return (<img src={generator3} />)
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
