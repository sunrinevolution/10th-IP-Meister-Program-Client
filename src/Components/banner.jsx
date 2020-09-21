import React from "react"
import styled from 'styled-components'
import benner_image from '../assets/images/banner-image.jpg'

const Wrapper=styled.div`
width:100%;
height:20vh;
display:flex;
box-sizing:border-box;

`

const Image=styled.img`
height:100%;
width:100%;

`


const Banner = props => {

        return (
        <>
                <Wrapper>
                        <Image src={benner_image}/>
                        

                        


                        
                </Wrapper>
        </>
        )
}
export default Banner