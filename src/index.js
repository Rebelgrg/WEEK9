import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';
import ToggleMode from './ToggleModeComponent';
import FacebookEmojiCounter from './FaceBookEmoji';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
 <FacebookEmojiCounter type= "Like"/>
 < FacebookEmojiCounter type= "Love"/>
 < FacebookEmojiCounter type= "happy"/>
 <ToggleMode/>
 </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
