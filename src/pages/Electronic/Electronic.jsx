import React, { useState } from "react";
import png1 from "../../assets/route1.png"
import png2 from "../../assets/route2.png"
import png3 from "../../assets/route3.png"
import png4 from "../../assets/ampere.png"
import png5 from "../../assets/electricity.png"
import png6 from "../../assets/power-tation.png"
import { useNavigate } from "react-router-dom";
import { LeftList, ElectronicContainer, ElectronicImg } from "./style"
import { Menu, Select, Option } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
export default function Electronic() {
    const { Option } = Select;
    function getImg() {
        switch (current) {
            case '1':
                return (<img src={png1} />)
            case '2':
                return (<img src={png2} />)

            case '3':
                return (<img src={png3} />)
            default:
                return (
                    <div className="station">
                        <div className="station-detail">
                            <h2>主电站基本参数</h2>
                            <div className="paramItem">
                                <label>电流种类</label>
                                <Select defaultValue="jack">
                                    <Option value="jack">直流电</Option>
                                    <Option value="lucy">交流电</Option>
                                </Select>
                            </div>
                            <div className="paramItem">
                                <label>额定电压</label>
                                <Select defaultValue="jack">
                                    <Option value="jack">380 V</Option>
                                    <Option value="lucy">220 V</Option>
                                </Select>
                            </div>
                            <div className="paramItem">
                                <label>额定功率</label>
                                <Select defaultValue="jack">
                                    <Option value="jack">60 Hz</Option>
                                    <Option value="lucy">50 Hz</Option>
                                </Select>
                            </div>
                            <div className="paramItem">
                                <label>线制</label>
                                <Select defaultValue="jack">
                                    <Option value="jack">交流三项</Option>
                                    <Option value="lucy">直流三项</Option>
                                </Select>
                            </div>
                            <div className="paramItem">
                                <label>运行状态</label>
                                <div className="correct">正常运行</div>
                            </div>
                        </div>
                        <div className="imgs">
                            <img src={png4} width="105%" />
                            <img src={png5} width="105%" />
                            <img src={png6} width="105%" />
                        </div>
                    </div>
                )
        }
    }
    const items = [
        {
            label: '主电站',
            key: '4',
            icon: <AppstoreOutlined />,
        },
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
    const [current, setCurrent] = useState('4');

    const onClick = (e) => {
        setCurrent(e.key);
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
