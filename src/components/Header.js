import React, { Component } from 'react'
import styled from 'styled-components'


class Header extends Component {




    render() {
        return (
        <StyledHeader>
            <StyledWebTitle> MY PORTFOLIO </StyledWebTitle>
        </StyledHeader>
        )
    }
}

export default Header;


const StyledHeader = styled.div`
text-align: center;
color: black;
font-family: Arial, Helvetica, sans-serif;
width: 100%;
height: auto;
padding: 0.5rem;
margin-right: auto;
margin-left: auto;
margin-bottom: 2rem;
`

const StyledWebTitle = styled.h1`
font-size: 35px;
`