import React from 'react'
import styled from 'styled-components'
import {MainFontSize} from '../../assets/Datas'
const Wraper=styled.div`
display:flex;
flex-direction:column;
width:25%;
height:33%;
cursor:pointer;
align-items:center;
justify-content:center;
;
`
const Image=styled.img`
display:flex;
width:80%;
`
const Name=styled.h2`
display:flex;
justify-content:center;
font-size:${MainFontSize+5+'px'};
font-weight:bold;
`
const Price=styled.h2`
display:flex;
display:flex;
justify-content:center;
color:red;
font-size:${MainFontSize+'px'}
`



function BodyItem(props) {
    return (
        <Wraper onClick={()=>props.clickEvent()}>
            <Image src={props.img}/>
            <Name>{props.name}</Name>
            <Price>{parseInt(props.price).toLocaleString()}원</Price>
        </Wraper>
    )
}

export default BodyItem