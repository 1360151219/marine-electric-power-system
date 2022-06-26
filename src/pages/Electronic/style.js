import styled from "styled-components"

export const ElectronicContainer = styled.div`
    display: flex;
    padding: 40px 0;
    .correct{
        color: #65ea65;
        font-size: 18px;
    }
`
export const LeftList = styled.div`
   width: min-content;
   margin-right: 10px;
`
export const ElectronicImg = styled.div`
    flex: 1;
    .station{
        display: flex;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 16px;
        background-color: #fffbf7;
        >div{
            flex:1
        }
        .station-detail{
            margin: 10px;
            
            .paramItem{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin: 10px 0;
                label{
                    font-weight: 700;
                    margin-right: 20px;
                }
            }
        }
        .imgs{
            text-align: center;
            img{
                
                display: block;
                width: 100px;
                margin: 4px auto;
            }
        }
    }
`