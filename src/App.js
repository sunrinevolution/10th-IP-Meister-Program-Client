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
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(localMediaStream);

    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // See crbug.com/110938.
    video.onloadedmetadata = function(e) {
      // Ready to go. Do some stuff.
    };
  }, onFailSoHard);
}

function App() {
  return (
   <>
   {GetCamer()}
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
     </Router>
 

   </>
  );
}

export default App;
