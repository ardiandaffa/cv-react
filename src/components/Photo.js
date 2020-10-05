import React, { Component } from 'react'
import styled from 'styled-components'
import photo from './Avatar.svg';


class Photo extends Component {


    render() {

        return (
            <PhotoContainer>
                <ImageContainer src={photo}/>
            </PhotoContainer>
        )
    }
}

export default Photo

const PhotoContainer = styled.div`
display: flex;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
flex-direction: column;
width: 100%;
max-width: 250px;
max-height: 200px;
color: black;
height: auto;
background-color: rgba(0,105,255,.05);
text-align: center;
border-radius: 3px;
margin-top: 1.5rem;
margin-left: 0;
`

const ImageContainer = styled.img`
    width: 200px;
    height: 200px;
    margin: auto;
`

