import React from 'react'
import Banner from '../Components/banner'
import Category from '../Components/Category'
import Body from '../Components/Body'
export default function MiddlePage(props) {
    return (
        <>
            <Banner/>
            <Category/>
            <Body page={9} age='middle' fontSize={20} socket={props.socket} voice_order={props.voice_order}/>
        </>
    )
}
