import React from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import MainPage from './Pages/MainPage'
import SeniorPage from './Pages/SeniorPage'
import MiddlePage from './Pages/MiddlePage';
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration:none;
    color:white;
  }

`
const GetCamer=()=>{

  var onFailSoHard = function(e) {
    console.log('Reeeejected!', e);
  };

  // Not showing vendor prefixes.
  navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
    let player=document.getElementById('player')
    player.srcObject=localMediaStream
    // player.src=URL.createObjectURL(localMediaStream)
  }, onFailSoHard);
}

function App() {
  return (
   <>
   <GlobalStyle/>

<Router>
<Route path='/' exact>
     <MainPage/>
  </Route>

  <Route path='/Middle' exact>
     <MiddlePage/>
  </Route>
  <Route path='/Senior' exact>
    <SeniorPage/>
  </Route>

  <Route path='/video' exact>
   {}
   <button onClick={GetCamer}>비디오 시작!</button>
    <video autoPlay uri='https://www.youtube.com' id='player'></video>
  </Route>
     </Router>
 

   </>
  );
}

export default App;
