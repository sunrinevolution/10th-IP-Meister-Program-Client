import React from 'react'
import Banner from '../Components/banner'
import Category from '../Components/Category'
import Body from '../Components/Body'
export default function MainPage(props) {
    return (
        <>
            <Banner/>
            <Category/>
            <Body page={12} fontSize={15} age='junior' socket={props.socket} voice_order={props.voice_order}/>
        </>
    )
}
