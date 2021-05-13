import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

const item = <p>This is an item element</p>
const Item = (props) => {
  return(
    <h1>This is Item Component. My name is: {props.name} </h1>
  )
}
const Item2 = () => {
  return(
    <h1>This is Item2 Component. </h1>
  )
}
const element1 = <div>
  <h1>Hello, Element3</h1>
  {item}
  {item}
  <Item name="Ravi"/>
  <Item2 />
</div>

ReactDOM.render(
     <App />,
    // Item name="Teja" />,
    // element1,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
