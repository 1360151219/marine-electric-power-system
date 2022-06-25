import React, { useEffect, useState } from "react";
import DashBoardImg from "../../assets/dashboard.png"
import { useNavigate } from "react-router-dom";
import { Dashborad } from "./style"
import * as echarts from 'echarts/core';
import { TooltipComponent, GridComponent, TitleComponent, ToolboxComponent, VisualMapComponent } from 'echarts/components';
import { GaugeChart, CandlestickChart, LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([TitleComponent, LineChart, VisualMapComponent, ToolboxComponent, TooltipComponent, GaugeChart, CanvasRenderer, GridComponent, CandlestickChart]);
export default function DashBoard() {
    let random1 = Math.floor(Math.random() * 100 + 1)
    let option1 = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
            {
                name: '电流表',
                type: 'gauge',
                detail: {
                    width: 40,
                    height: 14,
                    fontSize: 14,
                    color: '#000',
                    backgroundColor: 'auto',
                    borderRadius: 3,
                    formatter: '{value}%'
                }
                ,
                data: [
                    {
                        value: random1,
                        name: '电流I/A',
                        title: {
                            offsetCenter: ['0%', '84%']
                        },
                        detail: {
                            offsetCenter: ['0%', '110%']
                        }
                    }
                ]
            }
        ]
    };
    let option2 = {
        series: [
            {
                type: 'gauge',
                min: 0,
                max: 100,
                splitNumber: 10,
                radius: '70%',
                axisLine: {
                    lineStyle: {
                        color: [[1, '#f00']],
                        width: 3
                    }
                },
                splitLine: {
                    distance: -18,
                    length: 18,
                    lineStyle: {
                        color: '#f00'
                    }
                },
                axisTick: {
                    distance: -12,
                    length: 10,
                    lineStyle: {
                        color: '#f00'
                    }
                },
                axisLabel: {
                    distance: -34,
                    color: '#f00',
                    fontSize: 18
                },
                anchor: {
                    show: true,
                    size: 20,
                    itemStyle: {
                        borderColor: '#000',
                        borderWidth: 2
                    }
                },
                pointer: {
                    offsetCenter: [0, '10%'],
                    icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                    length: '115%',
                    itemStyle: {
                        color: '#000'
                    }
                },
                detail: {
                    valueAnimation: true,
                    precision: 1,
                    fontSize: 16
                },
                title: {
                    offsetCenter: [0, '-30%'],
                    fontSize: 14
                },
                data: [
                    {
                        value: 58.4,
                        name: 'PLP'
                    }
                ]
            },
            {
                type: 'gauge',
                min: 0,
                max: 60,
                radius: '66%',
                splitNumber: 6,
                axisLine: {
                    lineStyle: {
                        color: [[1, '#000']],
                        width: 3
                    }
                },
                splitLine: {
                    distance: -3,
                    length: 18,
                    lineStyle: {
                        color: '#000'
                    }
                },
                axisTick: {
                    distance: 0,
                    length: 10,
                    lineStyle: {
                        color: '#000'
                    }
                },
                axisLabel: {
                    distance: 10,
                    fontSize: 25,
                    color: '#000'
                },
                pointer: {
                    show: false
                },
                data: [
                    {
                        name: '气压表',
                        value: 1,
                        title: {
                            offsetCenter: ['0%', '84%']
                        },
                        detail: {
                            offsetCenter: ['0%', '1000%']
                        }
                    }
                ],
                anchor: {
                    show: true,
                    size: 12,
                    itemStyle: {
                        color: '#000'
                    }
                }
            }
        ]
    };
    let option3 = {
        title: {
            text: '船舶电力使用情况'
        },
        xAxis: {
            data: ['5月', '6月', '7月', '8月']
        },
        yAxis: [
            {
                name: 'KW/h',
                type: 'value',
                max: 100
            },
        ],
        series: [
            {
                type: 'candlestick',
                data: [
                    [20, 34, 10, 38],
                    [40, 35, 30, 50],
                    [31, 38, 33, 44],
                    [38, 15, 5, 42]
                ]
            }
        ]
    };
    let option4 = {
        title: {
            text: 'Distribution of Electricity',
            subtext: 'Data'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            // prettier-ignore
            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} W'
            },
            axisPointer: {
                snap: true
            }
        },
        visualMap: {
            show: false,
            dimension: 0,
            pieces: [
                {
                    lte: 6,
                    color: 'green'
                },
                {
                    gt: 6,
                    lte: 8,
                    color: 'red'
                },
                {
                    gt: 8,
                    lte: 14,
                    color: 'green'
                },
                {
                    gt: 14,
                    lte: 17,
                    color: 'red'
                },
                {
                    gt: 17,
                    color: 'green'
                }
            ]
        },
        series: [
            {
                name: 'Electricity',
                type: 'line',
                smooth: true,
                // prettier-ignore
                data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                markArea: {
                    itemStyle: {
                        color: 'rgba(255,173,177,0.4)'
                    },
                    data: [
                        [
                            {
                                name: 'Morning Peak',
                                xAxis: '07:30'
                            },
                            {
                                xAxis: '10:00'
                            }
                        ],
                        [
                            {
                                name: 'Evening Peak',
                                xAxis: '17:30'
                            },
                            {
                                xAxis: '21:15'
                            }
                        ]
                    ]
                }
            }
        ]
    };
    useEffect(() => {
        let chartDom = document.getElementById('main1');
        let myChart = echarts.init(chartDom);
        option1 && myChart.setOption(option1);
    }, [])
    useEffect(() => {
        let chartDom = document.getElementById('main2');
        let myChart = echarts.init(chartDom);
        option2 && myChart.setOption(option2);
    }, [])
    useEffect(() => {
        let chartDom = document.getElementById('main3');
        let myChart = echarts.init(chartDom);
        option3 && myChart.setOption(option3);
    }, [])
    useEffect(() => {
        let chartDom = document.getElementById('main4');
        let myChart = echarts.init(chartDom);
        option4 && myChart.setOption(option4);
    }, [])
    return (
        <>
            <Dashborad>
                <div className="chart-container">
                    <div id="main1" style={{ height: '300px', width: '300px' }}></div>

                </div>
                <div className="chart-container">
                    <div id="main2" style={{ height: '300px', width: '300px' }}></div>

                </div>
            </Dashborad>
            <Dashborad>
                <div className="chart-container">
                    <div id="main3" style={{ height: '450px', width: '450px' }}></div>
                </div>
                <div className="chart-container">
                    <div id="main4" style={{ height: '450px', width: '450px' }}></div>
                </div>
            </Dashborad>
            {/* <img src={DashBoardImg} alt="" /> */}
        </>
    )
}
