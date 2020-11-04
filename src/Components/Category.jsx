import React from 'react'
import styled from 'styled-components'
import {percent20} from '../assets/Init'
const Ul=styled.ul`
width:100%;
height:15vh;
display:flex;
flex-wrap:wrap;
    
    li:nth-child(${(props)=>props.child||0}){
        color:#D50D0D;  
        /* box-shadow:1px 1px 10px #800000; */
        border-color:#800000;
    }
`
const Li=styled.li`

display:flex;
color:#817D7D;
width:25%;
height:50%;
align-items: center;
text-align:center;
justify-content:center;
flex-direction:center;
font-size:25px;
font-weight:bold;
cursor:pointer;
`


const getNth=(event)=> {
    
    let elem=event.target
    
    for(var i = 0; i < elem.parentNode.childNodes.length; i++) {
      if (elem.parentNode.childNodes[i] === elem) {
        return i+1
      }
    }
  }
export default function Category() {
    const [Selected,setSelected] = React.useState(1)
    return (
        <Ul height={percent20} child={Selected}>
            <Li onClick={(event)=>{setSelected(getNth(event))}}>행사메뉴</Li>
            <Li onClick={(event)=>{setSelected(getNth(event))}}>메뉴1</Li>
            <Li onClick={(event)=>{setSelected(getNth(event))}}>메뉴2</Li>
            <Li onClick={(event)=>{setSelected(getNth(event))}}>메뉴3</Li>
            <Li onClick={(event)=>{setSelected(getNth(event))}}>행사메뉴</Li>
            <Li onClick={(event)=>{setSelected(getNth(event))}}>메뉴1</Li>
            <Li onClick={(event)=>{setSelected(getNth(event))}}>메뉴2</Li>
            <Li onClick={(event)=>{setSelected(getNth(event))}}>메뉴3</Li>
            
        </Ul>
    )
}
