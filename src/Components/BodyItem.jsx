import React from 'react'
import styled from 'styled-components'
import {MiddleFontSize} from '../assets/Datas'



const Wraper=styled.div`
display:flex;
flex-direction:column;
width:${props=>props.itemWidth||0};
height:${props=>props.itemWidth||0};
cursor:pointer;
align-items:center;
justify-content:center;

&:active{
filter:brightness(80%);
}
`
const Image=styled.img`
display:flex;
width:80%;
`
const Name=styled.h2`
display:flex;
justify-content:center;
font-size:${props=>props.fontSize+5+'px'};
`
const Price=styled.h2`
display:flex;
display:flex;
justify-content:center;
color:red;
font-size:${props=>props.fontSize+'px'};
`


function BodyItem(props) {
    return (
        <Wraper  itemWidth={props.itemWidth} onClick={()=>props.clickEvent()}>
            <Image src={props.img}/>
            <Name fontSize={props.fontSize}>{props.name}</Name>
            <Price fontSize={props.fontSize}>{parseInt(props.price).toLocaleString()}원</Price>
        </Wraper>
    )
}

export default BodyItem