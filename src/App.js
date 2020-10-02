import React from 'react';
import {createGlobalStyle} from 'styled-components'
import MainPage from './Pages/MainPage'
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
function App() {
  return (
   <>
   <GlobalStyle/>
   <MainPage/>
   </>
  );
}

export default App;
