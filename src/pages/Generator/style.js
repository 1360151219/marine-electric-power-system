import styled from "styled-components"
export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`
export const ItemContainer = styled.div`
    width: 25%;
    margin: 10px 0;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title{
        padding: 8px 20px;
        border: 3px solid #000;
        border-radius: 16px;
        margin-bottom: 20px;
    }
    .btn-warpper{
        margin-top: 20px ;
        display: flex;
        width: 100%;
        justify-content: space-around;
        .disconnect,.connect{
            border-radius: 50%;
            padding:12px 10px;
            border: 1px solid #000;
            color: #fff;
            cursor: pointer;

        }
        .stop,.start{
            background-color: rgb(218,227,243);
            border: 1px solid #4472c4;
            padding: 6px 10px ;
            cursor: pointer;
        }
        .stop{
            color: #000;
        }
        .start{
            color:#70ad47
        }
        .disconnect{
            background-color: red;
        }
        .connect{
            background-color: green;
        }
    }
    .ant-input-affix-wrapper{
        margin: 10px 0;
    }
`

export const LeftList = styled.div`
   width: min-content;
   margin-right: 10px;
`