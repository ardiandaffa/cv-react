import React, { Component } from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import styled from 'styled-components';
import Photo from './components/Photo';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "John Smith",
      job: "Noob Developer",
      email: "John@Smith.noob",
      university: "Harvard University",
      study: "Law",
      year: "2020",
      experience: "Google",
      input: false,
    }

    this.switchShow = this.switchShow.bind(this);
  }

  switchShow () {
    this.setState( prevState => ({
      input: !prevState.input
    }))
    console.log(this.state.input)
  }

  render() {


    let {name,job,email,university,study,year,experience,input} = this.state

    return(
      <div className="App">
      <Header/>

      

      <FlexRowContainer>
      <EditButton onClick={this.switchShow}>{ this.state.input? "Submit" : "Edit"}</EditButton>
      <Photo/>
      <Bio name={name} job={job} email={email} school={university} study={study} year={year} experience={experience} input={input}>
      </Bio>
      </FlexRowContainer>

    </div>
    )
  }
}


export default App;

const FlexRowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`
const EditButton = styled.button`
float: right;
width: auto;
height: auto;
position: absolute;
border: transparent;`
