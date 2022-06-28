import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import { UserInfoContextProvider } from './contexts/user-info-context';
import styled from 'styled-components'

/*
Add CSS in JS Script - https://www.smashingmagazine.com/2016/04/finally-css-javascript-meet-cssx/
var sheet = cssx();
sheet.add('p > a', {
  'font-size': '20px'
});

Add CSS in the React Components using styled-components
https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
 */

const Div = styled.div`
  margin: 400px;
  border: 5px outset pink;
  &:hover {
  background-color: yellow;
  }

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserInfoContextProvider>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserInfoContextProvider>

);

