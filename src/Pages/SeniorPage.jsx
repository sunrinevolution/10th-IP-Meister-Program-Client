import React from 'react'
import Banner from '../Components/banner'
import Category from '../Components/Category'
import Body from '../Components/Body'
export default function SeniorPage(props) {
    return (
        <>
            <Banner/>
            <Category/>
            <Body page={4} fontSize={30} age='senior' socket={props.socket} voice_order={props.voice_order}/>

            
        </>
    )
}
