import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
width:100vw;
height:100vh;
align-items:center;
justify-content:center;
display:flex;
`
const Button = styled.button`
width:30%;
height:30%;
background:#1AAB8A;

color:#f0f0f0;
  border:none;
  position:relative;
  font-size:1.6em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
`
export default function MenuPage(props) {
    return (
        <Wrapper>
            <Button onClick={props.goUi}>주문하기</Button>
        </Wrapper>
    )
}
