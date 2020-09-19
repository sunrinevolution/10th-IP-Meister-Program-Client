import React, { Component } from 'react'
import BodyItem from './BodyItem'
import burger from '../assets/images/burger.jpg'
import styled from 'styled-components'

const Wrapper=styled.div`
display:flex;
width:100%;
flex-wrap:wrap;

`

export default class Body extends Component {
    render() {
        return (
            <Wrapper>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>
                <BodyItem img={burger} name={"와규 버거"} price={"2900~"}/>

            </Wrapper>
        )
    }
}
