import React, { Component } from 'react'
import styled from 'styled-components'

class Bio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            job: this.props.job,
            email: this.props.email,
            school: this.props.school,
            study: this.props.study,
            yearClass: this.props.year,
            experience: this.props.experience,
            input: this.props.input,
        };

    }

    componentDidUpdate(prevProps) {
        if (this.props.input !== prevProps.input)
          this.setState({input: this.props.input})
            }

    handleChangeName = (e) => {
    this.setState({
      name : e.target.value,
        });
    };

    handleChangeJob = (e) => {
        this.setState({
          job : e.target.value,
            });
        };

    handleChangeEmail = (e) => {
        this.setState({
          email: e.target.value,
            });
        };
    handleChangeSchool = (e) => {
        this.setState({
          school: e.target.value,
            });
        };
    handleChangeStudy = (e) => {
        this.setState({
          study: e.target.value,
            });
        };
    handleChangeClass = (e) => {
        this.setState({
          yearClass: e.target.value,
            });
        };
    handleChangeExperience = (e) => {
        this.setState({
          experience: e.target.value,
            });
        };

    render() {

        let {name,job,email,school,study,yearClass,experience,input} = this.state


        return (
            <div>
            <StyledBioContainer>
                <StyledSubtitle>Name</StyledSubtitle>
                { !input ? <StyledParagraph>{name}</StyledParagraph> : <input onChange={this.handleChangeName}></input>}
                <StyledSubtitle>Job</StyledSubtitle>
                { !input ? <StyledParagraph>{job}</StyledParagraph> : <input onChange={this.handleChangeJob}></input>}
                <StyledSubtitle>Email</StyledSubtitle>
                { !input ? <StyledParagraph>{email}</StyledParagraph> : <input onChange={this.handleChangeEmail}></input>}
                <StyledSubtitle>School</StyledSubtitle>
                { !input ? <StyledParagraph>{school}</StyledParagraph> : <input onChange={this.handleChangeSchool}></input>}
                <StyledSubtitle>Title of Study</StyledSubtitle>
                { !input? <StyledParagraph>{study}</StyledParagraph> : <input onChange={this.handleChangeStudy}></input>}
                <StyledSubtitle>Class</StyledSubtitle>
                { !input? <StyledParagraph>{yearClass}</StyledParagraph> : <input onChange={this.handleChangeClass}></input>}
                <StyledSubtitle>Experiences</StyledSubtitle>
                { !input? <StyledParagraph>{experience}</StyledParagraph> : <input onChange={this.handleChangeExperience}></input>}
            </StyledBioContainer>
            </div>
        )
    }
}

export default Bio;


const StyledBioContainer = styled.div`
display: flex;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
flex-direction: column;
width: 100%;
padding: 3rem;
color: black;
height: auto;
background-color: rgba(0,105,255,.05);
text-align: center;
border-radius: 3px;
margin-top: 1.5rem;
`

const StyledSubtitle = styled.h6`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 12px;
margin-top: 10px;
margin-bottom: 0px;
color: gray;
`

const StyledParagraph = styled.p`
margin-top: 0.75rem;
margin-bottom: 5px;
font-size: 20px;
`