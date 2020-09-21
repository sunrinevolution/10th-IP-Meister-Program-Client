import React, { Component } from 'react'
import BodyItem from './BodyItem'
import burger from '../assets/images/burger.jpg'
import styled from 'styled-components'

const Wrapper=styled.div`
    margin-top:1vh;

`
const MiddleWrapper=styled.div`
display:flex;
height:80vw;

`
const OutSide=styled.div`
width:10%;
font-size:50px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`
const Item=styled.div`
display:flex;
width:80%;
flex-wrap:wrap;
align-content: flex-start;


`
const Page=styled.div`
width:100%;
align-items:center;
text-align:center;
`
export default class Body extends Component {
    constructor(props){
        super(props)
        this.state={
            page:0,
            maxPage:0,
            items:[{
                img:burger,
                name:"와규버거",
                price:"2900"},{
                    img:burger,
                    name:"와규버거",
                    price:"2900"},{
                        img:burger,
                        name:"와규버거",
                        price:"2900"},{
                            img:burger,
                            name:"와규버거",
                            price:"2900"},{
                                img:burger,
                                name:"와규버거",
                                price:"2900"},{
                img:burger,
                name:"와규버거",
                price:"2900"},
            ]
        }
    }
    componentDidMount(){
        this.setState({
            maxPage:parseInt(this.state.items.length/12)
        })
        
    }
    rigthButton=()=>{
        this.setState({page:this.state.page+1})
    }
    leftButton=()=>{
        this.setState({page:this.state.page-1})
    }
    render() {
        return (<Wrapper>
            <MiddleWrapper>
            <OutSide onClick={this.leftButton} style={{textAlign:'right'}}>◀</OutSide>
            <Item>
                {
                    this.state.items.slice(this.state.page*12,(this.state.page*12)+12).map((item)=>{
                      return  <BodyItem img={item.img} name={item.name} price={item.price}/>
                    })
                }

            </Item>
            <OutSide onClick={this.rigthButton}>▶</OutSide>
            </MiddleWrapper>
            <Page>{this.state.page+1}/{this.state.maxPage+1}</Page>
            </Wrapper>
        )
    }
}
