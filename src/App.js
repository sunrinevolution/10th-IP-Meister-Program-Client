import React from 'react';
import Banner from './Components/banner';
import Category from './Components/Category'
import {createGlobalStyle} from 'styled-components'
import Body from './Components/Body';
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
   <Banner/>
   <Category/>
   <Body/>
   </>
  );
}

export default App;
