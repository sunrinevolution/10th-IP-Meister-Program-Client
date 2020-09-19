import React from 'react'
import styled from 'styled-components'

const Wraper=styled.div`
display:flex;
flex-direction:column;
width:25%;
`
const Image=styled.img`
display:flex;
width:100%;
`
const Name=styled.h2`
display:flex;
justify-content:center;
`
const Price=styled.h2`
display:flex;
display:flex;
justify-content:center;
color:red;
`



function BodyItem(props) {
    return (
        <Wraper>
            <Image src={props.img}/>
            <Name>{props.name}</Name>
            <Price>{props.price}</Price>
        </Wraper>
    )
}

export default BodyItem