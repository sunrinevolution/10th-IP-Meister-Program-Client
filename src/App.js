import React from 'react';
import {Route,HashRouter as Router} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import MainPage from './Pages/MainPage'
import SeniorPage from './Pages/SeniorPage'
import MiddlePage from './Pages/MiddlePage'
import MenuPage from './Pages/MenuPage'

import socketio from 'socket.io-client'
import { getToken } from './assets/api';

const socket = socketio.connect('http://localhost:5000/kiosk');



const init=()=>{
    getToken()
    socket.on("getImage", (data) => {
      let age =data['age']
      console.log('predicted age : '+age)
      if (age<30){
        window.location.href='#/Junior'
      }
      else if (age<50){
        window.location.href='#/Middle'
      }
      else{
        window.location.href='#/Senior'
        
      }
    })

    
}



const voice_order=()=>{
  socket.emit('voice recognition')  
}

const goUi = () => {
  socket.emit("request", {data: "connect" })
  
    socket.emit("getImage", {time:10  })
  
}
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
   < >
   <GlobalStyle/>
{init()}
<Router basename={process.env.REACT_APP_ROUTER_BASE || ''}>
   <Route path='/' exact>
     <MenuPage goUi={goUi}></MenuPage>
   {/* <button onClick={goUi}>시작</button> */}
  </Route>
<Route path='/Junior' exact>
     <MainPage socket={socket} voice_order={voice_order}/>
  </Route>

  <Route path='/Middle' exact>
     <MiddlePage socket={socket} voice_order={voice_order}/>
  </Route>
  <Route path='/Senior' exact>
    <SeniorPage socket={socket} voice_order={voice_order}/>
  </Route>

  <Route path='/video' exact>
   {}
   <button onClick={GetCamer}>비디오 시작!</button>
    <video autoPlay uri='https://www.youtube.com' id='player'></video>
    <button onClick={goUi}>소켓테스트</button>
  </Route>
     </Router>
 

   </>
  );
}

export default App;
