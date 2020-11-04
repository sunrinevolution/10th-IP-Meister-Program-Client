import React, { Component } from 'react'
import BodyItem from './BodyItem'
import { Product } from '../assets/Datas'
import styled from 'styled-components'
import voice from '../assets/images/voice.svg'
import Moodal from './modal'
import { dialogflow } from '../assets/api'
import googleAuth from 'google-oauth-jwt'
import dialogflowConfig from '../assets/dialogflow.json'
// const googleAuth=require('google-oauth-jwt')
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
const Image = styled.img`
position:absolute;
right:0px;
padding-right:100px;
padding-bottom:4vh;
cursor: pointer;
bottom:0px;
z-index:9999;
`

export default class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            maxPage: 0,
            total: 0,
            modal_status: false,
            time: 3,
            interver: null,
            text: '',
            text_modal_status: false,
            order_modal_status:false,
            confirm_modal_status:false,
            width:'',
            token:''
        }

        props.socket.on('confirm', data => {
            if (data['data']==='error'){
                this.orderError('주문을 다시 해 주십시오    ')
            }
            else{this.setText(data['data'])}
                
            
        })
        
        
    }

test=()=>{
    console.log('클린')
    googleAuth.authenticate({
    email: dialogflowConfig.client_email,
    key: dialogflowConfig.private_key,
    scopes: ["https://www.googleapis.com/auth/dialogflow"],
},((err,token)=>{console.log(token);
    console.log(err)
    this.setState({token:token})}))


}

    
    orderError=(str)=>{
        this.setState({order_modal_status:true,time:null,title:str})
    }
    closeOrdermodal=()=>{
        this.setState({order_modal_status:false})
    }

    confirm=(str)=>{
        this.setState({confirm_modal_status:true,time:str,title:'주문하겠습니다'})
    }
    closeConfirmModal=()=>{
        this.setState({confirm_modal_status:false})
    }
     callbackdialogflow=(str)=>{
        const token=window.localStorage.getItem('googleToken')
        dialogflow(str,token).then(res=>{
            if (res==='주문을 다시 해 주십시오'){
                this.orderError(res)
            }else if (res==='err'){
                this.orderError(res)
            }
            else{
                this.confirm(res)
            }
        })
    }

    setText = (str) => {
        this.setState({ text: str, text_modal_status: true })

    }
    formatText=()=>{
        this.setState({ text: '' })
    }

    componentDidMount() {
        if(this.props.age=='middle'){this.setState({width:'33%'})}
        else if(this.props.age=='senior'){this.setState({width:'50%'})}
        else if(this.props.age=='junior'){this.setState({width:'25%'})}
        
        this.setState({
            maxPage: parseInt(Product.length / this.props.page)
        })

    }
    rigthButton = () => {
        this.setState({ page: this.state.page + 1 })
    }
    leftButton = () => {
        this.setState({ page: this.state.page - 1 })
    }

    click = () => {
        this.test()

        this.props.socket.on('done',data=>{
            this.props.socket.emit('done')
            this.setState({time: 3, interver: setInterval(this.setTimer, 1000) })
        })
        
        this.setState({ modal_status: true, time: '대기' })
        this.props.socket.emit('order',{str:'주문하실 메뉴를 또박 또박 말씀해 주십시오',time:4})
        
            
            // this.props.voice_order()
            
    }

        setTimer = () => {
        if (this.state.time<= 0) {
            this.setState({ modal_status: false })
            clearInterval(this.state.interver)
            this.props.socket.off('done')
        }
        else {
            this.setState({ time: this.state.time - 1 })
        }
    }

    closeModal = () => {
        this.setState({ modal_status: false })
    }

    closeTextModal = () => {
        this.setState({ text_modal_status: false })

    }

    render() {
        return (<Wrapper>
            {/* 말씀해주십시오 */}
            <Moodal socket={this.props.socket} btn={false} modal={this.state.modal_status} title={'주문하실 메뉴를 또박또박 말씀해 주십시오'} time={this.state.time} setmodal={this.setState} closeModal={this.closeModal} />
            {/* 이렇게 말씀하셧습니까? */}
            <Moodal dialogflow={this.callbackdialogflow} socket={this.props.socket} btn={true} formatText={this.formatText} modal={this.state.text_modal_status} title={'이렇게 말씀하셨습니까?'} time={this.state.text} setmodal={this.setState} closeModal={this.closeTextModal} />
            {/* 다시주문하십시오 */}
            <Moodal socket={this.props.socket} btn={false} modal={this.state.order_modal_status} title={this.state.title} time={this.state.time} setmodal={this.setState} closeModal={this.closeOrdermodal} />
            {/* 이렇게 주문하겠습니다 */}
            <Moodal socket={this.props.socket} btn={false} modal={this.state.confirm_modal_status} title={this.state.title} time={this.state.time} setmodal={this.setState} closeModal={this.closeConfirmModal} />

            <MiddleWrapper>
                {this.state.page != 0 ? <OutSide onClick={this.leftButton} style={{ textAlign: 'right' }}>◀</OutSide> :
                    <OutSide style={{ cursor: 'default', textAlign: 'right' }}></OutSide>}

                <Item>
                    {
                        Product.slice(this.state.page * this.props.page, (this.state.page * this.props.page) + this.props.page).map((item) => {
                            return <BodyItem fontSize={this.props.fontSize} age={this.props.age} itemWidth={this.state.width} clickEvent={() => this.setState({ total: this.state.total + parseInt(item.price) })} img={item.img} name={item.name} price={item.price} />
                        })
                    }

                </Item>

                {this.state.page != this.state.maxPage ? <OutSide onClick={this.rigthButton} >▶</OutSide> :
                    <OutSide style={{ cursor: 'default', textAlign: 'right' }}></OutSide>}

            </MiddleWrapper>

            {/* <Page>{this.state.page+1}/{this.state.maxPage+1}</Page> */}
            <Total>총 주문 금액:<Gray> {(this.state.total).toLocaleString()}원</Gray></Total>
            <Image onClick={this.click} src={voice}></Image>
        </Wrapper>
        )
    }
}
