import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container-bio">
      <Bio name="Daffa Rizqi Ardiansyah F" job="Web Developer" email="ardiandaffa@icloud.com"/>
      </div>
    </div>
  );
}

export default App;
