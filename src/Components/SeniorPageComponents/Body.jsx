import React, { Component } from 'react'
import BodyItem from './BodyItem'
import styled from 'styled-components'
import { Product } from '../../assets/Datas'

const Wrapper = styled.div`

`
const MiddleWrapper = styled.div`
display:flex;
height:60vh;


`
const OutSide = styled.div`
width:10%;
font-size:50px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`
const Item = styled.div`
display:flex;
width:80%;
flex-wrap:wrap;
align-content: flex-start;


`
const Page = styled.div`
width:100%;
align-items:center;
text-align:center;
`
const Total = styled.div`
align-items: center;
text-align:center;
justify-content:center;
flex-direction:center;
font-size:25px;
font-weight:bold;

`
const Gray = styled.span`
color:gray;
`

export default class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            maxPage: 0,
            total: 0,

        }
    }
    componentDidMount() {
        this.setState({
            maxPage: parseInt(Product.length / 4)
        })

    }
    rigthButton = () => {
        this.setState({ page: this.state.page + 1 })
    }
    leftButton = () => {
        this.setState({ page: this.state.page - 1 })
    }
    render() {
        return (<Wrapper>

            <MiddleWrapper>
                {this.state.page != 0 ? <OutSide onClick={this.leftButton} style={{ textAlign: 'right' }}>◀</OutSide> :
                    <OutSide style={{ cursor: 'default', textAlign: 'right' }}></OutSide>}

                <Item>
                    {

                        Product.slice(this.state.page * 4, (this.state.page * 4) + 4).map((item) => {
                            return <BodyItem clickEvent={() => this.setState({ total: this.state.total + parseInt(item.price) })} img={item.img} name={item.name} price={item.price} />
                        })
                    }

                </Item>

                {this.state.page != this.state.maxPage ? <OutSide onClick={this.rigthButton} >▶</OutSide> :
                    <OutSide style={{ cursor: 'default', textAlign: 'right' }}></OutSide>}

            </MiddleWrapper>

            {/* <Page>{this.state.page+1}/{this.state.maxPage+1}</Page> */}
            <Total>총 주문 금액:<Gray> {(this.state.total).toLocaleString()}원</Gray></Total>

        </Wrapper>
        )
    }
}
