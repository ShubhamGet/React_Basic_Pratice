import React from "react";
import { render } from "react-dom";
import './index.css';


let curDate = new Date();
curDate = curDate.getHours();
let Greeting = '';
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  Greeting = 'Good Morning';
  cssStyle.color = 'green';
}
else if (curDate >= 12 && curDate < 19) {
  Greeting = 'Good AfterNoon';
  cssStyle.color = 'Orange';
}
else {
  Greeting = "Good Night ";
  cssStyle.color = 'Black';
}

render(
  <>
    <div>
      <h1>Hello, <span style={cssStyle}>{Greeting}</span></h1>
    </div>
  </>
  , document.getElementById("root"));